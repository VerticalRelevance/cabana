import { App, Stack, CfnOutput, StackProps } from "aws-cdk-lib";
import { aws_iam as iam } from "aws-cdk-lib";
export interface RoleStackProps extends StackProps {
  providerArn: string;
  subject: string;
}
export class RoleStack extends Stack {
  constructor(scope: App, id: string, props: RoleStackProps) {
    super(scope, id, props);
    const { providerArn } = props;
    const gitHubRole = new iam.Role(this, "GitHubRole", {
      assumedBy: new iam.WebIdentityPrincipal(providerArn, {
        StringLike: {
          ["token.actions.githubusercontent.com:sub"]: "",
        },
        StringEquals: {
          ["token.actions.githubusercontent.com:aud"]: "sts.amazon.com",
        },
      }),
    });
    new CfnOutput(this, "GitHubRoleArn", {
      value: `${gitHubRole.roleArn}`,
    });
  }
}
