<?php
/**
 * Template Name: Bloom Stories Page
 *
 * Template for the Journey page
 */
$context = Timber::get_context();
$context['post'] = new Timber\Post();

Timber::render('pages/stories.twig', $context );
