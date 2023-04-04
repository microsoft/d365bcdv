# Business Events on Business Central (Preview)

## Introducing business events
Integrating w/ Dataverse enables Business Central to interact w/ other apps in its ecosystem.  There are four types of *complementary* interactions: Data Sync, virtual tables, data change (**C**reated/**U**pdated/**D**eleted) events, and business events.

![Screenshot](four-complementary-interactions.png)

To review Business Central & Dataverse integration, see https://github.com/microsoft/d365bcdv/blob/main/Review%20of%20Business%20Central%20and%20Dataverse%20integration.pdf

This doc highlights the new feature of business events on Business Central for notifying/triggering external Dataverse/non-Dataverse systems, the prerequisites and step-by-step instructions to preview it, as well as its current limitations/future improvements.

![Screenshot](introducing-business-events.png)

## Prerequisites and step-by-step instructions
To preview the new feature of business events on Business Central, you can/should:

1.	Create/upgrade a Business Central environment with the new *Dynamics 365 Business Central 2023 Wave 1 Release* (**22.0**).
2.	Fill out our survey: https://forms.office.com/r/GkvB6pritG.  Let us know which sample/custom events you’ll try/build in private preview, which additional events we should add for public preview, in which scenarios do you want use these events, your *Azure Active Directory tenant ID + Business Central environment name* for us to enable for private preview, and your email contact for us to follow up.
3.	Explore our GitHub repository: https://github.com/microsoft/d365bcdv, which is being prepared as a one-stop-shop for Business Central & Dataverse integration, and collect source files for building an extension that introduces our *Dynamics 365 Business Central* catalog of sample events.
4.	Build and install the extension on your Business Central environment that we’ve enabled for private preview.
5.	On Business Central app, use the **Dataverse Connection** assisted setup to link your Business Central environment with a Dataverse environment, on which you want to submit subscriptions and receives notifications of sample events – This will guide you to install the *Business Central Virtual Table (Preview)* plugin that enables event subscriptions/notifications on your Dataverse environment.  Make sure that you install the latest version of the plugin that supports business events (**1.023093.3 or higher**).
6.	On Power Apps maker portal, find and edit the **Business Central Virtual Data Source Configuration** table to run the **Refresh Business Event Catalog** action.
7.	On Power Apps maker portal, create Power Automate flows with the **When an action is performed** trigger that query our catalog, submit subscriptions, and receive notifications of sample events on your Dataverse environment.
8.	(OPTIONAL) Following our code, build and install your own extension that adds custom events to our catalog – Use the same **Business Central Virtual Data Source Configuration** table to refresh our catalog with custom events on your Dataverse environment.
9.	(OPTIONAL) Query our catalog, submit subscriptions, and receive notifications of sample/custom events on your non-Dataverse environment.
10.	Submit feedbacks/questions/issues from your preview to us. 
