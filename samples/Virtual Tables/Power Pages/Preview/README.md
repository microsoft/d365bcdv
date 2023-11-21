# Power Pages on Virtual Tables (Preview)

## Introduction
Data virtualization is part of the fabric/one of the tools to integrate Business Central online with Microsoft Dataverse/Power Platform, see [a review of Business Central & Dataverse integration](https://github.com/microsoft/d365bcdv/blob/main/Review%20of%20Business%20Central%20and%20Dataverse%20integration.pdf).  It allows users with Business Central licenses/entitlements to access data stored in Business Central online by performing (**C**reate/**R**ead/**U**pdate/**D**elete) API operations on Business Central tables that are available as virtual tables in Dataverse.  

![Screenshot](../../../images/virtual-table-inbound-interaction.png)

These licensed users are considered as internal users to the organizations/companies that purchase those licenses.  They’re in employee-like relationships with the companies and perform business processes on the companies’ behalf.  They can access data stored in Business Central online using Power Apps/Automate that operates on virtual tables in Dataverse.

In *Dynamics 365 Business Central 2023 Wave 2 Release* (**23.1**), we've introduced the new feature of Power Pages on virtual tables to preview.  It allows unlicensed external users to access data stored in Business Central online using Power Pages that operates on virtual tables in Dataverse.  For more info on internal vs. external users, please [download Dynamics 365 licensing guide]( https://go.microsoft.com/fwlink/?LinkId=866544&clcid=0x409) and refer to the *Licensing requirements for external users* + *Multiplexing* sections.

These external users are typically users from the customer/vendor organizations of companies that purchase Business Central licenses.  In some commerce/collaboration scenarios, they may need to participate in processes that involve data stored in Business Central online, such as customer onboarding, vendor bidding, etc. even if they aren’t Business Central users.  This new feature enables those companies to build business-to-business (B2B) portals using Power Pages that serve their customers/vendors, so external users can have anonymous and authenticated access to data stored in Business Central online.  

Anonymous access via Power Pages allows external users to perform API operations on Business Central tables without signing in.  Authenticated access via Power Pages requires external users to sign in to perform API operations on Business Central tables or rows that are accessible to them.  Business Central admins can select only the necessary API operations, tables, and rows to be enabled for anonymous and authenticated access by external users.  Additionally, this feature also enables authenticated access via Power Pages for internal/existing Business Central users, similar to authenticated access via Power Apps/Automate. 

This article highlights the new feature of Power Pages on virtual tables, the prerequisites and step-by-step instructions to preview it, as well as its current limitations/future improvements.
