<?php
/**
 * Template Name: Contact Page
 *
 * Template for general content pages
 */
$context = Timber::get_context();
$context['post'] = new Timber\Post();

Timber::render('pages/contact.twig', $context);
