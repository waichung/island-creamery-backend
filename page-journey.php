<?php
/**
 * Template Name: About Page
 *
 * Template for the About page
 */
$context = Timber::get_context();
$context['post'] = new Timber\Post();

Timber::render('pages/about.twig', $context);
