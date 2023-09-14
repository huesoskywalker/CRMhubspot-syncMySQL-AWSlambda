# Infrastructure Documentation

## Overview

This document outlines the infrastructure, design patterns, and configurations used within the HubSpot CRM integration system. The integration leverages HubSpot's V3 API and MySQL for data persistence, designed to be generic and handle different scenarios such as contacts, properties, deals, etc.

## Table of Contents

1. [Overview](#overview)
2. [Database Configuration](#database-configuration)
    - [Connection Pooling](#connection-pooling)
    - [Pagination Queries](#pagination-queries)
3. [HubSpot Integration](#hubspot-integration)
    - [Library Usage](#library-usage)
    - [Endpoints](#endpoints)
    - [Authentication](#authentication)
        - [Private App](#private-app)
4. [Error Handling, Logging, and Retry Logic](#error-handling-logging-and-retry-logic)
5. [Dependencies and Versioning](#dependencies-and-versioning)
    - [Version Information](#version-information)
    - [Main Dependencies](#main-dependencies)
    - [Development Dependencies](#development-dependencies)
6. [Conclusion](#conclusion)

## Database Configuration

-   **Host**: The hostname for the MySQL server (e.g., `localhost`).
-   **User**: The MySQL user (e.g., `root`).
-   **Password**: The MySQL password.
-   **Database Name**: The name of the database being used (e.g., `hubspot_sync`).
-   **Connection Limit**: The maximum number of connections allowed (e.g., `10`).

### Connection Pooling

We are using MySQL's connection pooling to manage connections efficiently. Below are the configurations:

-   `waitForConnections`: true
-   `connectionLimit`: 10
-   `queueLimit`: 0

### Pagination Queries

-   **Contacts Pagination Query**: `SELECT next_after FROM hs_contacts_pagination ORDER BY last_sync_date DESC LIMIT 1`
-   **Deals Pagination Query**: `SELECT next_after FROM hs_deals_pagination ORDER BY last_sync_date DESC LIMIT 1`

## HubSpot Integration

### Library Usage

The integration is built using the `@hubspot/api-client` library, providing access to HubSpot's V3 API endpoints.

### Endpoints

-   **Contacts Endpoint**:
-   **Deals Endpoint**:

### Authentication

The system authenticates with HubSpot's API using an access token associated with a private app. This authentication method ensures a secure connection tailored to the specific requirements and permissions defined within the app's settings.

#### Private App

By utilizing a private app for authentication, the system benefits from enhanced security and control. The private app can be configured with the precise permissions and scope needed, limiting access to only those endpoints necessary for the intended functionality. This customization minimizes exposure to unnecessary risks and aligns closely with the principle of least privilege.

## Error Handling, Logging, and Retry Logic

The code incorporates robust error handling, using try-catch blocks and specific error types. It leverages the `p-retry` package to manage retries, allowing up to 10 attempts for certain operations. The Winston logger is employed to systematically log all errors and warnings, including detailed information on failed attempts and retries.

Warnings for failed attempts during the retry operations are captured, streamlining tracking and debugging. This logging strategy ensures that valuable insights into the system's behavior are preserved, simplifying problem diagnosis and comprehension of the application's flow.

By utilizing a specialized logging library like Winston, the application's logging can be effortlessly configured to accommodate various needs across development, testing, and production environments. This centralized approach to logging enhances both real-time monitoring and post-incident analysis, maintaining a consistent and clear record of all essential operational aspects.

### Version Information

-   **Application Version**: `1.0.0`

### Main Dependencies

-   **HubSpot API Client**: `^9.1.0`
-   **MySQL2**: `^3.6.0`
-   **p-retry**: `3.0.1`
-   **Winston (Logging)**: `^3.10.0`

### Development Dependencies

-   **TypeScript**: `^5.1.6`
-   **@types/node**: For TypeScript declarations.

## Conclusion

This documentation serves as a comprehensive guide to the integration's infrastructure, covering key aspects such as database configurations, HubSpot integration, error handling, and dependencies. Adhering to best practices, the code has been crafted to be extensible and maintainable, allowing for adaptability across various HubSpot scenarios.
