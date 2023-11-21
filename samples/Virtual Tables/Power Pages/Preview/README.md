# Power Pages on Virtual Tables (Preview)

## Introduction
Data virtualization is part of the fabric/one of the tools to integrate Business Central online with Microsoft Dataverse/Power Platform, see [a review of Business Central & Dataverse integration](https://github.com/microsoft/d365bcdv/blob/main/Review%20of%20Business%20Central%20and%20Dataverse%20integration.pdf).  It allows users with Business Central licenses/entitlements to access data stored in Business Central online by performing (**C**reate/**R**ead/**U**pdate/**D**elete) API operations on Business Central tables that are available as virtual tables in Dataverse.  

![Screenshot](../../../../images/virtual-table-inbound-interaction.png)

These licensed users are considered as internal users to the organizations/companies that purchase those licenses.  They’re in employee-like relationships with the companies and perform business processes on the companies’ behalf.  They can access data stored in Business Central online using Power Apps/Automate that operates on virtual tables in Dataverse.

In *Dynamics 365 Business Central 2023 Wave 2 Release* (**23.1**), we've introduced the new feature of Power Pages on virtual tables to preview.  It allows unlicensed external users to access data stored in Business Central online using Power Pages that operates on virtual tables in Dataverse.  For more info on internal vs. external users, please [download Dynamics 365 licensing guide]( https://go.microsoft.com/fwlink/?LinkId=866544&clcid=0x409) and refer to the *Licensing requirements for external users* + *Multiplexing* sections.

These external users are typically users from the customer/vendor organizations of companies that purchase Business Central licenses.  In some commerce/collaboration scenarios, they may need to participate in processes that involve data stored in Business Central online, such as customer onboarding, vendor bidding, etc. even if they aren’t Business Central users.  This new feature enables those companies to build business-to-business (B2B) portals using Power Pages that serve their customers/vendors, so external users can have anonymous and authenticated access to data stored in Business Central online.  

Anonymous access via Power Pages allows external users to perform API operations on Business Central tables without signing in.  Authenticated access via Power Pages requires external users to sign in to perform API operations on Business Central tables or rows that are accessible to them.  Business Central admins can select only the necessary API operations, tables, and rows to be enabled for anonymous and authenticated access by external users.  Additionally, this feature also enables authenticated access via Power Pages for internal/existing Business Central users, similar to authenticated access via Power Apps/Automate. 

This article highlights the new feature of Power Pages on virtual tables, the prerequisites and step-by-step instructions to preview it, as well as its current limitations/future improvements.

## Prerequisites and step-by-step instructions
To preview the new feature of Power Pages on virtual tables, you can/should:
1. Create/upgrade a Business Central environment with *Dynamics 365 Business Central 2023 Wave 2 Release* (**23.1 or higher**).
1. On Business Central app, use the assisted setup to connect your Business Central environment to a Dataverse environment, in which you want to make your Business Central tables available as virtual tables.  This will guide you to install the *Business Central Virtual Table* plugin from AppSource.  See [Connect Business Central online to Dataverse](#connect) section below.
1. On Business Central app, admins can assign permission sets to the built-in app/service-to-service (S2S) users that will access data stored in Business Central online via Power Pages on behalf of anonymous and authenticated external users.  See [Assign permission sets to anonymous and authenticated external users](#s2s) section below.
1. On Power Apps maker portal, launch the *Business Central Configuration* app to select virtual Business Central tables, such as *Customer*/*Item*/*Sales Order*/*Sales Invoice*/*Vendor* tables, and make them visible.  See [Make virtual Business Central tables visible on Dataverse](#visible) section below.
1. On Power Apps maker portal, open the native Dataverse *Contact* table and add lookup columns to the virtual Business Central *Customer*/*Vendor* tables.  See [Add lookup columns on Dataverse Contact table](#lookup) section below.
1. On the *Business Central Configuration* app, create synthetic relations between the native Dataverse *Contact* table and virtual Business Central tables, such as *Sales Order*/*Sales Invoice*/*Sales Shipment* tables.  See [Create synthetic relations for Dataverse Contact table](#synthetic) section below.
1. On Power Pages maker portal, create pages for anonymous access of external users.  See [Enable anonymous access for external users via Power Pages](#anonymous) section below.
1. On Power Pages maker portal, create pages for authenticated access of external users.  See [Enable authenticated access for external users via Power Pages](#authenticated) section below.
1. (OPTIONAL) On Power Pages maker portal, create pages for authenticated access of internal users.  See [Enable authenticated access for internal users via Power Pages](#internal) section below.
1. (OPTIONAL) On Power Pages maker portal, make virtual Business Central tables editable as Power Pages lists.  See [Enable edit mode on Power Pages lists](#editlist) section below.
1. (OPTIONAL) On Power Pages maker portal, make virtual Business Central tables editable as Power Pages subgrids.  See [Enable edit mode on Power Pages subgrids](#editsubgrid) section below.

## <a name="connect"></a>Connect Business Central online to Dataverse 
To connect your Business Central environment to a Dataverse environment, in which you want to make your Business Central tables available as virtual tables, follow these steps:
1. On [Business Central app](https://businesscentral.dynamics.com/), select the **Settings** icon, **Assisted setup** item, and **Set up a connection to Dataverse** item to open the **Dataverse Connection Setup** dialog.  
1. On that dialog, flip the **Enable virtual tables and events** switch on, and select the **Next** button.

   ![Screenshot](../../../../images/dataverse-connection-setup.png)

1. Review the relevant terms and conditions, flip the **I accept** switch on, and select the **Next** button again.
1. Specify your Dataverse environment URL, sign in as an administrator user, and select the **Next** button again.
1. Install the *Business Central Virtual Table* plugin from AppSource, and finally select the **Finish** button.

   ![Screenshot](../../../../images/virtual-table-plugin.png)

## <a name="s2s"></a>Assign permission sets to anonymous and authenticated external users
Since external users have no Business Central license/entitlements, we’ve created built-in app/S2S users to access data stored in Business Central online on their behalf.  Permission sets can be assigned to these app/S2S users to control data access by external users.  To do so, follow these steps:
1. On [Business Central app](https://businesscentral.dynamics.com/), search for and open the *Microsoft Entra Applications* page.  There are three built-in app/S2S users: *Dynamics 365 Business Central for Virtual Tables* for accessing data stored in Business Central online via Power Apps/Automate/Pages by personifying authenticated internal users, *Power Pages Anonymous External Users* for accessing data stored in Business Central online via Power Pages on behalf of anonymous external users, and *Power Pages Authenticated External Users* for accessing data stored in Business Central online via Power Pages on behalf of authenticated external users.

   ![Screenshot](../../../../images/power-pages-microsoft-entra-applications.png)

1. Open the *Power Pages Anonymous External Users* card, select *Enabled* for the **State** property, and assign permission sets with the appropriate scope for anonymous external users, for example read-only for certain tables and LOGIN permission set as a minimum.

   ![Screenshot](../../../../images/power-pages-microsoft-entra-application-for-anonymous-access.png)

1. Open the *Power Pages Authenticated External Users* card, select *Enabled* for the **State** property, and assign permission sets with the appropriate scope for authenticated external users, for example read-write for certain tables and LOGIN permission set as a minimum.

   ![Screenshot](../../../../images/power-pages-microsoft-entra-application-for-authenticated-access.png)

## <a name="visible"></a>Make virtual Business Central tables visible on Dataverse
To make virtual Business Central tables visible on Dataverse, follow these steps:
1. On [Power Apps maker portal](https://make.powerapps.com/), select the **Apps** section, and launch the *Business Central Configuration* app.

   ![Screenshot](../../../../images/power-apps-business-central-configuration.png)

1. On the *Business Central Configuration* app, select the **Available Tables** section, virtual Business Central tables to be made visible, such as *Customer*/*Item*/*Sales Order*/*Sales Invoice*/*Vendor* tables, **Edit** button, **Visible** check box, and **Save** button.

   ![Screenshot](../../../../images/power-apps-business-central-configuration-available-tables.png)
