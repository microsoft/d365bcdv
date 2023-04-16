# Virtual Table Workshop

## Introduction
Integrating w/ Dataverse enables Business Central to interact w/ other apps in its ecosystem, see [a review of Business Central & Dataverse integration](https://github.com/microsoft/d365bcdv/blob/main/Review%20of%20Business%20Central%20and%20Dataverse%20integration.pdf).  There are four types of complementary app/system interactions: Data Sync that replicates data between Business Central & Dataverse, virtual tables on Dataverse via Business Central API for (**C**reate/**R**ead/**U**pdate/**D**elete) operations, data change (**CUD**) events, and business events.

![Screenshot](../../images/four-complementary-interactions.png)

This workshop focuses on those interactions enabled by our virtual table plugin that’s installed on Dataverse: virtual tables, data (CUD) events, and business events.

![Screenshot](../../images/virtual-table-workshop-intro.png)

## Workshop environments & user accounts
For this workshop preparation, we’ve done the following:
-	Provisioned a few pairs of Business Central & Dataverse environments
-	Run the assisted setup on Business Central app to connect the paired environments
-	Installed our virtual table plugin from AppSource on all Dataverse environments
-	Generated a few virtual tables (*Customer/Item/Sales Order/Sales Order Lines*) to make them visible on all Dataverse environments
-	Created several user accounts to perform exercises on the paired environments that are accessible to them

To avoid conflicts when performing exercises, each user account has a dedicated company on its Business Central environment.  For example, the user *AdeleV@M365xXXXXXXXX.OnMicrosoft.com* has been assigned the *SUPER* permission set to access her dedicated *Cronus ADELEV* company.  To access the pre-generated/visible virtual tables, each user account has been assigned the *System Customizer* security role on its Dataverse environment.

To reserve your user account, enter your name next to one of the accounts that are still available on our reservation sheet and take note of the same password for all accounts.

Use your reserved user account, preferably in a dedicated browser profile/incognito browser mode, to access the [base app on your Business Central environment](https://businesscentral.dynamics.com/) & [Power Apps maker portal on your Dataverse environment](https://make.powerapps.com/), so you can perform the following exercises.


## Create model-driven Power Apps w/ virtual tables
In this exercise, you’ll learn to create model-driven Power Apps that can view, create, and modify sales orders in the virtual *Sales Order* table.  You’ll also learn to customize them w/ custom views/forms, Editable Grid control, and bound actions.  To perform this exercise, follow these steps:
1.	On Power Apps maker portal, select the **Apps** section, **+ New app** dropdown menu, and **Model-driven** item.

 

2.	Enter your unique app name, such as *Sales Order App <alias>*, and select the **Create** button.
3.	Select the **+ Add page** button, **Dataverse table** radio button, and **Next** button.

 

4.	Select the **Select existing table** radio button, search for the **Sales Order** check box to check, and select the **Add** button.
 
5.	Select the **Publish** button.

