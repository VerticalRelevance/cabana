import { App, Stack, CfnOutput, StackProps } from "aws-cdk-lib";
import { aws_iam as iam } from "aws-cdk-lib";
export class RoleStack extends Stack {
  constructor(scope: App, id: string, props: StackProps) {
    super(scope, id, props);
    new CfnOutput(this, "GitHubRoleArn", {
      value: "this:will:be:the:role/arn",
    });
  }
}
