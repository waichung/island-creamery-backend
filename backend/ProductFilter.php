<?php

// Valid Filters
$valid_filters = [
    'price' => '_price',
    'date'  => 'date'
];

/**
 * Order products by a speicifc query. Order by:
 *
 * Price: _price
 * Date: date
 *
 * @return Array
 */
function orderProducts() {

    $order = (get_query_var('order') == 'ASC') ? 'ASC' : 'DESC';
    $orderby = get_query_var('orderby');

    /**
     * check our valid filters to filter WC product list
     * @var String
     */
    switch ($orderby) {

        case 'price':

            return [
                'meta_key'      => '_price',
                'order'         => $order ? $order : 'ASC'
            ];

            break;

        case 'date':

            return [
                'orderby'       => 'date',
                'order'         => $order ? $order : 'ASC'
            ];

            break;

        default:

            return [];

            break;

    }

}

function getCurrentFilter() {

    $query = get_query_var('orderby');

    // Valid Filters
    $valid_filters = [
        'price' => '_price',
        'date'  => '_date',
        'date ID'  => '_date'
    ];

    return array_key_exists($query, $valid_filters) ? $query : null;

}
