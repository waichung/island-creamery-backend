<?php
/**
 * Template Name: Contact Page
 *
 * Template for general content pages
 */
$context = Timber::get_context();
$context['post'] = new Timber\Post();
$context['enquiry_url'] = site_url('contact');
$context['community_url'] = site_url('community');
$context['catering_url'] = site_url('catering');
$context['jobs_url'] = site_url('jobs');

Timber::render('pages/contact.twig', $context);
