export type AmplifyDependentResourcesAttributes = {
  auth: {
    JoinUp: {
      IdentityPoolId: "string";
      IdentityPoolName: "string";
      UserPoolId: "string";
      UserPoolArn: "string";
      UserPoolName: "string";
      AppClientIDWeb: "string";
      AppClientID: "string";
    };
  };
  api: {
    JoinUp: {
      GraphQLAPIKeyOutput: "string";
      GraphQLAPIIdOutput: "string";
      GraphQLAPIEndpointOutput: "string";
    };
  };
};