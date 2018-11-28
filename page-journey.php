<?php
/**
 * Template Name: Journey Page
 *
 * Template for the Journey page
 */
$context = Timber::get_context();
$context['post'] = new Timber\Post();

Timber::render('pages/journey.twig', $context);
