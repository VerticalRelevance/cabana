# PR FAQ for Vertical Relevance Cabana
A multi-account environment with [Control Tower](https://aws.amazon.com/controltower/) is table stakes for enterprises building on AWS.

Control Tower provides some automation around account creation through its Account Factory, and pulls from AWS and partners' experience with security controls. But it has some
limitations when it comes to maintaing a pool of ready-to-use AWS accounts.
1. Account creation and registration can take up to an hour.
2. Account registration blocks other Control Tower activities while it completes, and can only be done on five accounts at a time.
3. It does not track which business unit owns which account.
4. It does not provide a front-end for app teams to request accounts and track the status of their accounts.
5. It does not assist with other phases of the account leasing lifecycle, like provisioning accounts with organization-specific resources required before an account is deemed ready for lease, or deleting an account or returning it to the pool once a lease has ended.

Cabana adds the following features.
1. A web UI for app teams to request accounts and manage their leases on accounts.
2. An admin UI for cloud platform teams to manage their organization's pool of accounts, and set of leases on them.
3. Integration with Active Directory (AD), allowing teams to grant access to accounts based on AD group membership.
4. Automation providing a declarative interface for cloud platform teams to state and maintain the desired number of available accounts. Cabana automatically handles registration with Control Tower.
5. Automation for account deletion or recycling at the end of a lease term.

Get started with Cabana by deploying the CDK app from this repo.
