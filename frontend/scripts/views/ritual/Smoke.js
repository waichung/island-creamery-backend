export default class Smoke {

    constructor(context, color) {
        this.color = color || [24, 46.8, 48.2]

        this.lastframe;
        this.currentparticles = [];
        this.pendingparticles = [];

        this.canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d');

        this.canvas.width = 20;
        this.canvas.height = 20;

        this.opacities = [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,3,5,5,7,4,4,1,1,0,1,0,0,0,0,0,1,0,0,17,27,41,52,56,34,23,15,11,4,9,5,1,0,0,0,0,0,0,1,45,63,57,45,78,66,52,41,34,37,23,20,0,1,0,0,0,0,1,43,62,66,64,67,115,112,114,56,58,47,33,18,12,10,0,0,0,0,39,50,63,76,87,107,105,112,128,104,69,64,29,18,21,15,0,0,0,7,42,52,85,91,103,126,153,128,124,82,57,52,52,24,1,0,0,0,2,17,41,67,84,100,122,136,159,127,78,69,60,50,47,25,7,1,0,0,0,34,33,66,82,113,138,149,168,175,82,142,133,70,62,41,25,6,0,0,0,18,39,55,113,111,137,141,139,141,128,102,130,90,96,65,37,0,0,0,2,15,27,71,104,129,129,158,140,154,146,150,131,92,100,67,26,3,0,0,0,0,46,73,104,124,145,135,122,107,120,122,101,98,96,35,38,7,2,0,0,0,50,58,91,124,127,139,118,121,177,156,88,90,88,28,43,3,0,0,0,0,30,62,68,91,83,117,89,139,139,99,105,77,32,1,1,0,0,0,0,0,16,21,8,45,101,125,118,87,110,86,64,39,0,0,0,0,0,0,0,0,0,1,28,79,79,117,122,88,84,54,46,11,0,0,0,0,0,0,0,0,0,1,0,6,55,61,68,71,30,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,23,25,20,12,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,9,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,2,0,0,0,0,0,0,0,0]

        this.data = this.ctx.createImageData(20,20);
        this.d = data.data

        for(var i=0;i<d.length;i+=4){
            this.d[i] = this.color[0]
            this.d[i+1] = this.color[1]
            this.d[i+2] = this.color[2]
            this.d[i+3] = this.opacities[i / 4]
        }

        this.ctx.putImageData(data,0,0)

        this.imagewidth = 20 * 5;
        this.imageheight = 20 * 5;

    }


    particle(x, y, l) {

        let x = x
        let y = y
        let age = 0
        let vx = (Math.random()*8-4)/100
        let startvy = -(Math.random()*30+10)/100
        let vy = startvy
        let scale = Math.random()*.5
        let lifetime = Math.random()*l+l/2
        let finalscale = 5+this.scale+Math.random();

        let update = function(deltatime) {
            x += vx * deltatime;
            y += vy * deltatime;

            let frac = Math.pow((this.age)/this.lifetime,.5);

            vy = (1-frac)*this.startvy;
            age += deltatime;
            scale = frac * this.finalscale;
        }

        let draw = function() {
            context.globalAlpha = (1 - Math.abs(1 - 2 * (age) / lifetime)) / 8;

            var off = scale * imagewidth / 2;
            var xmin = x - off;
            var xmax = xmin + scale * imageheight;
            var ymin = y - off;
            var ymax = ymin + scale * imageheight;

            context.drawImage(this.canvas, xmin, ymin, xmax-xmin, ymax-ymin);

        }

    }


    addparticles(x, y, n, lifetime) {

        lifetime = lifetime || 4000
        n = n || 10
        if(n < 1) return Math.random() <= n && this.pendingparticles.push(new particle(x,y,lifetime));

        for (var i = 0; i < n; i++) {
            this.pendingparticles.push(particle(x,y,lifetime));
        }

    }

    updateanddrawparticles(deltatime){

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        deltatime = deltatime || 16
        var newparticles = []
        currentparticles = currentparticles.concat(this.pendingparticles)
        pendingparticles = []

        currentparticles.forEach(function(p){
            p.update(deltatime)
            if (p.age<p.lifetime){
                p.draw()
                newparticles.push(p)
            }
        })
        currentparticles = newparticles
    }

    function frame(time){
        if(running){
            var deltat = time-lastframe
            lastframe = time;

            updateanddrawparticles(deltat)

            polyfillAnimFrame(frame)
        }
    }

    var running = false
    function start(){
        running = true
        polyfillAnimFrame(function(time){
            lastframe = time
            polyfillAnimFrame(frame)
        })
    }

    function stop(){
        running = false
    }

    return {
        start:start,
        stop:stop,
        step: updateanddrawparticles,
        addsmoke: addparticles
    }

}
