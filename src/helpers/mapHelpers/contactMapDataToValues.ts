import { IContact, contactDatabaseValuesType } from "../../types/contact"
import { ContactPropertyDatabaseValues, IContactProperty } from "../../types/contact"

export const contactMapDataToValues = (contact: IContact): contactDatabaseValuesType => [
    contact.id,
    contact.properties.firstname,
    contact.properties.lastname,
    contact.properties.lifecyclestage,
    contact.properties.email,
    contact.properties.phone,
    contact.properties.country,
    contact.properties.createdate,
    contact.properties.lastmodifieddate,
]

export const contactPropertiesMapDataToValues = (
    property: IContactProperty
): ContactPropertyDatabaseValues => [property.name, property.label, property.updatedAt]
