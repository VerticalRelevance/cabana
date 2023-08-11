import { App, Stack, CfnOutput, StackProps } from "aws-cdk-lib";
import { aws_iam as iam } from "aws-cdk-lib";
export interface MgmtAccountReadRoleStackProps extends StackProps {
  appAccountNumber: string;
}
export class MgmtAccountReadRoleStack extends Stack {
  constructor(scope: App, id: string, props: MgmtAccountReadRoleStackProps) {
    super(scope, id, props);
    const { appAccountNumber } = props;
    const mgmtAccountReadRole = new iam.Role(this, "MgmtAccountReadRole", {
      assumedBy: new iam.AccountPrincipal(appAccountNumber),
    });
    mgmtAccountReadRole.addManagedPolicy(
      iam.ManagedPolicy.fromAwsManagedPolicyName(
        "AWSOrganizationsReadOnlyAccess"
      )
    );
  }
}
