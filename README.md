# HubSpot Data Synchronization

This module provides functionalities for synchronizing data with HubSpot, including contacts and other objects. It includes functions for fetching data, mapping it to the appropriate structure, and saving it to a database. The process is robust, with built-in retry logic.

## Features

-   Fetching data from HubSpot with pagination support.
-   Customizable data mapping.
-   Saving data to a MySQL database.
-   Retry logic for fetch and save operations.

## Directory Structure

-   **helpers/search**: Contains functions related to searching, such as `doSearch`.
-   **helpers/sync**: Contains functions related to synchronization, including Contacts, Deals, and Properties.

## Usage

### Synchronization Function

The main function for synchronization is `syncData`, and it's used as shown in the example provided.

### Fetching Data from HubSpot

Use the `fetchDataFromHubSpot` function to fetch data from HubSpot, with built-in retry logic.

### Saving Data to the Database

Use the `saveDataToDatabase` function to save data to the MySQL database.

### Retry Operations

The `retryOperation` function provides a way to retry any operation. It uses the `p-retry` library.

## Dependencies

-   `HubSpot Client`
-   `mysql2`
-   `p-retry`

## Installation

` npm install or yarn`

# ADR: HubSpot Data Synchronization

## Context

We needed a robust and flexible way to synchronize data with HubSpot, including handling pagination, mapping, saving to the database, and retries.

## Decision

We implemented separate functions to handle different aspects of synchronization:

-   `syncData`: The main function for synchronization.
-   `fetchDataFromHubSpot`: Fetching data from HubSpot.
-   `saveDataToDatabase`: Saving data to the database.
-   `retryOperation`: A generic retry function.

## Rationale

This modular approach allows each function to have a single responsibility, making the code more maintainable and flexible. It also enables customization and adaptation to different data objects beyond contacts.

## Status

Accepted.

## Consequences

-   Flexibility in handling different data objects.
-   Robustness through retry logic.
-   Requires proper configuration and understanding of the individual functions.
-   Dependencies on external libraries like `mysql2` and `p-retry`.
