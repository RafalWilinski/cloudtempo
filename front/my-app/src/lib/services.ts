export const services = [
  {
    ServiceShortName: "a4b",
    ServiceName: "Alexa for Business",
    Actions:
      '["ApproveSkill","AssociateContactWithAddressBook","AssociateDeviceWithNetworkProfile","AssociateDeviceWithRoom","AssociateSkillGroupWithRoom","AssociateSkillWithSkillGroup","AssociateSkillWithUsers","CompleteRegistration","CreateAddressBook","CreateBusinessReportSchedule","CreateConferenceProvider","CreateContact","CreateGatewayGroup","CreateNetworkProfile","CreateProfile","CreateRoom","CreateSkillGroup","CreateUser","DeleteAddressBook","DeleteBusinessReportSchedule","DeleteConferenceProvider","DeleteContact","DeleteDevice","DeleteDeviceUsageData","DeleteGatewayGroup","DeleteNetworkProfile","DeleteProfile","DeleteRoom","DeleteRoomSkillParameter","DeleteSkillAuthorization","DeleteSkillGroup","DeleteUser","DisassociateContactFromAddressBook","DisassociateDeviceFromRoom","DisassociateSkillFromSkillGroup","DisassociateSkillFromUsers","DisassociateSkillGroupFromRoom","ForgetSmartHomeAppliances","GetAddressBook","GetConferencePreference","GetConferenceProvider","GetContact","GetDevice","GetGateway","GetGatewayGroup","GetInvitationConfiguration","GetNetworkProfile","GetProfile","GetRoom","GetRoomSkillParameter","GetSkillGroup","ListBusinessReportSchedules","ListConferenceProviders","ListDeviceEvents","ListGatewayGroups","ListGateways","ListSkills","ListSkillsStoreCategories","ListSkillsStoreSkillsByCategory","ListSmartHomeAppliances","ListTags","PutConferencePreference","PutDeviceSetupEvents","PutInvitationConfiguration","PutRoomSkillParameter","PutSkillAuthorization","RegisterAVSDevice","RegisterDevice","RejectSkill","ResolveRoom","RevokeInvitation","SearchAddressBooks","SearchContacts","SearchDevices","SearchNetworkProfiles","SearchProfiles","SearchRooms","SearchSkillGroups","SearchUsers","SendAnnouncement","SendInvitation","StartDeviceSync","StartSmartHomeApplianceDiscovery","TagResource","UntagResource","UpdateAddressBook","UpdateBusinessReportSchedule","UpdateConferenceProvider","UpdateContact","UpdateDevice","UpdateGateway","UpdateGatewayGroup","UpdateNetworkProfile","UpdateProfile","UpdateRoom","UpdateSkillGroup"]',
    ARNFormat:
      "arn:aws:a4b:<region>:<account-id>:<resource-type>/<resource_id>",
    ARNRegex: "^arn:aws:a4b:.+:.+:.+",
    conditionKeys:
      '["a4b:amazonId","a4b:filters_deviceType","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_alexaforbusiness.html",
    ConsoleLink: "https://console.aws.amazon.com/a4b/home",
  },
  {
    ServiceShortName: "execute-api",
    ServiceName: "Amazon API Gateway",
    Actions: '["InvalidateCache","Invoke","ManageConnections"]',
    ARNFormat:
      "arn:aws:execute-api:<region>:<account_id>:<api_id>/<stage>/<method>/<api_specific_resource_path>",
    ARNRegex: "^arn:aws:execute-api:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonapigateway.html",
    ConsoleLink: "https://console.aws.amazon.com/apigateway/home",
  },
  {
    ServiceShortName: "apigateway",
    ServiceName: "Amazon API Gateway Management",
    Actions:
      '["AddCertificateToDomain","DELETE","GET","PATCH","POST","PUT","RemoveCertificateFromDomain","SetWebACL","UpdateRestApiPolicy"]',
    ARNFormat: "arn:aws:apigateway:${Region}::${ApiGatewayResourcePath}",
    ARNRegex: "^arn:aws:apigateway:.+",
    conditionKeys:
      '["apigateway:Request/AccessLoggingDestination","apigateway:Request/AccessLoggingFormat","apigateway:Request/ApiKeyRequired","apigateway:Request/ApiName","apigateway:Request/AuthorizerType","apigateway:Request/AuthorizerUri","apigateway:Request/DisableExecuteApiEndpoint","apigateway:Request/EndpointType","apigateway:Request/MtlsTrustStoreUri","apigateway:Request/MtlsTrustStoreVersion","apigateway:Request/RouteAuthorizationType","apigateway:Request/SecurityPolicy","apigateway:Request/StageName","apigateway:Resource/AccessLoggingDestination","apigateway:Resource/AccessLoggingFormat","apigateway:Resource/ApiKeyRequired","apigateway:Resource/ApiName","apigateway:Resource/AuthorizerType","apigateway:Resource/AuthorizerUri","apigateway:Resource/DisableExecuteApiEndpoint","apigateway:Resource/EndpointType","apigateway:Resource/MtlsTrustStoreUri","apigateway:Resource/MtlsTrustStoreVersion","apigateway:Resource/RouteAuthorizationType","apigateway:Resource/SecurityPolicy","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonapigatewaymanagement.html",
    ConsoleLink: "https://console.aws.amazon.com/apigateway/home",
  },
  {
    ServiceShortName: "apigateway",
    ServiceName: "Amazon API Gateway Management V2",
    Actions: '["DELETE","GET","PATCH","POST","PUT"]',
    ARNFormat: "arn:aws:apigateway:${Region}::${ApiGatewayResourcePath}",
    ARNRegex: "^arn:aws:apigateway:.+",
    conditionKeys:
      '["apigateway:Request/AccessLoggingDestination","apigateway:Request/AccessLoggingFormat","apigateway:Request/ApiKeyRequired","apigateway:Request/ApiName","apigateway:Request/AuthorizerType","apigateway:Request/AuthorizerUri","apigateway:Request/DisableExecuteApiEndpoint","apigateway:Request/EndpointType","apigateway:Request/MtlsTrustStoreUri","apigateway:Request/MtlsTrustStoreVersion","apigateway:Request/RouteAuthorizationType","apigateway:Request/SecurityPolicy","apigateway:Request/StageName","apigateway:Resource/AccessLoggingDestination","apigateway:Resource/AccessLoggingFormat","apigateway:Resource/ApiKeyRequired","apigateway:Resource/ApiName","apigateway:Resource/AuthorizerType","apigateway:Resource/AuthorizerUri","apigateway:Resource/DisableExecuteApiEndpoint","apigateway:Resource/EndpointType","apigateway:Resource/MtlsTrustStoreUri","apigateway:Resource/MtlsTrustStoreVersion","apigateway:Resource/RouteAuthorizationType","apigateway:Resource/SecurityPolicy","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonapigatewaymanagementv2.html",
    ConsoleLink: "https://console.aws.amazon.com/apigateway/home",
  },
  {
    ServiceShortName: "appflow",
    ServiceName: "Amazon AppFlow",
    Actions:
      '["CreateConnectorProfile","CreateFlow","DeleteConnectorProfile","DeleteFlow","DescribeConnector","DescribeConnectorEntity","DescribeConnectorFields","DescribeConnectorProfiles","DescribeConnectors","DescribeFlow","DescribeFlowExecution","DescribeFlowExecutionRecords","DescribeFlows","ListConnectorEntities","ListConnectorFields","ListConnectors","ListFlows","ListTagsForResource","RegisterConnector","RunFlow","StartFlow","StopFlow","TagResource","UnRegisterConnector","UntagResource","UpdateConnectorProfile","UpdateFlow","UseConnectorProfile"]',
    ARNFormat:
      "arn:aws:appflow:{Region}:{AccountId}:{ResourceType}/{ResourceName}",
    ARNRegex: "^arn:aws:appflow:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappflow.html",
    ConsoleLink: "https://console.aws.amazon.com/appflow/home",
  },
  {
    ServiceShortName: "app-integrations",
    ServiceName: "Amazon AppIntegrations",
    Actions:
      '["CreateDataIntegration","CreateDataIntegrationAssociation","CreateEventIntegration","CreateEventIntegrationAssociation","DeleteDataIntegration","DeleteDataIntegrationAssociation","DeleteEventIntegration","DeleteEventIntegrationAssociation","GetDataIntegration","GetEventIntegration","ListDataIntegrationAssociations","ListDataIntegrations","ListEventIntegrationAssociations","ListEventIntegrations","ListTagsForResource","TagResource","UntagResource","UpdateDataIntegration","UpdateEventIntegration"]',
    ARNFormat:
      "arn:aws:app-integrations:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:app-integrations:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappintegrations.html",
  },
  {
    ServiceShortName: "appstream",
    ServiceName: "Amazon AppStream 2.0",
    Actions:
      '["AssociateApplicationFleet","AssociateApplicationToEntitlement","AssociateFleet","BatchAssociateUserStack","BatchDisassociateUserStack","CopyImage","CreateAppBlock","CreateApplication","CreateDirectoryConfig","CreateEntitlement","CreateFleet","CreateImageBuilder","CreateImageBuilderStreamingURL","CreateStack","CreateStreamingURL","CreateUpdatedImage","CreateUsageReportSubscription","CreateUser","DeleteAppBlock","DeleteApplication","DeleteDirectoryConfig","DeleteEntitlement","DeleteFleet","DeleteImage","DeleteImageBuilder","DeleteImagePermissions","DeleteStack","DeleteUsageReportSubscription","DeleteUser","DescribeAppBlocks","DescribeApplicationFleetAssociations","DescribeApplications","DescribeDirectoryConfigs","DescribeEntitlements","DescribeFleets","DescribeImageBuilders","DescribeImagePermissions","DescribeImages","DescribeSessions","DescribeStacks","DescribeUsageReportSubscriptions","DescribeUserStackAssociations","DescribeUsers","DisableUser","DisassociateApplicationFleet","DisassociateApplicationFromEntitlement","DisassociateFleet","EnableUser","ExpireSession","ListAssociatedFleets","ListAssociatedStacks","ListEntitledApplications","ListTagsForResource","StartFleet","StartImageBuilder","StopFleet","StopImageBuilder","Stream","TagResource","UntagResource","UpdateApplication","UpdateDirectoryConfig","UpdateEntitlement","UpdateFleet","UpdateImagePermissions","UpdateStack"]',
    ARNFormat:
      "arn:${Partition}:appstream:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:appstream:.+",
    conditionKeys:
      '["appstream:userId","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonappstream2.0.html",
  },
  {
    ServiceShortName: "athena",
    ServiceName: "Amazon Athena",
    Actions:
      '["BatchGetNamedQuery","BatchGetQueryExecution","CreateDataCatalog","CreateNamedQuery","CreatePreparedStatement","CreateWorkGroup","DeleteDataCatalog","DeleteNamedQuery","DeletePreparedStatement","DeleteWorkGroup","GetDataCatalog","GetDatabase","GetNamedQuery","GetPreparedStatement","GetQueryExecution","GetQueryResults","GetQueryResultsStream","GetTableMetadata","GetWorkGroup","ListDataCatalogs","ListDatabases","ListEngineVersions","ListNamedQueries","ListPreparedStatements","ListQueryExecutions","ListTableMetadata","ListTagsForResource","ListWorkGroups","StartQueryExecution","StopQueryExecution","TagResource","UntagResource","UpdateDataCatalog","UpdateNamedQuery","UpdatePreparedStatement","UpdateWorkGroup"]',
    ARNFormat:
      "arn:${Partition}:athena:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:athena:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonathena.html",
  },
  {
    ServiceShortName: "braket",
    ServiceName: "Amazon Braket",
    Actions:
      '["CancelJob","CancelQuantumTask","CreateJob","CreateQuantumTask","GetDevice","GetJob","GetQuantumTask","ListTagsForResource","SearchDevices","SearchJobs","SearchQuantumTasks","TagResource","UntagResource"]',
    ARNFormat: "arn:${Partition}:braket:{$Region}:{$AccountI}>:.+",
    ARNRegex: "^arn:${Partition}:braket::.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonbraket.html",
  },
  {
    ServiceShortName: "chime",
    ServiceName: "Amazon Chime",
    Actions:
      '["AcceptDelegate","ActivateUsers","AddDomain","AddOrUpdateGroups","AssociateChannelFlow","AssociatePhoneNumberWithUser","AssociatePhoneNumbersWithVoiceConnector","AssociatePhoneNumbersWithVoiceConnectorGroup","AssociateSigninDelegateGroupsWithAccount","AuthorizeDirectory","BatchCreateAttendee","BatchCreateChannelMembership","BatchCreateRoomMembership","BatchDeletePhoneNumber","BatchSuspendUser","BatchUnsuspendUser","BatchUpdatePhoneNumber","BatchUpdateUser","ChannelFlowCallback","Connect","ConnectDirectory","CreateAccount","CreateApiKey","CreateAppInstance","CreateAppInstanceAdmin","CreateAppInstanceUser","CreateAttendee","CreateBot","CreateBotMembership","CreateCDRBucket","CreateChannel","CreateChannelBan","CreateChannelFlow","CreateChannelMembership","CreateChannelModerator","CreateMediaCapturePipeline","CreateMeeting","CreateMeetingDialOut","CreateMeetingWithAttendees","CreatePhoneNumberOrder","CreateProxySession","CreateRoom","CreateRoomMembership","CreateSipMediaApplication","CreateSipMediaApplicationCall","CreateSipRule","CreateUser","CreateVoiceConnector","CreateVoiceConnectorGroup","DeleteAccount","DeleteAccountOpenIdConfig","DeleteApiKey","DeleteAppInstance","DeleteAppInstanceAdmin","DeleteAppInstanceStreamingConfigurations","DeleteAppInstanceUser","DeleteAttendee","DeleteCDRBucket","DeleteChannel","DeleteChannelBan","DeleteChannelFlow","DeleteChannelMembership","DeleteChannelMessage","DeleteChannelModerator","DeleteDelegate","DeleteDomain","DeleteEventsConfiguration","DeleteGroups","DeleteMediaCapturePipeline","DeleteMeeting","DeletePhoneNumber","DeleteProxySession","DeleteRoom","DeleteRoomMembership","DeleteSipMediaApplication","DeleteSipRule","DeleteVoiceConnector","DeleteVoiceConnectorEmergencyCallingConfiguration","DeleteVoiceConnectorGroup","DeleteVoiceConnectorOrigination","DeleteVoiceConnectorProxy","DeleteVoiceConnectorStreamingConfiguration","DeleteVoiceConnectorTermination","DeleteVoiceConnectorTerminationCredentials","DeregisterAppInstanceUserEndpoint","DescribeAppInstance","DescribeAppInstanceAdmin","DescribeAppInstanceUser","DescribeAppInstanceUserEndpoint","DescribeChannel","DescribeChannelBan","DescribeChannelFlow","DescribeChannelMembership","DescribeChannelMembershipForAppInstanceUser","DescribeChannelModeratedByAppInstanceUser","DescribeChannelModerator","DisassociateChannelFlow","DisassociatePhoneNumberFromUser","DisassociatePhoneNumbersFromVoiceConnector","DisassociatePhoneNumbersFromVoiceConnectorGroup","DisassociateSigninDelegateGroupsFromAccount","DisconnectDirectory","GetAccount","GetAccountResource","GetAccountSettings","GetAccountWithOpenIdConfig","GetAppInstanceRetentionSettings","GetAppInstanceStreamingConfigurations","GetAttendee","GetBot","GetCDRBucket","GetChannelMembershipPreferences","GetChannelMessage","GetChannelMessageStatus","GetDomain","GetEventsConfiguration","GetGlobalSettings","GetMediaCapturePipeline","GetMeeting","GetMeetingDetail","GetMessagingSessionEndpoint","GetPhoneNumber","GetPhoneNumberOrder","GetPhoneNumberSettings","GetProxySession","GetRetentionSettings","GetRoom","GetSipMediaApplication","GetSipMediaApplicationLoggingConfiguration","GetSipRule","GetTelephonyLimits","GetUser","GetUserActivityReportData","GetUserByEmail","GetUserSettings","GetVoiceConnector","GetVoiceConnectorEmergencyCallingConfiguration","GetVoiceConnectorGroup","GetVoiceConnectorLoggingConfiguration","GetVoiceConnectorOrigination","GetVoiceConnectorProxy","GetVoiceConnectorStreamingConfiguration","GetVoiceConnectorTermination","GetVoiceConnectorTerminationHealth","InviteDelegate","InviteUsers","InviteUsersFromProvider","ListAccountUsageReportData","ListAccounts","ListApiKeys","ListAppInstanceAdmins","ListAppInstanceUserEndpoints","ListAppInstanceUsers","ListAppInstances","ListAttendeeTags","ListAttendees","ListBots","ListCDRBucket","ListCallingRegions","ListChannelBans","ListChannelFlows","ListChannelMemberships","ListChannelMembershipsForAppInstanceUser","ListChannelMessages","ListChannelModerators","ListChannels","ListChannelsAssociatedWithChannelFlow","ListChannelsModeratedByAppInstanceUser","ListDelegates","ListDirectories","ListDomains","ListGroups","ListMediaCapturePipelines","ListMeetingEvents","ListMeetingTags","ListMeetings","ListMeetingsReportData","ListPhoneNumberOrders","ListPhoneNumbers","ListProxySessions","ListRoomMemberships","ListRooms","ListSipMediaApplications","ListSipRules","ListSupportedPhoneNumberCountries","ListTagsForResource","ListUsers","ListVoiceConnectorGroups","ListVoiceConnectorTerminationCredentials","ListVoiceConnectors","LogoutUser","PutAppInstanceRetentionSettings","PutAppInstanceStreamingConfigurations","PutChannelMembershipPreferences","PutEventsConfiguration","PutRetentionSettings","PutSipMediaApplicationLoggingConfiguration","PutVoiceConnectorEmergencyCallingConfiguration","PutVoiceConnectorLoggingConfiguration","PutVoiceConnectorOrigination","PutVoiceConnectorProxy","PutVoiceConnectorStreamingConfiguration","PutVoiceConnectorTermination","PutVoiceConnectorTerminationCredentials","RedactChannelMessage","RedactConversationMessage","RedactRoomMessage","RegenerateSecurityToken","RegisterAppInstanceUserEndpoint","RenameAccount","RenewDelegate","ResetAccountResource","ResetPersonalPIN","RestorePhoneNumber","RetrieveDataExports","SearchAvailablePhoneNumbers","SendChannelMessage","StartDataExport","StartMeetingTranscription","StopMeetingTranscription","SubmitSupportRequest","SuspendUsers","TagAttendee","TagMeeting","TagResource","UnauthorizeDirectory","UntagAttendee","UntagMeeting","UntagResource","UpdateAccount","UpdateAccountOpenIdConfig","UpdateAccountResource","UpdateAccountSettings","UpdateAppInstance","UpdateAppInstanceUser","UpdateAppInstanceUserEndpoint","UpdateBot","UpdateCDRSettings","UpdateChannel","UpdateChannelFlow","UpdateChannelMessage","UpdateChannelReadMarker","UpdateGlobalSettings","UpdatePhoneNumber","UpdatePhoneNumberSettings","UpdateProxySession","UpdateRoom","UpdateRoomMembership","UpdateSipMediaApplication","UpdateSipMediaApplicationCall","UpdateSipRule","UpdateSupportedLicenses","UpdateUser","UpdateUserLicenses","UpdateUserSettings","UpdateVoiceConnector","UpdateVoiceConnectorGroup","ValidateAccountResource"]',
    ARNFormat: "arn:aws:chime::${AccountId}:${ResourceType}/${ResourceID}",
    ARNRegex: "^arn:aws:chime:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonchime.html",
    ConsoleLink: "https://console.aws.amazon.com/chime/home",
  },
  {
    ServiceShortName: "clouddirectory",
    ServiceName: "Amazon Cloud Directory",
    Actions:
      '["AddFacetToObject","ApplySchema","AttachObject","AttachPolicy","AttachToIndex","AttachTypedLink","BatchRead","BatchWrite","CreateDirectory","CreateFacet","CreateIndex","CreateObject","CreateSchema","CreateTypedLinkFacet","DeleteDirectory","DeleteFacet","DeleteObject","DeleteSchema","DeleteTypedLinkFacet","DetachFromIndex","DetachObject","DetachPolicy","DetachTypedLink","DisableDirectory","EnableDirectory","GetAppliedSchemaVersion","GetDirectory","GetFacet","GetLinkAttributes","GetObjectAttributes","GetObjectInformation","GetSchemaAsJson","GetTypedLinkFacetInformation","ListAppliedSchemaArns","ListAttachedIndices","ListDevelopmentSchemaArns","ListDirectories","ListFacetAttributes","ListFacetNames","ListIncomingTypedLinks","ListIndex","ListManagedSchemaArns","ListObjectAttributes","ListObjectChildren","ListObjectParentPaths","ListObjectParents","ListObjectPolicies","ListOutgoingTypedLinks","ListPolicyAttachments","ListPublishedSchemaArns","ListTagsForResource","ListTypedLinkFacetAttributes","ListTypedLinkFacetNames","LookupPolicy","PublishSchema","PutSchemaFromJson","RemoveFacetFromObject","TagResource","UntagResource","UpdateFacet","UpdateLinkAttributes","UpdateObjectAttributes","UpdateSchema","UpdateTypedLinkFacet","UpgradeAppliedSchema","UpgradePublishedSchema"]',
    ARNFormat: "arn:aws:clouddirectory::${Region}:${Account}:${RelativeId}",
    ARNRegex:
      "^arn:${Partition}:clouddirectory:.+:[0-9]+:(directory|schema)/.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonclouddirectory.html",
  },
  {
    ServiceShortName: "cloudfront",
    ServiceName: "Amazon CloudFront",
    Actions:
      '["AssociateAlias","CreateCachePolicy","CreateCloudFrontOriginAccessIdentity","CreateDistribution","CreateFieldLevelEncryptionConfig","CreateFieldLevelEncryptionProfile","CreateFunction","CreateInvalidation","CreateKeyGroup","CreateMonitoringSubscription","CreateOriginRequestPolicy","CreatePublicKey","CreateRealtimeLogConfig","CreateResponseHeadersPolicy","CreateStreamingDistribution","CreateStreamingDistributionWithTags","DeleteCachePolicy","DeleteCloudFrontOriginAccessIdentity","DeleteDistribution","DeleteFieldLevelEncryptionConfig","DeleteFieldLevelEncryptionProfile","DeleteFunction","DeleteKeyGroup","DeleteMonitoringSubscription","DeleteOriginRequestPolicy","DeletePublicKey","DeleteRealtimeLogConfig","DeleteResponseHeadersPolicy","DeleteStreamingDistribution","DescribeFunction","GetCachePolicy","GetCachePolicyConfig","GetCloudFrontOriginAccessIdentity","GetCloudFrontOriginAccessIdentityConfig","GetDistribution","GetDistributionConfig","GetFieldLevelEncryption","GetFieldLevelEncryptionConfig","GetFieldLevelEncryptionProfile","GetFieldLevelEncryptionProfileConfig","GetFunction","GetInvalidation","GetKeyGroup","GetKeyGroupConfig","GetMonitoringSubscription","GetOriginRequestPolicy","GetOriginRequestPolicyConfig","GetPublicKey","GetPublicKeyConfig","GetRealtimeLogConfig","GetResponseHeadersPolicy","GetResponseHeadersPolicyConfig","GetStreamingDistribution","GetStreamingDistributionConfig","ListCachePolicies","ListCloudFrontOriginAccessIdentities","ListConflictingAliases","ListDistributions","ListDistributionsByCachePolicyId","ListDistributionsByKeyGroup","ListDistributionsByLambdaFunction","ListDistributionsByOriginRequestPolicyId","ListDistributionsByRealtimeLogConfig","ListDistributionsByResponseHeadersPolicyId","ListDistributionsByWebACLId","ListFieldLevelEncryptionConfigs","ListFieldLevelEncryptionProfiles","ListFunctions","ListInvalidations","ListKeyGroups","ListOriginRequestPolicies","ListPublicKeys","ListRealtimeLogConfigs","ListResponseHeadersPolicies","ListStreamingDistributions","ListTagsForResource","PublishFunction","TagResource","TestFunction","UntagResource","UpdateCachePolicy","UpdateCloudFrontOriginAccessIdentity","UpdateDistribution","UpdateFieldLevelEncryptionConfig","UpdateFieldLevelEncryptionProfile","UpdateFunction","UpdateKeyGroup","UpdateOriginRequestPolicy","UpdatePublicKey","UpdateRealtimeLogConfig","UpdateResponseHeadersPolicy","UpdateStreamingDistribution"]',
    ARNFormat:
      "arn:${Partition}:cloudfront::${AccountId}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:cloudfront::[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudfront.html",
  },
  {
    ServiceShortName: "cloudsearch",
    ServiceName: "Amazon CloudSearch",
    Actions:
      '["AddTags","BuildSuggesters","CreateDomain","DefineAnalysisScheme","DefineExpression","DefineIndexField","DefineSuggester","DeleteAnalysisScheme","DeleteDomain","DeleteExpression","DeleteIndexField","DeleteSuggester","DescribeAnalysisSchemes","DescribeAvailabilityOptions","DescribeDomainEndpointOptions","DescribeDomains","DescribeExpressions","DescribeIndexFields","DescribeScalingParameters","DescribeServiceAccessPolicies","DescribeSuggesters","IndexDocuments","ListDomainNames","ListTags","RemoveTags","UpdateAvailabilityOptions","UpdateDomainEndpointOptions","UpdateScalingParameters","UpdateServiceAccessPolicies","document","search","suggest"]',
    ARNFormat:
      "arn:aws:cloudsearch:<region>:<account>:<resourceType>/<resourceName>",
    ARNRegex: "^arn:aws:cloudsearch:.+:.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudsearch.html",
  },
  {
    ServiceShortName: "cloudwatch",
    ServiceName: "Amazon CloudWatch",
    Actions:
      '["DeleteAlarms","DeleteAnomalyDetector","DeleteDashboards","DeleteInsightRules","DeleteMetricStream","DescribeAlarmHistory","DescribeAlarms","DescribeAlarmsForMetric","DescribeAnomalyDetectors","DescribeInsightRules","DisableAlarmActions","DisableInsightRules","EnableAlarmActions","EnableInsightRules","GetDashboard","GetInsightRuleReport","GetMetricData","GetMetricStatistics","GetMetricStream","GetMetricWidgetImage","ListDashboards","ListMetricStreams","ListMetrics","ListTagsForResource","PutAnomalyDetector","PutCompositeAlarm","PutDashboard","PutInsightRule","PutMetricAlarm","PutMetricData","PutMetricStream","SetAlarmState","StartMetricStreams","StopMetricStreams","TagResource","UntagResource"]',
    ARNFormat:
      "arn:${Partition}:cloudwatch:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:cloudwatch:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","cloudwatch:AlarmActions","cloudwatch:namespace","cloudwatch:requestInsightRuleLogGroups"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatch.html",
  },
  {
    ServiceShortName: "evidently",
    ServiceName: "Amazon CloudWatch Evidently",
    Actions:
      '["BatchEvaluateFeature","CreateExperiment","CreateFeature","CreateLaunch","CreateProject","DeleteExperiment","DeleteFeature","DeleteLaunch","DeleteProject","EvaluateFeature","GetExperiment","GetExperimentResults","GetFeature","GetLaunch","GetProject","ListExperiments","ListFeatures","ListLaunches","ListProjects","ListTagsForResource","PutProjectEvents","StartExperiment","StartLaunch","StopExperiment","StopLaunch","TagResource","UntagResource","UpdateExperiment","UpdateFeature","UpdateLaunch","UpdateProject","UpdateProjectDataDelivery"]',
    ARNFormat:
      "arn:${Partition}:evidently:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:evidently:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchevidently.html",
  },
  {
    ServiceShortName: "logs",
    ServiceName: "Amazon CloudWatch Logs",
    Actions:
      '["AssociateKmsKey","CancelExportTask","CreateExportTask","CreateLogDelivery","CreateLogGroup","CreateLogStream","DeleteDestination","DeleteLogDelivery","DeleteLogGroup","DeleteLogStream","DeleteMetricFilter","DeleteQueryDefinition","DeleteResourcePolicy","DeleteRetentionPolicy","DeleteSubscriptionFilter","DescribeDestinations","DescribeExportTasks","DescribeLogGroups","DescribeLogStreams","DescribeMetricFilters","DescribeQueries","DescribeQueryDefinitions","DescribeResourcePolicies","DescribeSubscriptionFilters","DisassociateKmsKey","FilterLogEvents","GetLogDelivery","GetLogEvents","GetLogGroupFields","GetLogRecord","GetQueryResults","ListLogDeliveries","ListTagsLogGroup","PutDestination","PutDestinationPolicy","PutLogEvents","PutMetricFilter","PutQueryDefinition","PutResourcePolicy","PutRetentionPolicy","PutSubscriptionFilter","StartQuery","StopQuery","TagLogGroup","TestMetricFilter","UntagLogGroup","UpdateLogDelivery"]',
    ARNFormat: "arn:aws:logs:.+:.+:.+",
    ARNRegex: "^arn:aws:logs:.+",
    conditionKeys: '"aws:ResourceTag/${TagKey}"',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchlogs.html",
    ConsoleLink:
      "https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logsV2:log-groups",
  },
  {
    ServiceShortName: "synthetics",
    ServiceName: "Amazon CloudWatch Synthetics",
    Actions:
      '["CreateCanary","DeleteCanary","DescribeCanaries","DescribeCanariesLastRun","DescribeRuntimeVersions","GetCanary","GetCanaryRuns","ListTagsForResource","StartCanary","StopCanary","TagResource","UntagResource","UpdateCanary"]',
    ARNFormat:
      "arn:aws:synthetics:${Region}:${Account}:${ResourceType}:${ResourceName}",
    ARNRegex: "^arn:aws:synthetics:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","synthetics:Names"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchsynthetics.html",
    ConsoleLink:
      "https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#synthetics:canary",
  },
  {
    ServiceShortName: "codeguru",
    ServiceName: "Amazon CodeGuru",
    Actions: '"GetCodeGuruFreeTrialSummary"',
    ARNFormat:
      "arn:aws:codeguru:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:codeguru:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguru.html",
    ConsoleLink: "https://console.aws.amazon.com/codeguru/home",
  },
  {
    ServiceShortName: "codeguru-profiler",
    ServiceName: "Amazon CodeGuru Profiler",
    Actions:
      '["AddNotificationChannels","BatchGetFrameMetricData","ConfigureAgent","CreateProfilingGroup","DeleteProfilingGroup","DescribeProfilingGroup","GetFindingsReportAccountSummary","GetNotificationConfiguration","GetPolicy","GetProfile","GetRecommendations","ListFindingsReports","ListProfileTimes","ListProfilingGroups","ListTagsForResource","PostAgentProfile","PutPermission","RemoveNotificationChannel","RemovePermission","SubmitFeedback","TagResource","UntagResource","UpdateProfilingGroup"]',
    ARNFormat:
      "arn:aws:codeguru-profiler:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:codeguru-profiler:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodeguruprofiler.html",
    ConsoleLink: "https://console.aws.amazon.com/codeguru/profiler/home",
  },
  {
    ServiceShortName: "codeguru-reviewer",
    ServiceName: "Amazon CodeGuru Reviewer",
    Actions:
      '["AssociateRepository","CreateCodeReview","CreateConnectionToken","DescribeCodeReview","DescribeRecommendationFeedback","DescribeRepositoryAssociation","DisassociateRepository","GetMetricsData","ListCodeReviews","ListRecommendationFeedback","ListRecommendations","ListRepositoryAssociations","ListTagsForResource","ListThirdPartyRepositories","PutRecommendationFeedback","TagResource","UnTagResource"]',
    ARNFormat:
      "arn:aws:codeguru-reviewer:${Region}:${Account}:${ResourceType}:${ResourceName}",
    ARNRegex: "^arn:aws:codeguru-reviewer:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncodegurureviewer.html",
  },
  {
    ServiceShortName: "cognito-identity",
    ServiceName: "Amazon Cognito Identity",
    Actions:
      '["CreateIdentityPool","DeleteIdentities","DeleteIdentityPool","DescribeIdentity","DescribeIdentityPool","GetCredentialsForIdentity","GetId","GetIdentityPoolRoles","GetOpenIdToken","GetOpenIdTokenForDeveloperIdentity","GetPrincipalTagAttributeMap","ListIdentities","ListIdentityPools","ListTagsForResource","LookupDeveloperIdentity","MergeDeveloperIdentities","SetIdentityPoolRoles","SetPrincipalTagAttributeMap","TagResource","UnlinkDeveloperIdentity","UnlinkIdentity","UntagResource","UpdateIdentityPool"]',
    ARNFormat:
      "arn:aws:cognito-identity:<region>:<account>:<resourceType>/<resourcePath>",
    ARNRegex: "^arn:aws:cognito-identity:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitoidentity.html",
  },
  {
    ServiceShortName: "cognito-sync",
    ServiceName: "Amazon Cognito Sync",
    Actions:
      '["BulkPublish","DeleteDataset","DescribeDataset","DescribeIdentityPoolUsage","DescribeIdentityUsage","GetBulkPublishDetails","GetCognitoEvents","GetIdentityPoolConfiguration","ListDatasets","ListIdentityPoolUsage","ListRecords","QueryRecords","RegisterDevice","SetCognitoEvents","SetDatasetConfiguration","SetIdentityPoolConfiguration","SubscribeToDataset","UnsubscribeFromDataset","UpdateRecords"]',
    ARNFormat:
      "arn:aws:cognito-sync:${Region}:${Account}:${ResourceType}/${ResourcePath}:",
    ARNRegex: "^arn:aws:cognito-sync:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitosync.html",
  },
  {
    ServiceShortName: "cognito-idp",
    ServiceName: "Amazon Cognito User Pools",
    Actions:
      '["AddCustomAttributes","AdminAddUserToGroup","AdminConfirmSignUp","AdminCreateUser","AdminDeleteUser","AdminDeleteUserAttributes","AdminDisableProviderForUser","AdminDisableUser","AdminEnableUser","AdminForgetDevice","AdminGetDevice","AdminGetUser","AdminInitiateAuth","AdminLinkProviderForUser","AdminListDevices","AdminListGroupsForUser","AdminListUserAuthEvents","AdminRemoveUserFromGroup","AdminResetUserPassword","AdminRespondToAuthChallenge","AdminSetUserMFAPreference","AdminSetUserPassword","AdminSetUserSettings","AdminUpdateAuthEventFeedback","AdminUpdateDeviceStatus","AdminUpdateUserAttributes","AdminUserGlobalSignOut","AssociateSoftwareToken","ChangePassword","ConfirmDevice","ConfirmForgotPassword","ConfirmSignUp","CreateGroup","CreateIdentityProvider","CreateResourceServer","CreateUserImportJob","CreateUserPool","CreateUserPoolClient","CreateUserPoolDomain","DeleteGroup","DeleteIdentityProvider","DeleteResourceServer","DeleteUser","DeleteUserAttributes","DeleteUserPool","DeleteUserPoolClient","DeleteUserPoolDomain","DescribeIdentityProvider","DescribeResourceServer","DescribeRiskConfiguration","DescribeUserImportJob","DescribeUserPool","DescribeUserPoolClient","DescribeUserPoolDomain","ForgetDevice","ForgotPassword","GetCSVHeader","GetDevice","GetGroup","GetIdentityProviderByIdentifier","GetSigningCertificate","GetUICustomization","GetUser","GetUserAttributeVerificationCode","GetUserPoolMfaConfig","GlobalSignOut","InitiateAuth","ListDevices","ListGroups","ListIdentityProviders","ListResourceServers","ListTagsForResource","ListUserImportJobs","ListUserPoolClients","ListUserPools","ListUsers","ListUsersInGroup","ResendConfirmationCode","RespondToAuthChallenge","RevokeToken","SetRiskConfiguration","SetUICustomization","SetUserMFAPreference","SetUserPoolMfaConfig","SetUserSettings","SignUp","StartUserImportJob","StopUserImportJob","TagResource","UntagResource","UpdateAuthEventFeedback","UpdateDeviceStatus","UpdateGroup","UpdateIdentityProvider","UpdateResourceServer","UpdateUserAttributes","UpdateUserPool","UpdateUserPoolClient","UpdateUserPoolDomain","VerifySoftwareToken","VerifyUserAttribute"]',
    ARNFormat:
      "arn:aws:cognito-idp:${Region}:${Account}:${ResourceType}/${ResourcePath}:",
    ARNRegex: "^arn:aws:cognito-idp:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncognitouserpools.html",
  },
  {
    ServiceShortName: "comprehend",
    ServiceName: "Amazon Comprehend",
    Actions:
      '["BatchDetectDominantLanguage","BatchDetectEntities","BatchDetectKeyPhrases","BatchDetectSentiment","BatchDetectSyntax","ClassifyDocument","ContainsPiiEntities","CreateDocumentClassifier","CreateEndpoint","CreateEntityRecognizer","DeleteDocumentClassifier","DeleteEndpoint","DeleteEntityRecognizer","DeleteResourcePolicy","DescribeDocumentClassificationJob","DescribeDocumentClassifier","DescribeDominantLanguageDetectionJob","DescribeEndpoint","DescribeEntitiesDetectionJob","DescribeEntityRecognizer","DescribeEventsDetectionJob","DescribeKeyPhrasesDetectionJob","DescribePiiEntitiesDetectionJob","DescribeResourcePolicy","DescribeSentimentDetectionJob","DescribeTargetedSentimentDetectionJob","DescribeTopicsDetectionJob","DetectDominantLanguage","DetectEntities","DetectKeyPhrases","DetectPiiEntities","DetectSentiment","DetectSyntax","ImportModel","ListDocumentClassificationJobs","ListDocumentClassifierSummaries","ListDocumentClassifiers","ListDominantLanguageDetectionJobs","ListEndpoints","ListEntitiesDetectionJobs","ListEntityRecognizerSummaries","ListEntityRecognizers","ListEventsDetectionJobs","ListKeyPhrasesDetectionJobs","ListPiiEntitiesDetectionJobs","ListSentimentDetectionJobs","ListTagsForResource","ListTargetedSentimentDetectionJobs","ListTopicsDetectionJobs","PutResourcePolicy","StartDocumentClassificationJob","StartDominantLanguageDetectionJob","StartEntitiesDetectionJob","StartEventsDetectionJob","StartKeyPhrasesDetectionJob","StartPiiEntitiesDetectionJob","StartSentimentDetectionJob","StartTargetedSentimentDetectionJob","StartTopicsDetectionJob","StopDominantLanguageDetectionJob","StopEntitiesDetectionJob","StopEventsDetectionJob","StopKeyPhrasesDetectionJob","StopPiiEntitiesDetectionJob","StopSentimentDetectionJob","StopTargetedSentimentDetectionJob","StopTrainingDocumentClassifier","StopTrainingEntityRecognizer","TagResource","UntagResource","UpdateEndpoint"]',
    ARNFormat:
      "arn:${Partition}:comprehend:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:comprehend:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","comprehend:ModelKmsKey","comprehend:OutputKmsKey","comprehend:VolumeKmsKey","comprehend:VpcSecurityGroupIds","comprehend:VpcSubnets"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehend.html",
  },
  {
    ServiceShortName: "comprehendmedical",
    ServiceName: "Amazon Comprehend Medical",
    Actions:
      '["DescribeEntitiesDetectionV2Job","DescribeICD10CMInferenceJob","DescribePHIDetectionJob","DescribeRxNormInferenceJob","DescribeSNOMEDCTInferenceJob","DetectEntitiesV2","DetectPHI","InferICD10CM","InferRxNorm","InferSNOMEDCT","ListEntitiesDetectionV2Jobs","ListICD10CMInferenceJobs","ListPHIDetectionJobs","ListRxNormInferenceJobs","ListSNOMEDCTInferenceJobs","StartEntitiesDetectionV2Job","StartICD10CMInferenceJob","StartPHIDetectionJob","StartRxNormInferenceJob","StartSNOMEDCTInferenceJob","StopEntitiesDetectionV2Job","StopICD10CMInferenceJob","StopPHIDetectionJob","StopRxNormInferenceJob","StopSNOMEDCTInferenceJob"]',
    ARNFormat:
      "arn:${Partition}:comprehendmedical:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:comprehendmedical:.+:.+:.+",
    conditionKeys: '["aws:SourceArn","aws:SourceVpc","aws:TagKeys"]',
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncomprehendmedical.html",
  },
  {
    ServiceShortName: "connect",
    ServiceName: "Amazon Connect",
    Actions:
      '["AssociateApprovedOrigin","AssociateBot","AssociateCustomerProfilesDomain","AssociateDefaultVocabulary","AssociateInstanceStorageConfig","AssociateLambdaFunction","AssociateLexBot","AssociatePhoneNumberContactFlow","AssociateQueueQuickConnects","AssociateRoutingProfileQueues","AssociateSecurityKey","BatchAssociateAnalyticsDataSet","BatchDisassociateAnalyticsDataSet","ClaimPhoneNumber","CreateAgentStatus","CreateContactFlow","CreateContactFlowModule","CreateHoursOfOperation","CreateInstance","CreateIntegrationAssociation","CreateQueue","CreateQuickConnect","CreateRoutingProfile","CreateSecurityProfile","CreateUseCase","CreateUser","CreateUserHierarchyGroup","CreateVocabulary","DeleteContactFlow","DeleteContactFlowModule","DeleteHoursOfOperation","DeleteInstance","DeleteIntegrationAssociation","DeleteQuickConnect","DeleteSecurityProfile","DeleteUseCase","DeleteUser","DeleteUserHierarchyGroup","DeleteVocabulary","DescribeAgentStatus","DescribeContact","DescribeContactFlow","DescribeContactFlowModule","DescribeHoursOfOperation","DescribeInstance","DescribeInstanceAttribute","DescribeInstanceStorageConfig","DescribePhoneNumber","DescribeQueue","DescribeQuickConnect","DescribeRoutingProfile","DescribeSecurityProfile","DescribeUser","DescribeUserHierarchyGroup","DescribeUserHierarchyStructure","DescribeVocabulary","DisassociateApprovedOrigin","DisassociateBot","DisassociateCustomerProfilesDomain","DisassociateInstanceStorageConfig","DisassociateLambdaFunction","DisassociateLexBot","DisassociatePhoneNumberContactFlow","DisassociateQueueQuickConnects","DisassociateRoutingProfileQueues","DisassociateSecurityKey","GetContactAttributes","GetCurrentMetricData","GetFederationToken","GetFederationTokens","GetMetricData","ListAgentStatuses","ListApprovedOrigins","ListBots","ListContactFlowModules","ListContactFlows","ListContactReferences","ListDefaultVocabularies","ListHoursOfOperations","ListInstanceAttributes","ListInstanceStorageConfigs","ListInstances","ListIntegrationAssociations","ListLambdaFunctions","ListLexBots","ListPhoneNumbers","ListPhoneNumbersV2","ListPrompts","ListQueueQuickConnects","ListQueues","ListQuickConnects","ListRealtimeContactAnalysisSegments","ListRoutingProfileQueues","ListRoutingProfiles","ListSecurityKeys","ListSecurityProfilePermissions","ListSecurityProfiles","ListTagsForResource","ListUseCases","ListUserHierarchyGroups","ListUsers","PutUserStatus","ReleasePhoneNumber","ResumeContactRecording","SearchAvailablePhoneNumbers","SearchUsers","SearchVocabularies","StartChatContact","StartContactRecording","StartContactStreaming","StartOutboundVoiceContact","StartTaskContact","StopContact","StopContactRecording","StopContactStreaming","SuspendContactRecording","TagResource","UntagResource","UpdateAgentStatus","UpdateContact","UpdateContactAttributes","UpdateContactFlowContent","UpdateContactFlowMetadata","UpdateContactFlowModuleContent","UpdateContactFlowModuleMetadata","UpdateContactFlowName","UpdateContactSchedule","UpdateHoursOfOperation","UpdateInstanceAttribute","UpdateInstanceStorageConfig","UpdatePhoneNumber","UpdateQueueHoursOfOperation","UpdateQueueMaxContacts","UpdateQueueName","UpdateQueueOutboundCallerConfig","UpdateQueueStatus","UpdateQuickConnectConfig","UpdateQuickConnectName","UpdateRoutingProfileConcurrency","UpdateRoutingProfileDefaultOutboundQueue","UpdateRoutingProfileName","UpdateRoutingProfileQueues","UpdateSecurityProfile","UpdateUserHierarchy","UpdateUserHierarchyGroupName","UpdateUserHierarchyStructure","UpdateUserIdentityInfo","UpdateUserPhoneConfig","UpdateUserRoutingProfile","UpdateUserSecurityProfiles","UpdatedescribeContent"]',
    ARNFormat:
      "arn:${Partition}:connect:${Region}:${Account}:instance/${InstanceId}",
    ARNRegex: "^arn:${Partition}:connect:.+:.+:instance/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","connect:AttributeType","connect:InstanceId","connect:SearchTag/${TagKey}","connect:StorageResourceType"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnect.html",
  },
  {
    ServiceShortName: "profile",
    ServiceName: "Amazon Connect Customer Profiles",
    Actions:
      '["AddProfileKey","CreateDomain","CreateIntegrationWorkflow","CreateProfile","DeleteDomain","DeleteIntegration","DeleteProfile","DeleteProfileKey","DeleteProfileObject","DeleteProfileObjectType","DeleteWorkflow","GetAutoMergingPreview","GetDomain","GetIdentityResolutionJob","GetIntegration","GetMatches","GetProfileObjectType","GetProfileObjectTypeTemplate","GetWorkflow","GetWorkflowSteps","ListAccountIntegrations","ListDomains","ListIdentityResolutionJobs","ListIntegrations","ListProfileObjectTypeTemplates","ListProfileObjectTypes","ListProfileObjects","ListTagsForResource","ListWorkflows","MergeProfiles","PutIntegration","PutProfileObject","PutProfileObjectType","SearchProfiles","TagResource","UntagResource","UpdateDomain","UpdateProfile"]',
    ARNFormat:
      "arn:aws:profile:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:profile:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnectcustomerprofiles.html",
  },
  {
    ServiceShortName: "voiceid",
    ServiceName: "Amazon Connect Voice ID",
    Actions:
      '["CreateDomain","DeleteDomain","DeleteFraudster","DeleteSpeaker","DescribeComplianceConsent","DescribeDomain","DescribeFraudster","DescribeFraudsterRegistrationJob","DescribeSpeaker","DescribeSpeakerEnrollmentJob","EvaluateSession","ListDomains","ListFraudsterRegistrationJobs","ListSpeakerEnrollmentJobs","ListSpeakers","ListTagsForResource","OptOutSpeaker","RegisterComplianceConsent","StartFraudsterRegistrationJob","StartSpeakerEnrollmentJob","TagResource","UntagResource","UpdateDomain"]',
    ARNFormat:
      "arn:${Partition}:voiceid:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:voiceid:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnectvoiceid.html",
  },
  {
    ServiceShortName: "wisdom",
    ServiceName: "Amazon Connect Wisdom",
    Actions:
      '["CreateAssistant","CreateAssistantAssociation","CreateContent","CreateKnowledgeBase","CreateSession","DeleteAssistant","DeleteAssistantAssociation","DeleteContent","DeleteKnowledgeBase","GetAssistant","GetAssistantAssociation","GetContent","GetContentSummary","GetKnowledgeBase","GetRecommendations","GetSession","ListAssistantAssociations","ListAssistants","ListContents","ListKnowledgeBases","ListTagsForResource","NotifyRecommendationsReceived","QueryAssistant","RemoveKnowledgeBaseTemplateUri","SearchContent","SearchSessions","StartContentUpload","TagResource","UntagResource","UpdateContent","UpdateKnowledgeBaseTemplateUri"]',
    ARNFormat: "arn:aws:wisdom:${Region}:${Account}:${Resource}/${ResourceId}",
    ARNRegex: "^arn:aws:wisdom:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonconnectwisdom.html",
  },
  {
    ServiceShortName: "dlm",
    ServiceName: "Amazon Data Lifecycle Manager",
    Actions:
      '["CreateLifecyclePolicy","DeleteLifecyclePolicy","GetLifecyclePolicies","GetLifecyclePolicy","ListTagsForResource","TagResource","UntagResource","UpdateLifecyclePolicy"]',
    ARNFormat:
      "arn:${Partition}:dlm:${Region}:${Account}:policy/${ResourceName}",
    ARNRegex: "^arn:${Partition}:dlm:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondatalifecyclemanager.html",
  },
  {
    ServiceShortName: "detective",
    ServiceName: "Amazon Detective",
    Actions:
      '["AcceptInvitation","CreateGraph","CreateMembers","DeleteGraph","DeleteMembers","DescribeOrganizationConfiguration","DisableOrganizationAdminAccount","DisassociateMembership","EnableOrganizationAdminAccount","GetFreeTrialEligibility","GetGraphIngestState","GetMembers","GetPricingInformation","GetUsageInformation","ListGraphs","ListInvitations","ListMembers","ListOrganizationAdminAccounts","ListTagsForResource","RejectInvitation","SearchGraph","StartMonitoringMember","TagResource","UntagResource","UpdateOrganizationConfiguration"]',
    ARNFormat: "arn:aws:detective:${Region}:${AccountId}:graph:${GraphId}",
    ARNRegex: "^arn:aws:detective:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondetective.html",
  },
  {
    ServiceShortName: "devops-guru",
    ServiceName: "Amazon DevOps Guru",
    Actions:
      '["AddNotificationChannel","DeleteInsight","DescribeAccountHealth","DescribeAccountOverview","DescribeAnomaly","DescribeEventSourcesConfig","DescribeFeedback","DescribeInsight","DescribeOrganizationHealth","DescribeOrganizationOverview","DescribeOrganizationResourceCollectionHealth","DescribeResourceCollectionHealth","DescribeServiceIntegration","GetCostEstimation","GetResourceCollection","ListAnomaliesForInsight","ListEvents","ListInsights","ListNotificationChannels","ListOrganizationInsights","ListRecommendations","PutFeedback","RemoveNotificationChannel","SearchInsights","SearchOrganizationInsights","StartCostEstimation","UpdateEventSourcesConfig","UpdateResourceCollection","UpdateServiceIntegration"]',
    ARNFormat: "arn:aws:devops-guru:${Region}:${Account}:",
    ARNRegex: "^arn:aws:devops-guru:.+:.+:",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondevopsguru.html",
  },
  {
    ServiceShortName: "dynamodb",
    ServiceName: "Amazon DynamoDB",
    Actions:
      '["BatchGetItem","BatchWriteItem","ConditionCheckItem","CreateBackup","CreateGlobalTable","CreateTable","CreateTableReplica","DeleteBackup","DeleteItem","DeleteTable","DeleteTableReplica","DescribeBackup","DescribeContinuousBackups","DescribeContributorInsights","DescribeExport","DescribeGlobalTable","DescribeGlobalTableSettings","DescribeKinesisStreamingDestination","DescribeLimits","DescribeReservedCapacity","DescribeReservedCapacityOfferings","DescribeStream","DescribeTable","DescribeTableReplicaAutoScaling","DescribeTimeToLive","DisableKinesisStreamingDestination","EnableKinesisStreamingDestination","ExportTableToPointInTime","GetItem","GetRecords","GetShardIterator","ListBackups","ListContributorInsights","ListExports","ListGlobalTables","ListStreams","ListTables","ListTagsOfResource","PartiQLDelete","PartiQLInsert","PartiQLSelect","PartiQLUpdate","PurchaseReservedCapacityOfferings","PutItem","Query","RestoreTableFromAwsBackup","RestoreTableFromBackup","RestoreTableToPointInTime","Scan","StartAwsBackupJob","TagResource","UntagResource","UpdateContinuousBackups","UpdateContributorInsights","UpdateGlobalTable","UpdateGlobalTableSettings","UpdateItem","UpdateTable","UpdateTableReplicaAutoScaling","UpdateTimeToLive"]',
    ARNFormat:
      "arn:aws:dynamodb:${Region}:${AccountID}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:aws:dynamodb:.+:.+",
    conditionKeys:
      '["dynamodb:Attributes","dynamodb:EnclosingOperation","dynamodb:FullTableScan","dynamodb:LeadingKeys","dynamodb:ReturnConsumedCapacity","dynamodb:ReturnValues","dynamodb:Select"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodb.html",
    ConsoleLink: "https://console.aws.amazon.com/dynamodb/home",
  },
  {
    ServiceShortName: "dax",
    ServiceName: "Amazon DynamoDB Accelerator (DAX)",
    Actions:
      '["BatchGetItem","BatchWriteItem","ConditionCheckItem","CreateCluster","CreateParameterGroup","CreateSubnetGroup","DecreaseReplicationFactor","DeleteCluster","DeleteItem","DeleteParameterGroup","DeleteSubnetGroup","DescribeClusters","DescribeDefaultParameters","DescribeEvents","DescribeParameterGroups","DescribeParameters","DescribeSubnetGroups","GetItem","IncreaseReplicationFactor","ListTags","PutItem","Query","RebootNode","Scan","TagResource","UntagResource","UpdateCluster","UpdateItem","UpdateParameterGroup","UpdateSubnetGroup"]',
    ARNFormat: "arn:aws:dax:${Region}:${Account}:cache/${ClusterName}",
    ARNRegex: "^arn:aws:dax:.+:[0-9]+:cache/[a-zA-Z0-9_.-]+",
    conditionKeys: '"dax:EnclosingOperation"',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondynamodbacceleratordax.html",
    ConsoleLink:
      "https://us-east-1.console.aws.amazon.com/dynamodbv2/home?region=us-east-1#dax-clusters",
  },
  {
    ServiceShortName: "ec2",
    ServiceName: "Amazon EC2",
    Actions:
      '["AcceptReservedInstancesExchangeQuote","AcceptTransitGatewayMulticastDomainAssociations","AcceptTransitGatewayPeeringAttachment","AcceptTransitGatewayVpcAttachment","AcceptVpcEndpointConnections","AcceptVpcPeeringConnection","AdvertiseByoipCidr","AllocateAddress","AllocateHosts","AllocateIpamPoolCidr","ApplySecurityGroupsToClientVpnTargetNetwork","AssignIpv6Addresses","AssignPrivateIpAddresses","AssociateAddress","AssociateClientVpnTargetNetwork","AssociateDhcpOptions","AssociateEnclaveCertificateIamRole","AssociateIamInstanceProfile","AssociateInstanceEventWindow","AssociateRouteTable","AssociateSubnetCidrBlock","AssociateTransitGatewayMulticastDomain","AssociateTransitGatewayRouteTable","AssociateTrunkInterface","AssociateVpcCidrBlock","AttachClassicLinkVpc","AttachInternetGateway","AttachNetworkInterface","AttachVolume","AttachVpnGateway","AuthorizeClientVpnIngress","AuthorizeSecurityGroupEgress","AuthorizeSecurityGroupIngress","BundleInstance","CancelBundleTask","CancelCapacityReservation","CancelCapacityReservationFleets","CancelConversionTask","CancelExportTask","CancelImportTask","CancelReservedInstancesListing","CancelSpotFleetRequests","CancelSpotInstanceRequests","ConfirmProductInstance","CopyFpgaImage","CopyImage","CopySnapshot","CreateCapacityReservation","CreateCapacityReservationFleet","CreateCarrierGateway","CreateClientVpnEndpoint","CreateClientVpnRoute","CreateCoipPoolPermission","CreateCustomerGateway","CreateDefaultSubnet","CreateDefaultVpc","CreateDhcpOptions","CreateEgressOnlyInternetGateway","CreateFleet","CreateFlowLogs","CreateFpgaImage","CreateImage","CreateInstanceEventWindow","CreateInstanceExportTask","CreateInternetGateway","CreateIpam","CreateIpamPool","CreateIpamScope","CreateKeyPair","CreateLaunchTemplate","CreateLaunchTemplateVersion","CreateLocalGatewayRoute","CreateLocalGatewayRouteTablePermission","CreateLocalGatewayRouteTableVpcAssociation","CreateManagedPrefixList","CreateNatGateway","CreateNetworkAcl","CreateNetworkAclEntry","CreateNetworkInsightsAccessScope","CreateNetworkInsightsPath","CreateNetworkInterface","CreateNetworkInterfacePermission","CreatePlacementGroup","CreatePublicIpv4Pool","CreateReplaceRootVolumeTask","CreateReservedInstancesListing","CreateRestoreImageTask","CreateRoute","CreateRouteTable","CreateSecurityGroup","CreateSnapshot","CreateSnapshots","CreateSpotDatafeedSubscription","CreateStoreImageTask","CreateSubnet","CreateSubnetCidrReservation","CreateTags","CreateTrafficMirrorFilter","CreateTrafficMirrorFilterRule","CreateTrafficMirrorSession","CreateTrafficMirrorTarget","CreateTransitGateway","CreateTransitGatewayConnect","CreateTransitGatewayConnectPeer","CreateTransitGatewayMulticastDomain","CreateTransitGatewayPeeringAttachment","CreateTransitGatewayPrefixListReference","CreateTransitGatewayRoute","CreateTransitGatewayRouteTable","CreateTransitGatewayVpcAttachment","CreateVolume","CreateVpc","CreateVpcEndpoint","CreateVpcEndpointConnectionNotification","CreateVpcEndpointServiceConfiguration","CreateVpcPeeringConnection","CreateVpnConnection","CreateVpnConnectionRoute","CreateVpnGateway","DeleteCarrierGateway","DeleteClientVpnEndpoint","DeleteClientVpnRoute","DeleteCoipPoolPermission","DeleteCustomerGateway","DeleteDhcpOptions","DeleteEgressOnlyInternetGateway","DeleteFleets","DeleteFlowLogs","DeleteFpgaImage","DeleteInstanceEventWindow","DeleteInternetGateway","DeleteIpam","DeleteIpamPool","DeleteIpamScope","DeleteKeyPair","DeleteLaunchTemplate","DeleteLaunchTemplateVersions","DeleteLocalGatewayRoute","DeleteLocalGatewayRouteTablePermission","DeleteLocalGatewayRouteTableVpcAssociation","DeleteManagedPrefixList","DeleteNatGateway","DeleteNetworkAcl","DeleteNetworkAclEntry","DeleteNetworkInsightsAccessScope","DeleteNetworkInsightsAccessScopeAnalysis","DeleteNetworkInsightsAnalysis","DeleteNetworkInsightsPath","DeleteNetworkInterface","DeleteNetworkInterfacePermission","DeletePlacementGroup","DeletePublicIpv4Pool","DeleteQueuedReservedInstances","DeleteResourcePolicy","DeleteRoute","DeleteRouteTable","DeleteSecurityGroup","DeleteSnapshot","DeleteSpotDatafeedSubscription","DeleteSubnet","DeleteSubnetCidrReservation","DeleteTags","DeleteTrafficMirrorFilter","DeleteTrafficMirrorFilterRule","DeleteTrafficMirrorSession","DeleteTrafficMirrorTarget","DeleteTransitGateway","DeleteTransitGatewayConnect","DeleteTransitGatewayConnectPeer","DeleteTransitGatewayMulticastDomain","DeleteTransitGatewayPeeringAttachment","DeleteTransitGatewayPrefixListReference","DeleteTransitGatewayRoute","DeleteTransitGatewayRouteTable","DeleteTransitGatewayVpcAttachment","DeleteVolume","DeleteVpc","DeleteVpcEndpointConnectionNotifications","DeleteVpcEndpointServiceConfigurations","DeleteVpcEndpoints","DeleteVpcPeeringConnection","DeleteVpnConnection","DeleteVpnConnectionRoute","DeleteVpnGateway","DeprovisionByoipCidr","DeprovisionIpamPoolCidr","DeprovisionPublicIpv4PoolCidr","DeregisterImage","DeregisterInstanceEventNotificationAttributes","DeregisterTransitGatewayMulticastGroupMembers","DeregisterTransitGatewayMulticastGroupSources","DescribeAccountAttributes","DescribeAddresses","DescribeAddressesAttribute","DescribeAggregateIdFormat","DescribeAvailabilityZones","DescribeBundleTasks","DescribeByoipCidrs","DescribeCapacityReservationFleets","DescribeCapacityReservations","DescribeCarrierGateways","DescribeClassicLinkInstances","DescribeClientVpnAuthorizationRules","DescribeClientVpnConnections","DescribeClientVpnEndpoints","DescribeClientVpnRoutes","DescribeClientVpnTargetNetworks","DescribeCoipPools","DescribeConversionTasks","DescribeCustomerGateways","DescribeDhcpOptions","DescribeEgressOnlyInternetGateways","DescribeElasticGpus","DescribeExportImageTasks","DescribeExportTasks","DescribeFastLaunchImages","DescribeFastSnapshotRestores","DescribeFleetHistory","DescribeFleetInstances","DescribeFleets","DescribeFlowLogs","DescribeFpgaImageAttribute","DescribeFpgaImages","DescribeHostReservationOfferings","DescribeHostReservations","DescribeHosts","DescribeIamInstanceProfileAssociations","DescribeIdFormat","DescribeIdentityIdFormat","DescribeImageAttribute","DescribeImages","DescribeImportImageTasks","DescribeImportSnapshotTasks","DescribeInstanceAttribute","DescribeInstanceCreditSpecifications","DescribeInstanceEventNotificationAttributes","DescribeInstanceEventWindows","DescribeInstanceStatus","DescribeInstanceTypeOfferings","DescribeInstanceTypes","DescribeInstances","DescribeInternetGateways","DescribeIpamPools","DescribeIpamScopes","DescribeIpams","DescribeIpv6Pools","DescribeKeyPairs","DescribeLaunchTemplateVersions","DescribeLaunchTemplates","DescribeLocalGatewayRouteTablePermissions","DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociations","DescribeLocalGatewayRouteTableVpcAssociations","DescribeLocalGatewayRouteTables","DescribeLocalGatewayVirtualInterfaceGroups","DescribeLocalGatewayVirtualInterfaces","DescribeLocalGateways","DescribeManagedPrefixLists","DescribeMovingAddresses","DescribeNatGateways","DescribeNetworkAcls","DescribeNetworkInsightsAccessScopeAnalyses","DescribeNetworkInsightsAccessScopes","DescribeNetworkInsightsAnalyses","DescribeNetworkInsightsPaths","DescribeNetworkInterfaceAttribute","DescribeNetworkInterfacePermissions","DescribeNetworkInterfaces","DescribePlacementGroups","DescribePrefixLists","DescribePrincipalIdFormat","DescribePublicIpv4Pools","DescribeRegions","DescribeReplaceRootVolumeTasks","DescribeReservedInstances","DescribeReservedInstancesListings","DescribeReservedInstancesModifications","DescribeReservedInstancesOfferings","DescribeRouteTables","DescribeScheduledInstanceAvailability","DescribeScheduledInstances","DescribeSecurityGroupReferences","DescribeSecurityGroupRules","DescribeSecurityGroups","DescribeSnapshotAttribute","DescribeSnapshotTierStatus","DescribeSnapshots","DescribeSpotDatafeedSubscription","DescribeSpotFleetInstances","DescribeSpotFleetRequestHistory","DescribeSpotFleetRequests","DescribeSpotInstanceRequests","DescribeSpotPriceHistory","DescribeStaleSecurityGroups","DescribeStoreImageTasks","DescribeSubnets","DescribeTags","DescribeTrafficMirrorFilters","DescribeTrafficMirrorSessions","DescribeTrafficMirrorTargets","DescribeTransitGatewayAttachments","DescribeTransitGatewayConnectPeers","DescribeTransitGatewayConnects","DescribeTransitGatewayMulticastDomains","DescribeTransitGatewayPeeringAttachments","DescribeTransitGatewayRouteTables","DescribeTransitGatewayVpcAttachments","DescribeTransitGateways","DescribeTrunkInterfaceAssociations","DescribeVolumeAttribute","DescribeVolumeStatus","DescribeVolumes","DescribeVolumesModifications","DescribeVpcAttribute","DescribeVpcClassicLink","DescribeVpcClassicLinkDnsSupport","DescribeVpcEndpointConnectionNotifications","DescribeVpcEndpointConnections","DescribeVpcEndpointServiceConfigurations","DescribeVpcEndpointServicePermissions","DescribeVpcEndpointServices","DescribeVpcEndpoints","DescribeVpcPeeringConnections","DescribeVpcs","DescribeVpnConnections","DescribeVpnGateways","DetachClassicLinkVpc","DetachInternetGateway","DetachNetworkInterface","DetachVolume","DetachVpnGateway","DisableEbsEncryptionByDefault","DisableFastLaunch","DisableFastSnapshotRestores","DisableImageDeprecation","DisableIpamOrganizationAdminAccount","DisableSerialConsoleAccess","DisableTransitGatewayRouteTablePropagation","DisableVgwRoutePropagation","DisableVpcClassicLink","DisableVpcClassicLinkDnsSupport","DisassociateAddress","DisassociateClientVpnTargetNetwork","DisassociateEnclaveCertificateIamRole","DisassociateIamInstanceProfile","DisassociateInstanceEventWindow","DisassociateRouteTable","DisassociateSubnetCidrBlock","DisassociateTransitGatewayMulticastDomain","DisassociateTransitGatewayRouteTable","DisassociateTrunkInterface","DisassociateVpcCidrBlock","EnableEbsEncryptionByDefault","EnableFastLaunch","EnableFastSnapshotRestores","EnableImageDeprecation","EnableIpamOrganizationAdminAccount","EnableSerialConsoleAccess","EnableTransitGatewayRouteTablePropagation","EnableVgwRoutePropagation","EnableVolumeIO","EnableVpcClassicLink","EnableVpcClassicLinkDnsSupport","ExportClientVpnClientCertificateRevocationList","ExportClientVpnClientConfiguration","ExportImage","ExportTransitGatewayRoutes","GetAssociatedEnclaveCertificateIamRoles","GetAssociatedIpv6PoolCidrs","GetCapacityReservationUsage","GetCoipPoolUsage","GetConsoleOutput","GetConsoleScreenshot","GetDefaultCreditSpecification","GetEbsDefaultKmsKeyId","GetEbsEncryptionByDefault","GetFlowLogsIntegrationTemplate","GetGroupsForCapacityReservation","GetHostReservationPurchasePreview","GetInstanceTypesFromInstanceRequirements","GetIpamAddressHistory","GetIpamPoolAllocations","GetIpamPoolCidrs","GetIpamResourceCidrs","GetLaunchTemplateData","GetManagedPrefixListAssociations","GetManagedPrefixListEntries","GetNetworkInsightsAccessScopeAnalysisFindings","GetNetworkInsightsAccessScopeContent","GetPasswordData","GetReservedInstancesExchangeQuote","GetResourcePolicy","GetSerialConsoleAccessStatus","GetSpotPlacementScores","GetSubnetCidrReservations","GetTransitGatewayAttachmentPropagations","GetTransitGatewayMulticastDomainAssociations","GetTransitGatewayPrefixListReferences","GetTransitGatewayRouteTableAssociations","GetTransitGatewayRouteTablePropagations","GetVpnConnectionDeviceSampleConfiguration","GetVpnConnectionDeviceTypes","ImportClientVpnClientCertificateRevocationList","ImportImage","ImportInstance","ImportKeyPair","ImportSnapshot","ImportVolume","ListImagesInRecycleBin","ListSnapshotsInRecycleBin","ModifyAddressAttribute","ModifyAvailabilityZoneGroup","ModifyCapacityReservation","ModifyCapacityReservationFleet","ModifyClientVpnEndpoint","ModifyDefaultCreditSpecification","ModifyEbsDefaultKmsKeyId","ModifyFleet","ModifyFpgaImageAttribute","ModifyHosts","ModifyIdFormat","ModifyIdentityIdFormat","ModifyImageAttribute","ModifyInstanceAttribute","ModifyInstanceCapacityReservationAttributes","ModifyInstanceCreditSpecification","ModifyInstanceEventStartTime","ModifyInstanceEventWindow","ModifyInstanceMaintenanceOptions","ModifyInstanceMetadataOptions","ModifyInstancePlacement","ModifyIpam","ModifyIpamPool","ModifyIpamResourceCidr","ModifyIpamScope","ModifyLaunchTemplate","ModifyManagedPrefixList","ModifyNetworkInterfaceAttribute","ModifyPrivateDnsNameOptions","ModifyReservedInstances","ModifySecurityGroupRules","ModifySnapshotAttribute","ModifySnapshotTier","ModifySpotFleetRequest","ModifySubnetAttribute","ModifyTrafficMirrorFilterNetworkServices","ModifyTrafficMirrorFilterRule","ModifyTrafficMirrorSession","ModifyTransitGateway","ModifyTransitGatewayPrefixListReference","ModifyTransitGatewayVpcAttachment","ModifyVolume","ModifyVolumeAttribute","ModifyVpcAttribute","ModifyVpcEndpoint","ModifyVpcEndpointConnectionNotification","ModifyVpcEndpointServiceConfiguration","ModifyVpcEndpointServicePayerResponsibility","ModifyVpcEndpointServicePermissions","ModifyVpcPeeringConnectionOptions","ModifyVpcTenancy","ModifyVpnConnection","ModifyVpnConnectionOptions","ModifyVpnTunnelCertificate","ModifyVpnTunnelOptions","MonitorInstances","MoveAddressToVpc","MoveByoipCidrToIpam","ProvisionByoipCidr","ProvisionIpamPoolCidr","ProvisionPublicIpv4PoolCidr","PurchaseHostReservation","PurchaseReservedInstancesOffering","PurchaseScheduledInstances","PutResourcePolicy","RebootInstances","RegisterImage","RegisterInstanceEventNotificationAttributes","RegisterTransitGatewayMulticastGroupMembers","RegisterTransitGatewayMulticastGroupSources","RejectTransitGatewayMulticastDomainAssociations","RejectTransitGatewayPeeringAttachment","RejectTransitGatewayVpcAttachment","RejectVpcEndpointConnections","RejectVpcPeeringConnection","ReleaseAddress","ReleaseHosts","ReleaseIpamPoolAllocation","ReplaceIamInstanceProfileAssociation","ReplaceNetworkAclAssociation","ReplaceNetworkAclEntry","ReplaceRoute","ReplaceRouteTableAssociation","ReplaceTransitGatewayRoute","ReportInstanceStatus","RequestSpotFleet","RequestSpotInstances","ResetAddressAttribute","ResetEbsDefaultKmsKeyId","ResetFpgaImageAttribute","ResetImageAttribute","ResetInstanceAttribute","ResetNetworkInterfaceAttribute","ResetSnapshotAttribute","RestoreAddressToClassic","RestoreImageFromRecycleBin","RestoreManagedPrefixListVersion","RestoreSnapshotFromRecycleBin","RestoreSnapshotTier","RevokeClientVpnIngress","RevokeSecurityGroupEgress","RevokeSecurityGroupIngress","RunInstances","RunScheduledInstances","SearchLocalGatewayRoutes","SearchTransitGatewayMulticastGroups","SearchTransitGatewayRoutes","SendDiagnosticInterrupt","SendSpotInstanceInterruptions","StartInstances","StartNetworkInsightsAccessScopeAnalysis","StartNetworkInsightsAnalysis","StartVpcEndpointServicePrivateDnsVerification","StopInstances","TerminateClientVpnConnections","TerminateInstances","UnassignIpv6Addresses","UnassignPrivateIpAddresses","UnmonitorInstances","UpdateSecurityGroupRuleDescriptionsEgress","UpdateSecurityGroupRuleDescriptionsIngress","WithdrawByoipCidr"]',
    ARNFormat:
      "arn:aws:ec2:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:aws:ec2:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","ec2:AccepterVpc","ec2:Add/group","ec2:Add/userId","ec2:AllocationId","ec2:AssociatePublicIpAddress","ec2:Attribute","ec2:Attribute/${AttributeName}","ec2:AuthenticationType","ec2:AuthorizedService","ec2:AuthorizedUser","ec2:AutoPlacement","ec2:AvailabilityZone","ec2:CapacityReservationFleet","ec2:ClientRootCertificateChainArn","ec2:CloudwatchLogGroupArn","ec2:CloudwatchLogStreamArn","ec2:CreateAction","ec2:DPDTimeoutSeconds","ec2:DhcpOptionsID","ec2:DirectoryArn","ec2:Domain","ec2:EbsOptimized","ec2:ElasticGpuType","ec2:Encrypted","ec2:GatewayType","ec2:HostRecovery","ec2:IKEVersions","ec2:ImageID","ec2:ImageType","ec2:InsideTunnelCidr","ec2:InsideTunnelIpv6Cidr","ec2:InstanceAutoRecovery","ec2:InstanceID","ec2:InstanceMarketType","ec2:InstanceMetadataTags","ec2:InstanceProfile","ec2:InstanceType","ec2:InternetGatewayID","ec2:Ipv4IpamPoolId","ec2:Ipv6IpamPoolId","ec2:IsLaunchTemplateResource","ec2:KeyPairName","ec2:KeyPairType","ec2:KmsKeyId","ec2:LaunchTemplate","ec2:MetadataHttpEndpoint","ec2:MetadataHttpPutResponseHopLimit","ec2:MetadataHttpTokens","ec2:NetworkAclID","ec2:NetworkInterfaceID","ec2:NewInstanceProfile","ec2:OutpostArn","ec2:Owner","ec2:ParentSnapshot","ec2:ParentVolume","ec2:Permission","ec2:Phase1DHGroup","ec2:Phase1EncryptionAlgorithms","ec2:Phase1IntegrityAlgorithms","ec2:Phase1LifetimeSeconds","ec2:Phase2DHGroup","ec2:Phase2EncryptionAlgorithms","ec2:Phase2IntegrityAlgorithms","ec2:Phase2LifetimeSeconds","ec2:PlacementGroup","ec2:PlacementGroupName","ec2:PlacementGroupStrategy","ec2:PreSharedKeys","ec2:ProductCode","ec2:Public","ec2:PublicIpAddress","ec2:Quantity","ec2:Region","ec2:RekeyFuzzPercentage","ec2:RekeyMarginTimeSeconds","ec2:Remove/group","ec2:Remove/userId","ec2:ReplayWindowSizePackets","ec2:RequesterVpc","ec2:ReservedInstancesOfferingType","ec2:ResourceTag/","ec2:ResourceTag/${TagKey}","ec2:RoleDelivery","ec2:RootDeviceType","ec2:RouteTableID","ec2:RoutingType","ec2:SamlProviderArn","ec2:SecurityGroupID","ec2:ServerCertificateArn","ec2:SnapshotID","ec2:SnapshotTime","ec2:SourceInstanceARN","ec2:SourceOutpostArn","ec2:Subnet","ec2:SubnetID","ec2:Tenancy","ec2:VolumeID","ec2:VolumeIops","ec2:VolumeSize","ec2:VolumeThroughput","ec2:VolumeType","ec2:Vpc","ec2:VpcID","ec2:VpcPeeringConnectionID","ec2:VpceServiceName","ec2:VpceServiceOwner","ec2:VpceServicePrivateDnsName"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html",
    ConsoleLink:
      "https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#Home:",
  },
  {
    ServiceShortName: "autoscaling",
    ServiceName: "Amazon EC2 Auto Scaling",
    Actions:
      '["AttachInstances","AttachLoadBalancerTargetGroups","AttachLoadBalancers","BatchDeleteScheduledAction","BatchPutScheduledUpdateGroupAction","CancelInstanceRefresh","CompleteLifecycleAction","CreateAutoScalingGroup","CreateLaunchConfiguration","CreateOrUpdateTags","DeleteAutoScalingGroup","DeleteLaunchConfiguration","DeleteLifecycleHook","DeleteNotificationConfiguration","DeletePolicy","DeleteScheduledAction","DeleteTags","DeleteWarmPool","DescribeAccountLimits","DescribeAdjustmentTypes","DescribeAutoScalingGroups","DescribeAutoScalingInstances","DescribeAutoScalingNotificationTypes","DescribeInstanceRefreshes","DescribeLaunchConfigurations","DescribeLifecycleHookTypes","DescribeLifecycleHooks","DescribeLoadBalancerTargetGroups","DescribeLoadBalancers","DescribeMetricCollectionTypes","DescribeNotificationConfigurations","DescribePolicies","DescribeScalingActivities","DescribeScalingProcessTypes","DescribeScheduledActions","DescribeTags","DescribeTerminationPolicyTypes","DescribeWarmPool","DetachInstances","DetachLoadBalancerTargetGroups","DetachLoadBalancers","DisableMetricsCollection","EnableMetricsCollection","EnterStandby","ExecutePolicy","ExitStandby","GetPredictiveScalingForecast","PutLifecycleHook","PutNotificationConfiguration","PutScalingPolicy","PutScheduledUpdateGroupAction","PutWarmPool","RecordLifecycleActionHeartbeat","ResumeProcesses","SetDesiredCapacity","SetInstanceHealth","SetInstanceProtection","StartInstanceRefresh","SuspendProcesses","TerminateInstanceInAutoScalingGroup","UpdateAutoScalingGroup"]',
    ARNFormat: "arn:${Partition}:autoscaling:<region>:<account>:<relative-id>",
    ARNRegex: "^arn:${Partition}:autoscaling:.+:.+:.+",
    conditionKeys:
      '["autoscaling:ImageId","autoscaling:InstanceType","autoscaling:InstanceTypes","autoscaling:LaunchConfigurationName","autoscaling:LaunchTemplateVersionSpecified","autoscaling:LoadBalancerNames","autoscaling:MaxSize","autoscaling:MetadataHttpEndpoint","autoscaling:MetadataHttpPutResponseHopLimit","autoscaling:MetadataHttpTokens","autoscaling:MinSize","autoscaling:ResourceTag/${TagKey}","autoscaling:SpotPrice","autoscaling:TargetGroupARNs","autoscaling:VPCZoneIdentifiers","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2autoscaling.html",
    ConsoleLink:
      "https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#AutoScalingGroups:",
  },
  {
    ServiceShortName: "imagebuilder",
    ServiceName: "Amazon EC2 Image Builder",
    Actions:
      '["CancelImageCreation","CreateComponent","CreateContainerRecipe","CreateDistributionConfiguration","CreateImage","CreateImagePipeline","CreateImageRecipe","CreateInfrastructureConfiguration","DeleteComponent","DeleteContainerRecipe","DeleteDistributionConfiguration","DeleteImage","DeleteImagePipeline","DeleteImageRecipe","DeleteInfrastructureConfiguration","GetComponent","GetComponentPolicy","GetContainerRecipe","GetContainerRecipePolicy","GetDistributionConfiguration","GetImage","GetImagePipeline","GetImagePolicy","GetImageRecipe","GetImageRecipePolicy","GetInfrastructureConfiguration","ImportComponent","ImportVmImage","ListComponentBuildVersions","ListComponents","ListContainerRecipes","ListDistributionConfigurations","ListImageBuildVersions","ListImagePackages","ListImagePipelineImages","ListImagePipelines","ListImageRecipes","ListImages","ListInfrastructureConfigurations","ListTagsForResource","PutComponentPolicy","PutContainerRecipePolicy","PutImagePolicy","PutImageRecipePolicy","StartImagePipelineExecution","TagResource","UntagResource","UpdateDistributionConfiguration","UpdateImagePipeline","UpdateInfrastructureConfiguration"]',
    ARNFormat:
      "arn:aws:imagebuilder:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:imagebuilder:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","imagebuilder:CreatedResourceTag/\\u003ckey\\u003e","imagebuilder:CreatedResourceTagKeys","imagebuilder:Ec2MetadataHttpTokens","imagebuilder:StatusTopicArn"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2imagebuilder.html",
  },
  {
    ServiceShortName: "ec2-instance-connect",
    ServiceName: "Amazon EC2 Instance Connect",
    Actions: '["SendSSHPublicKey","SendSerialConsoleSSHPublicKey"]',
    ARNFormat: "arn:aws:ec2:<region>:<account>:<resourceType>/<resourcePath>",
    ARNRegex: "^arn:aws:ec2:.+",
    conditionKeys:
      '["aws:ResourceTag/${TagKey}","ec2:ResourceTag/${TagKey}","ec2:osuser"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2instanceconnect.html",
  },
  {
    ServiceShortName: "ebs",
    ServiceName: "Amazon Elastic Block Store",
    Actions:
      '["CompleteSnapshot","GetSnapshotBlock","ListChangedBlocks","ListSnapshotBlocks","PutSnapshotBlock","StartSnapshot"]',
    ARNFormat: "arn:aws:ebs:<region>:<account>:<resourceType>/<resourcePath>",
    ARNRegex: "^arn:aws:ebs:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","ebs:Description","ebs:ParentSnapshot","ebs:VolumeSize"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticblockstore.html",
  },
  {
    ServiceShortName: "ecr",
    ServiceName: "Amazon Elastic Container Registry",
    Actions:
      '["BatchCheckLayerAvailability","BatchDeleteImage","BatchGetImage","BatchGetRepositoryScanningConfiguration","BatchImportUpstreamImage","CompleteLayerUpload","CreatePullThroughCacheRule","CreateRepository","DeleteLifecyclePolicy","DeletePullThroughCacheRule","DeleteRegistryPolicy","DeleteRepository","DeleteRepositoryPolicy","DescribeImageReplicationStatus","DescribeImageScanFindings","DescribeImages","DescribePullThroughCacheRules","DescribeRegistry","DescribeRepositories","GetAuthorizationToken","GetDownloadUrlForLayer","GetLifecyclePolicy","GetLifecyclePolicyPreview","GetRegistryPolicy","GetRegistryScanningConfiguration","GetRepositoryPolicy","InitiateLayerUpload","ListImages","ListTagsForResource","PutImage","PutImageScanningConfiguration","PutImageTagMutability","PutLifecyclePolicy","PutRegistryPolicy","PutRegistryScanningConfiguration","PutReplicationConfiguration","ReplicateImage","SetRepositoryPolicy","StartImageScan","StartLifecyclePolicyPreview","TagResource","UntagResource","UploadLayerPart"]',
    ARNFormat: "arn:aws:ecr:${Region}:${Account}:repository/${RepositoryName}",
    ARNRegex: "^arn:aws:ecr:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","ecr:ResourceTag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerregistry.html",
  },
  {
    ServiceShortName: "ecr-public",
    ServiceName: "Amazon Elastic Container Registry Public",
    Actions:
      '["BatchCheckLayerAvailability","BatchDeleteImage","CompleteLayerUpload","CreateRepository","DeleteRepository","DeleteRepositoryPolicy","DescribeImageTags","DescribeImages","DescribeRegistries","DescribeRepositories","GetAuthorizationToken","GetRegistryCatalogData","GetRepositoryCatalogData","GetRepositoryPolicy","InitiateLayerUpload","ListTagsForResource","PutImage","PutRegistryCatalogData","PutRepositoryCatalogData","SetRepositoryPolicy","TagResource","UntagResource","UploadLayerPart"]',
    ARNFormat:
      "arn:aws:ecr-public::${Account}:${RepositoryOrRegistry}/${RepositoryNameOrAccountId}",
    ARNRegex: "^arn:aws:ecr-public::.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","ecr-public:ResourceTag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerregistrypublic.html",
  },
  {
    ServiceShortName: "ecs",
    ServiceName: "Amazon Elastic Container Service",
    Actions:
      '["CreateCapacityProvider","CreateCluster","CreateService","CreateTaskSet","DeleteAccountSetting","DeleteAttributes","DeleteCapacityProvider","DeleteCluster","DeleteService","DeleteTaskSet","DeregisterContainerInstance","DeregisterTaskDefinition","DescribeCapacityProviders","DescribeClusters","DescribeContainerInstances","DescribeServices","DescribeTaskDefinition","DescribeTaskSets","DescribeTasks","DiscoverPollEndpoint","ExecuteCommand","ListAccountSettings","ListAttributes","ListClusters","ListContainerInstances","ListServices","ListTagsForResource","ListTaskDefinitionFamilies","ListTaskDefinitions","ListTasks","Poll","PutAccountSetting","PutAccountSettingDefault","PutAttributes","PutClusterCapacityProviders","RegisterContainerInstance","RegisterTaskDefinition","RunTask","StartTask","StartTelemetrySession","StopTask","SubmitAttachmentStateChanges","SubmitContainerStateChange","SubmitTaskStateChange","TagResource","UntagResource","UpdateCapacityProvider","UpdateCluster","UpdateClusterSettings","UpdateContainerAgent","UpdateContainerInstancesState","UpdateService","UpdateServicePrimaryTaskSet","UpdateTaskSet"]',
    ARNFormat:
      "arn:${Partition}:ecs:${Region}:${Account}:${ResourceType}/${RelativeId}",
    ARNRegex: "^arn:aws:ecs:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","ecs:ResourceTag/${TagKey}","ecs:capacity-provider","ecs:cluster","ecs:container-instances","ecs:container-name","ecs:enable-execute-command","ecs:service","ecs:task","ecs:task-definition"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticcontainerservice.html",
    ConsoleLink:
      "https://us-east-1.console.aws.amazon.com/ecs/home?region=us-east-1#",
  },
  {
    ServiceShortName: "elasticfilesystem",
    ServiceName: "Amazon Elastic File System",
    Actions:
      '["Backup","ClientMount","ClientRootAccess","ClientWrite","CreateAccessPoint","CreateFileSystem","CreateMountTarget","CreateReplicationConfiguration","CreateTags","DeleteAccessPoint","DeleteFileSystem","DeleteFileSystemPolicy","DeleteMountTarget","DeleteReplicationConfiguration","DeleteTags","DescribeAccessPoints","DescribeAccountPreferences","DescribeBackupPolicy","DescribeFileSystemPolicy","DescribeFileSystems","DescribeLifecycleConfiguration","DescribeMountTargetSecurityGroups","DescribeMountTargets","DescribeReplicationConfigurations","DescribeTags","ListTagsForResource","ModifyMountTargetSecurityGroups","PutAccountPreferences","PutBackupPolicy","PutFileSystemPolicy","PutLifecycleConfiguration","Restore","TagResource","UntagResource","UpdateFileSystem"]',
    ARNFormat:
      "arn:${Partition}:elasticfilesystem:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:elasticfilesystem:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","elasticfilesystem:AccessPointArn","elasticfilesystem:AccessedViaMountTarget","elasticfilesystem:Encrypted"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticfilesystem.html",
  },
  {
    ServiceShortName: "elastic-inference",
    ServiceName: "Amazon Elastic Inference",
    Actions:
      '["Connect","DescribeAcceleratorOfferings","DescribeAcceleratorTypes","DescribeAccelerators","ListTagsForResource","TagResource","UntagResource"]',
    ARNFormat:
      "arn:aws:elastic-inference:<region>:<account-id>:elastic-inference-accelerator/<identifier>",
    ARNRegex: "^arn:${Partition}:elastic-inference:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticinference.html",
  },
  {
    ServiceShortName: "eks",
    ServiceName: "Amazon Elastic Kubernetes Service",
    Actions:
      '["AccessKubernetesApi","AssociateEncryptionConfig","AssociateIdentityProviderConfig","CreateAddon","CreateCluster","CreateFargateProfile","CreateNodegroup","DeleteAddon","DeleteCluster","DeleteFargateProfile","DeleteNodegroup","DeregisterCluster","DescribeAddon","DescribeAddonVersions","DescribeCluster","DescribeFargateProfile","DescribeIdentityProviderConfig","DescribeNodegroup","DescribeUpdate","DisassociateIdentityProviderConfig","ListAddons","ListClusters","ListFargateProfiles","ListIdentityProviderConfigs","ListNodegroups","ListTagsForResource","ListUpdates","RegisterCluster","TagResource","UntagResource","UpdateAddon","UpdateClusterConfig","UpdateClusterVersion","UpdateNodegroupConfig","UpdateNodegroupVersion"]',
    ARNFormat: "arn:aws:eks:${Region}:${Account}:${ResourceType}/${RelativeId}",
    ARNRegex: "^arn:aws:eks:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","eks:clientId","eks:issuerUrl"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelastickubernetesservice.html",
    ConsoleLink:
      "https://us-east-1.console.aws.amazon.com/eks/home?region=us-east-1#",
  },
  {
    ServiceShortName: "elasticmapreduce",
    ServiceName: "Amazon Elastic MapReduce",
    Actions:
      '["AddInstanceFleet","AddInstanceGroups","AddJobFlowSteps","AddTags","AttachEditor","CancelSteps","CreateEditor","CreatePersistentAppUI","CreateRepository","CreateSecurityConfiguration","CreateStudio","CreateStudioPresignedUrl","CreateStudioSessionMapping","DeleteEditor","DeleteRepository","DeleteSecurityConfiguration","DeleteStudio","DeleteStudioSessionMapping","DeleteWorkspaceAccess","DescribeCluster","DescribeEditor","DescribeJobFlows","DescribeNotebookExecution","DescribePersistentAppUI","DescribeReleaseLabel","DescribeRepository","DescribeSecurityConfiguration","DescribeStep","DescribeStudio","DetachEditor","GetAutoTerminationPolicy","GetBlockPublicAccessConfiguration","GetManagedScalingPolicy","GetOnClusterAppUIPresignedURL","GetPersistentAppUIPresignedURL","GetStudioSessionMapping","LinkRepository","ListBootstrapActions","ListClusters","ListEditors","ListInstanceFleets","ListInstanceGroups","ListInstances","ListNotebookExecutions","ListReleaseLabels","ListRepositories","ListSecurityConfigurations","ListSteps","ListStudioSessionMappings","ListStudios","ListWorkspaceAccessIdentities","ModifyCluster","ModifyInstanceFleet","ModifyInstanceGroups","OpenEditorInConsole","PutAutoScalingPolicy","PutAutoTerminationPolicy","PutBlockPublicAccessConfiguration","PutManagedScalingPolicy","PutWorkspaceAccess","RemoveAutoScalingPolicy","RemoveAutoTerminationPolicy","RemoveManagedScalingPolicy","RemoveTags","RunJobFlow","SetTerminationProtection","StartEditor","StartNotebookExecution","StopEditor","StopNotebookExecution","TerminateJobFlows","UnlinkRepository","UpdateEditor","UpdateRepository","UpdateStudio","UpdateStudioSessionMapping","ViewEventsFromAllClustersInConsole"]',
    ARNFormat:
      "arn:${Partition}:elasticmapreduce:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:elasticmapreduce:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","elasticmapreduce:RequestTag/${TagKey}","elasticmapreduce:ResourceTag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticmapreduce.html",
  },
  {
    ServiceShortName: "elastictranscoder",
    ServiceName: "Amazon Elastic Transcoder",
    Actions:
      '["CancelJob","CreateJob","CreatePipeline","CreatePreset","DeletePipeline","DeletePreset","ListJobsByPipeline","ListJobsByStatus","ListPipelines","ListPresets","ReadJob","ReadPipeline","ReadPreset","TestRole","UpdatePipeline","UpdatePipelineNotifications","UpdatePipelineStatus"]',
    ARNFormat:
      "arn:aws:elastictranscoder:<region>:<account>:<resourceType>/<resourceId>",
    ARNRegex: "^arn:aws:elastictranscoder:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelastictranscoder.html",
  },
  {
    ServiceShortName: "elasticache",
    ServiceName: "Amazon ElastiCache",
    Actions:
      '["AddTagsToResource","AuthorizeCacheSecurityGroupIngress","BatchApplyUpdateAction","BatchStopUpdateAction","CompleteMigration","CopySnapshot","CreateCacheCluster","CreateCacheParameterGroup","CreateCacheSecurityGroup","CreateCacheSubnetGroup","CreateGlobalReplicationGroup","CreateReplicationGroup","CreateSnapshot","CreateUser","CreateUserGroup","DecreaseNodeGroupsInGlobalReplicationGroup","DecreaseReplicaCount","DeleteCacheCluster","DeleteCacheParameterGroup","DeleteCacheSecurityGroup","DeleteCacheSubnetGroup","DeleteGlobalReplicationGroup","DeleteReplicationGroup","DeleteSnapshot","DeleteUser","DeleteUserGroup","DescribeCacheClusters","DescribeCacheEngineVersions","DescribeCacheParameterGroups","DescribeCacheParameters","DescribeCacheSecurityGroups","DescribeCacheSubnetGroups","DescribeEngineDefaultParameters","DescribeEvents","DescribeGlobalReplicationGroups","DescribeReplicationGroups","DescribeReservedCacheNodes","DescribeReservedCacheNodesOfferings","DescribeServiceUpdates","DescribeSnapshots","DescribeUpdateActions","DescribeUserGroups","DescribeUsers","DisassociateGlobalReplicationGroup","FailoverGlobalReplicationGroup","IncreaseNodeGroupsInGlobalReplicationGroup","IncreaseReplicaCount","ListAllowedNodeTypeModifications","ListTagsForResource","ModifyCacheCluster","ModifyCacheParameterGroup","ModifyCacheSubnetGroup","ModifyGlobalReplicationGroup","ModifyReplicationGroup","ModifyReplicationGroupShardConfiguration","ModifyUser","ModifyUserGroup","PurchaseReservedCacheNodesOffering","RebalanceSlotsInGlobalReplicationGroup","RebootCacheCluster","RemoveTagsFromResource","ResetCacheParameterGroup","RevokeCacheSecurityGroupIngress","StartMigration","TestFailover"]',
    ARNFormat:
      "arn:${Partition}:elasticache:${Region}:${AccountId}:${ResourceType}:${ResourceName}",
    ARNRegex: "^arn:.+:elasticache:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","elasticache:AtRestEncryptionEnabled","elasticache:AuthTokenEnabled","elasticache:AutomaticFailoverEnabled","elasticache:CacheNodeType","elasticache:CacheParameterGroupName","elasticache:ClusterModeEnabled","elasticache:EngineType","elasticache:EngineVersion","elasticache:KmsKeyId","elasticache:MultiAZEnabled","elasticache:NumNodeGroups","elasticache:ReplicasPerNodeGroup","elasticache:SnapshotRetentionLimit","elasticache:TransitEncryptionEnabled"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonelasticache.html",
  },
  {
    ServiceShortName: "emr-containers",
    ServiceName: "Amazon EMR on EKS (EMR Containers)",
    Actions:
      '["CancelJobRun","CreateManagedEndpoint","CreateVirtualCluster","DeleteManagedEndpoint","DeleteVirtualCluster","DescribeJobRun","DescribeManagedEndpoint","DescribeVirtualCluster","ListJobRuns","ListManagedEndpoints","ListTagsForResource","ListVirtualClusters","StartJobRun","TagResource","UntagResource"]',
    ARNFormat:
      "arn:${Partition}:emr-containers:${region}:${account}:/${resourceType}/${resourcePath}",
    ARNRegex: "^arn:${Partition}:emr-containers:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","emr-containers:ExecutionRoleArn"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonemroneksemrcontainers.html",
  },
  {
    ServiceShortName: "events",
    ServiceName: "Amazon EventBridge",
    Actions:
      '["ActivateEventSource","CancelReplay","CreateApiDestination","CreateArchive","CreateConnection","CreateEndpoint","CreateEventBus","CreatePartnerEventSource","DeactivateEventSource","DeauthorizeConnection","DeleteApiDestination","DeleteArchive","DeleteConnection","DeleteEndpoint","DeleteEventBus","DeletePartnerEventSource","DeleteRule","DescribeApiDestination","DescribeArchive","DescribeConnection","DescribeEndpoint","DescribeEventBus","DescribeEventSource","DescribePartnerEventSource","DescribeReplay","DescribeRule","DisableRule","EnableRule","InvokeApiDestination","ListApiDestinations","ListArchives","ListConnections","ListEndpoints","ListEventBuses","ListEventSources","ListPartnerEventSourceAccounts","ListPartnerEventSources","ListReplays","ListRuleNamesByTarget","ListRules","ListTagsForResource","ListTargetsByRule","PutEvents","PutPartnerEvents","PutPermission","PutRule","PutTargets","RemovePermission","RemoveTargets","StartReplay","TagResource","TestEventPattern","UntagResource","UpdateApiDestination","UpdateArchive","UpdateConnection","UpdateEndpoint"]',
    ARNFormat:
      "arn:aws:events:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:events:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:SourceAccount","aws:SourceArn","aws:TagKeys","events:EventBusArn","events:ManagedBy","events:TargetArn","events:creatorAccount","events:detail-type","events:detail.eventTypeCode","events:detail.service","events:detail.userIdentity.principalId","events:eventBusInvocation","events:source"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoneventbridge.html",
  },
  {
    ServiceShortName: "schemas",
    ServiceName: "Amazon EventBridge Schemas",
    Actions:
      '["CreateDiscoverer","CreateRegistry","CreateSchema","DeleteDiscoverer","DeleteRegistry","DeleteResourcePolicy","DeleteSchema","DeleteSchemaVersion","DescribeCodeBinding","DescribeDiscoverer","DescribeRegistry","DescribeSchema","ExportSchema","GetCodeBindingSource","GetDiscoveredSchema","GetResourcePolicy","ListDiscoverers","ListRegistries","ListSchemaVersions","ListSchemas","ListTagsForResource","PutCodeBinding","PutResourcePolicy","SearchSchemas","StartDiscoverer","StopDiscoverer","TagResource","UntagResource","UpdateDiscoverer","UpdateRegistry","UpdateSchema"]',
    ARNFormat:
      "arn:aws:schemas:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:schemas:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoneventbridgeschemas.html",
  },
  {
    ServiceShortName: "finspace",
    ServiceName: "Amazon FinSpace",
    Actions:
      '["CreateEnvironment","CreateUser","DeleteEnvironment","GetEnvironment","GetLoadSampleDataSetGroupIntoEnvironmentStatus","GetUser","ListEnvironments","ListTagsForResource","ListUsers","LoadSampleDataSetGroupIntoEnvironment","ResetUserPassword","TagResource","UntagResource","UpdateEnvironment","UpdateUser"]',
    ARNFormat:
      "arn:${Partition}:finspace:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:finspace:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfinspace.html",
  },
  {
    ServiceShortName: "forecast",
    ServiceName: "Amazon Forecast",
    Actions:
      '["CreateAutoPredictor","CreateDataset","CreateDatasetGroup","CreateDatasetImportJob","CreateExplainability","CreateExplainabilityExport","CreateForecast","CreateForecastExportJob","CreatePredictor","CreatePredictorBacktestExportJob","DeleteDataset","DeleteDatasetGroup","DeleteDatasetImportJob","DeleteExplainability","DeleteExplainabilityExport","DeleteForecast","DeleteForecastExportJob","DeletePredictor","DeletePredictorBacktestExportJob","DeleteResourceTree","DescribeAutoPredictor","DescribeDataset","DescribeDatasetGroup","DescribeDatasetImportJob","DescribeExplainability","DescribeExplainabilityExport","DescribeForecast","DescribeForecastExportJob","DescribePredictor","DescribePredictorBacktestExportJob","GetAccuracyMetrics","ListDatasetGroups","ListDatasetImportJobs","ListDatasets","ListExplainabilities","ListExplainabilityExports","ListForecastExportJobs","ListForecasts","ListPredictorBacktestExportJobs","ListPredictors","ListTagsForResource","QueryForecast","StopResource","TagResource","UntagResource","UpdateDatasetGroup"]',
    ARNFormat:
      "arn:aws:forecast:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:forecast:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonforecast.html",
  },
  {
    ServiceShortName: "frauddetector",
    ServiceName: "Amazon Fraud Detector",
    Actions:
      '["BatchCreateVariable","BatchGetVariable","CancelBatchImportJob","CancelBatchPredictionJob","CreateBatchImportJob","CreateBatchPredictionJob","CreateDetectorVersion","CreateModel","CreateModelVersion","CreateRule","CreateVariable","DeleteBatchImportJob","DeleteBatchPredictionJob","DeleteDetector","DeleteDetectorVersion","DeleteEntityType","DeleteEvent","DeleteEventType","DeleteEventsByEventType","DeleteExternalModel","DeleteLabel","DeleteModel","DeleteModelVersion","DeleteOutcome","DeleteRule","DeleteVariable","DescribeDetector","DescribeModelVersions","GetBatchImportJobs","GetBatchPredictionJobs","GetDeleteEventsByEventTypeStatus","GetDetectorVersion","GetDetectors","GetEntityTypes","GetEvent","GetEventPrediction","GetEventPredictionMetadata","GetEventTypes","GetExternalModels","GetKMSEncryptionKey","GetLabels","GetModelVersion","GetModels","GetOutcomes","GetRules","GetVariables","ListEventPredictions","ListTagsForResource","PutDetector","PutEntityType","PutEventType","PutExternalModel","PutKMSEncryptionKey","PutLabel","PutOutcome","SendEvent","TagResource","UntagResource","UpdateDetectorVersion","UpdateDetectorVersionMetadata","UpdateDetectorVersionStatus","UpdateEventLabel","UpdateModel","UpdateModelVersion","UpdateModelVersionStatus","UpdateRuleMetadata","UpdateRuleVersion","UpdateVariable"]',
    ARNFormat:
      "arn:aws:frauddetector:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:.+:frauddetector:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfrauddetector.html",
  },
  {
    ServiceShortName: "freertos",
    ServiceName: "Amazon FreeRTOS",
    Actions:
      '["CreateSoftwareConfiguration","DeleteSoftwareConfiguration","DescribeHardwarePlatform","DescribeSoftwareConfiguration","GetSoftwareURL","GetSoftwareURLForConfiguration","ListFreeRTOSVersions","ListHardwarePlatforms","ListHardwareVendors","ListSoftwareConfigurations","UpdateSoftwareConfiguration"]',
    ARNFormat: "arn:${Partition}:freertos:${Region}:${Account}:${Type}/${Name}",
    ARNRegex: "^arn:${Partition}:freertos:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfreertos.html",
  },
  {
    ServiceShortName: "fsx",
    ServiceName: "Amazon FSx",
    Actions:
      '["AssociateFileGateway","AssociateFileSystemAliases","CancelDataRepositoryTask","CopyBackup","CreateBackup","CreateDataRepositoryAssociation","CreateDataRepositoryTask","CreateFileSystem","CreateFileSystemFromBackup","CreateSnapshot","CreateStorageVirtualMachine","CreateVolume","CreateVolumeFromBackup","DeleteBackup","DeleteDataRepositoryAssociation","DeleteFileSystem","DeleteSnapshot","DeleteStorageVirtualMachine","DeleteVolume","DescribeAssociatedFileGateways","DescribeBackups","DescribeDataRepositoryAssociations","DescribeDataRepositoryTasks","DescribeFileSystemAliases","DescribeFileSystems","DescribeSnapshots","DescribeStorageVirtualMachines","DescribeVolumes","DisassociateFileGateway","DisassociateFileSystemAliases","ListTagsForResource","ManageBackupPrincipalAssociations","ReleaseFileSystemNfsV3Locks","RestoreVolumeFromSnapshot","TagResource","UntagResource","UpdateDataRepositoryAssociation","UpdateFileSystem","UpdateSnapshot","UpdateStorageVirtualMachine","UpdateVolume"]',
    ARNFormat:
      "arn:${Partition}:fsx:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:fsx:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","fsx:IsBackupCopyDestination","fsx:IsBackupCopySource","fsx:ParentVolumeId","fsx:StorageVirtualMachineId"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonfsx.html",
  },
  {
    ServiceShortName: "gamelift",
    ServiceName: "Amazon GameLift",
    Actions:
      '["AcceptMatch","ClaimGameServer","CreateAlias","CreateBuild","CreateFleet","CreateFleetLocations","CreateGameServerGroup","CreateGameSession","CreateGameSessionQueue","CreateMatchmakingConfiguration","CreateMatchmakingRuleSet","CreatePlayerSession","CreatePlayerSessions","CreateScript","CreateVpcPeeringAuthorization","CreateVpcPeeringConnection","DeleteAlias","DeleteBuild","DeleteFleet","DeleteFleetLocations","DeleteGameServerGroup","DeleteGameSessionQueue","DeleteMatchmakingConfiguration","DeleteMatchmakingRuleSet","DeleteScalingPolicy","DeleteScript","DeleteVpcPeeringAuthorization","DeleteVpcPeeringConnection","DeregisterGameServer","DescribeAlias","DescribeBuild","DescribeEC2InstanceLimits","DescribeFleetAttributes","DescribeFleetCapacity","DescribeFleetEvents","DescribeFleetLocationAttributes","DescribeFleetLocationCapacity","DescribeFleetLocationUtilization","DescribeFleetPortSettings","DescribeFleetUtilization","DescribeGameServer","DescribeGameServerGroup","DescribeGameServerInstances","DescribeGameSessionDetails","DescribeGameSessionPlacement","DescribeGameSessionQueues","DescribeGameSessions","DescribeInstances","DescribeMatchmaking","DescribeMatchmakingConfigurations","DescribeMatchmakingRuleSets","DescribePlayerSessions","DescribeRuntimeConfiguration","DescribeScalingPolicies","DescribeScript","DescribeVpcPeeringAuthorizations","DescribeVpcPeeringConnections","GetGameSessionLogUrl","GetInstanceAccess","ListAliases","ListBuilds","ListFleets","ListGameServerGroups","ListGameServers","ListScripts","ListTagsForResource","PutScalingPolicy","RegisterGameServer","RequestUploadCredentials","ResolveAlias","ResumeGameServerGroup","SearchGameSessions","StartFleetActions","StartGameSessionPlacement","StartMatchBackfill","StartMatchmaking","StopFleetActions","StopGameSessionPlacement","StopMatchmaking","SuspendGameServerGroup","TagResource","UntagResource","UpdateAlias","UpdateBuild","UpdateFleetAttributes","UpdateFleetCapacity","UpdateFleetPortSettings","UpdateGameServer","UpdateGameServerGroup","UpdateGameSession","UpdateGameSessionQueue","UpdateMatchmakingConfiguration","UpdateRuntimeConfiguration","UpdateScript","ValidateMatchmakingRuleSet"]',
    ARNFormat:
      "arn:aws:gamelift:${Region}:${AccountId}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:gamelift:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongamelift.html",
  },
  {
    ServiceShortName: "gamesparks",
    ServiceName: "Amazon GameSparks",
    Actions:
      '["CreateGame","CreateSnapshot","CreateStage","DeleteGame","DeleteStage","DisconnectPlayer","ExportSnapshot","GetExtension","GetExtensionVersion","GetGame","GetGameConfiguration","GetGeneratedCodeJob","GetPlayerConnectionStatus","GetSnapshot","GetStage","GetStageDeployment","ImportGameConfiguration","InvokeBackend","ListExtensionVersions","ListExtensions","ListGames","ListGeneratedCodeJobs","ListSnapshots","ListStageDeployments","ListStages","ListTagsForResource","StartGeneratedCodeJob","StartStageDeployment","TagResource","UntagResource","UpdateGame","UpdateGameConfiguration","UpdateSnapshot","UpdateStage"]',
    ARNFormat:
      "arn:aws:gamesparks:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:gamesparks:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongamesparks.html",
  },
  {
    ServiceShortName: "groundtruthlabeling",
    ServiceName: "Amazon GroundTruth Labeling",
    Actions:
      '["AssociatePatchToManifestJob","DescribeConsoleJob","ListDatasetObjects","RunFilterOrSampleDatasetJob","RunGenerateManifestByCrawlingJob"]',
    ARNFormat:
      "arn:${Partition}:groundtruthlabeling:${region}:${account}:${resourceType}/${resourcePath}",
    ARNRegex: "^arn:${Partition}:groundtruthlabeling:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazongroundtruthlabeling.html",
  },
  {
    ServiceShortName: "guardduty",
    ServiceName: "Amazon GuardDuty",
    Actions:
      '["AcceptInvitation","ArchiveFindings","CreateDetector","CreateFilter","CreateIPSet","CreateMembers","CreatePublishingDestination","CreateSampleFindings","CreateThreatIntelSet","DeclineInvitations","DeleteDetector","DeleteFilter","DeleteIPSet","DeleteInvitations","DeleteMembers","DeletePublishingDestination","DeleteThreatIntelSet","DescribeOrganizationConfiguration","DescribePublishingDestination","DisableOrganizationAdminAccount","DisassociateFromMasterAccount","DisassociateMembers","EnableOrganizationAdminAccount","GetDetector","GetFilter","GetFindings","GetFindingsStatistics","GetIPSet","GetInvitationsCount","GetMasterAccount","GetMemberDetectors","GetMembers","GetThreatIntelSet","GetUsageStatistics","InviteMembers","ListDetectors","ListFilters","ListFindings","ListIPSets","ListInvitations","ListMembers","ListOrganizationAdminAccounts","ListPublishingDestinations","ListTagsForResource","ListThreatIntelSets","StartMonitoringMembers","StopMonitoringMembers","TagResource","UnarchiveFindings","UntagResource","UpdateDetector","UpdateFilter","UpdateFindingsFeedback","UpdateIPSet","UpdateMemberDetectors","UpdateOrganizationConfiguration","UpdatePublishingDestination","UpdateThreatIntelSet"]',
    ARNFormat: "arn:${Partition}:guardduty:${Region}:${Account}:.+",
    ARNRegex: "^arn:${Partition}:guardduty:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonguardduty.html",
  },
  {
    ServiceShortName: "healthlake",
    ServiceName: "Amazon HealthLake",
    Actions:
      '["CreateFHIRDatastore","CreateResource","DeleteFHIRDatastore","DeleteResource","DescribeFHIRDatastore","DescribeFHIRExportJob","DescribeFHIRImportJob","GetCapabilities","ListFHIRDatastores","ListFHIRExportJobs","ListFHIRImportJobs","ListTagsForResource","ReadResource","SearchWithGet","SearchWithPost","StartFHIRExportJob","StartFHIRImportJob","TagResource","UntagResource","UpdateResource"]',
    ARNFormat:
      "arn:${Partition}:healthlake:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:healthlake:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonhealthlake.html",
  },
  {
    ServiceShortName: "honeycode",
    ServiceName: "Amazon Honeycode",
    Actions:
      '["ApproveTeamAssociation","BatchCreateTableRows","BatchDeleteTableRows","BatchUpdateTableRows","BatchUpsertTableRows","CreateTeam","CreateTenant","DeleteDomains","DeregisterGroups","DescribeTableDataImportJob","DescribeTeam","GetScreenData","InvokeScreenAutomation","ListDomains","ListGroups","ListTableColumns","ListTableRows","ListTables","ListTagsForResource","ListTeamAssociations","ListTenants","QueryTableRows","RegisterDomainForVerification","RegisterGroups","RejectTeamAssociation","RestartDomainVerification","StartTableDataImportJob","TagResource","UntagResource","UpdateTeam"]',
    ARNFormat:
      "arn:aws:honeycode:${Region}:${Account}:${ResourceType}:${ResourcePath}",
    ARNRegex: "^arn:aws:honeycode:.+:.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonhoneycode.html",
  },
  {
    ServiceShortName: "inspector",
    ServiceName: "Amazon Inspector",
    Actions:
      '["AddAttributesToFindings","CreateAssessmentTarget","CreateAssessmentTemplate","CreateExclusionsPreview","CreateResourceGroup","DeleteAssessmentRun","DeleteAssessmentTarget","DeleteAssessmentTemplate","DescribeAssessmentRuns","DescribeAssessmentTargets","DescribeAssessmentTemplates","DescribeCrossAccountAccessRole","DescribeExclusions","DescribeFindings","DescribeResourceGroups","DescribeRulesPackages","GetAssessmentReport","GetExclusionsPreview","GetTelemetryMetadata","ListAssessmentRunAgents","ListAssessmentRuns","ListAssessmentTargets","ListAssessmentTemplates","ListEventSubscriptions","ListExclusions","ListFindings","ListRulesPackages","ListTagsForResource","PreviewAgents","RegisterCrossAccountAccessRole","RemoveAttributesFromFindings","SetTagsForResource","StartAssessmentRun","StopAssessmentRun","SubscribeToEvent","UnsubscribeFromEvent","UpdateAssessmentTarget"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninspector.html",
  },
  {
    ServiceShortName: "inspector2",
    ServiceName: "Amazon Inspector2",
    Actions:
      '["AssociateMember","BatchGetAccountStatus","BatchGetFreeTrialInfo","CancelFindingsReport","CreateFilter","CreateFindingsReport","DeleteFilter","DescribeOrganizationConfiguration","Disable","DisableDelegatedAdminAccount","DisassociateMember","Enable","EnableDelegatedAdminAccount","GetDelegatedAdminAccount","GetFindingsReportStatus","GetMember","ListAccountPermissions","ListCoverage","ListCoverageStatistics","ListDelegatedAdminAccounts","ListFilters","ListFindingAggregations","ListFindings","ListMembers","ListTagsForResource","ListUsageTotals","TagResource","UntagResource","UpdateFilter","UpdateOrganizationConfiguration"]',
    ARNFormat: "arn:aws:inspector2:${Region}:${Account}:.+",
    ARNRegex: "^arn:aws:inspector2:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninspector2.html",
  },
  {
    ServiceShortName: "ivs",
    ServiceName: "Amazon Interactive Video Service",
    Actions:
      '["BatchGetChannel","BatchGetStreamKey","CreateChannel","CreateRecordingConfiguration","CreateStreamKey","DeleteChannel","DeletePlaybackKeyPair","DeleteRecordingConfiguration","DeleteStreamKey","GetChannel","GetPlaybackKeyPair","GetRecordingConfiguration","GetStream","GetStreamKey","GetStreamSession","ImportPlaybackKeyPair","ListChannels","ListPlaybackKeyPairs","ListRecordingConfigurations","ListStreamKeys","ListStreamSessions","ListStreams","ListTagsForResource","PutMetadata","StopStream","TagResource","UntagResource","UpdateChannel"]',
    ARNFormat: "arn:aws:ivs:${Region}:${AccountId}:${ArnType}/${ResourceId}",
    ARNRegex: "^arn:aws:ivs:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninteractivevideoservice.html",
  },
  {
    ServiceShortName: "ivschat",
    ServiceName: "Amazon Interactive Video Service Chat",
    Actions:
      '["CreateChatToken","CreateRoom","DeleteMessage","DeleteRoom","DisconnectUser","GetRoom","ListRooms","ListTagsForResource","SendEvent","TagResource","UntagResource","UpdateRoom"]',
    ARNFormat:
      "arn:aws:ivschat:${Region}:${AccountId}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:ivschat:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoninteractivevideoservicechat.html",
  },
  {
    ServiceShortName: "kendra",
    ServiceName: "Amazon Kendra",
    Actions:
      '["AssociateEntitiesToExperience","AssociatePersonasToEntities","BatchDeleteDocument","BatchGetDocumentStatus","BatchPutDocument","ClearQuerySuggestions","CreateDataSource","CreateExperience","CreateFaq","CreateIndex","CreateQuerySuggestionsBlockList","CreateThesaurus","DeleteDataSource","DeleteExperience","DeleteFaq","DeleteIndex","DeletePrincipalMapping","DeleteQuerySuggestionsBlockList","DeleteThesaurus","DescribeDataSource","DescribeExperience","DescribeFaq","DescribeIndex","DescribePrincipalMapping","DescribeQuerySuggestionsBlockList","DescribeQuerySuggestionsConfig","DescribeThesaurus","DisassociateEntitiesFromExperience","DisassociatePersonasFromEntities","GetQuerySuggestions","GetSnapshots","ListDataSourceSyncJobs","ListDataSources","ListEntityPersonas","ListExperienceEntities","ListExperiences","ListFaqs","ListGroupsOlderThanOrderingId","ListIndices","ListQuerySuggestionsBlockLists","ListTagsForResource","ListThesauri","PutPrincipalMapping","Query","StartDataSourceSyncJob","StopDataSourceSyncJob","SubmitFeedback","TagResource","UntagResource","UpdateDataSource","UpdateExperience","UpdateIndex","UpdateQuerySuggestionsBlockList","UpdateQuerySuggestionsConfig","UpdateThesaurus"]',
    ARNFormat:
      "arn:${Partition}:kendra:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:kendra:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkendra.html",
  },
  {
    ServiceShortName: "cassandra",
    ServiceName: "Amazon Keyspaces (for Apache Cassandra)",
    Actions:
      '["Alter","Create","Drop","Modify","Restore","Select","TagResource","UntagResource","UpdatePartitioner"]',
    ARNFormat:
      "arn:${Partition}:cassandra:${Region}:${Account}:/${ResourceType}/${ResourcePath}/",
    ARNRegex: "^arn:${Partition}:cassandra:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkeyspacesforapachecassandra.html",
  },
  {
    ServiceShortName: "kinesis",
    ServiceName: "Amazon Kinesis",
    Actions:
      '["AddTagsToStream","CreateStream","DecreaseStreamRetentionPeriod","DeleteStream","DeregisterStreamConsumer","DescribeLimits","DescribeStream","DescribeStreamConsumer","DescribeStreamSummary","DisableEnhancedMonitoring","EnableEnhancedMonitoring","GetRecords","GetShardIterator","IncreaseStreamRetentionPeriod","ListShards","ListStreamConsumers","ListStreams","ListTagsForStream","MergeShards","PutRecord","PutRecords","RegisterStreamConsumer","RemoveTagsFromStream","SplitShard","StartStreamEncryption","StopStreamEncryption","SubscribeToShard","UpdateShardCount","UpdateStreamMode"]',
    ARNFormat:
      "arn:${Partition}:kinesis:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:kinesis:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesis.html",
  },
  {
    ServiceShortName: "kinesisanalytics",
    ServiceName: "Amazon Kinesis Analytics",
    Actions:
      '["AddApplicationInput","AddApplicationOutput","AddApplicationReferenceDataSource","CreateApplication","DeleteApplication","DeleteApplicationOutput","DeleteApplicationReferenceDataSource","DescribeApplication","DiscoverInputSchema","GetApplicationState","ListApplications","ListTagsForResource","StartApplication","StopApplication","TagResource","UntagResource","UpdateApplication"]',
    ARNFormat:
      "arn:aws:kinesisanalytics:<region>:<account_ID>:application/<applicationname>",
    ARNRegex: "^arn:aws:kinesisanalytics:.+:[0-9]+:application/[a-zA-Z0-9_.-]+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalytics.html",
  },
  {
    ServiceShortName: "kinesisanalytics",
    ServiceName: "Amazon Kinesis Analytics V2",
    Actions:
      '["AddApplicationCloudWatchLoggingOption","AddApplicationInput","AddApplicationInputProcessingConfiguration","AddApplicationOutput","AddApplicationReferenceDataSource","AddApplicationVpcConfiguration","CreateApplication","CreateApplicationPresignedUrl","CreateApplicationSnapshot","DeleteApplication","DeleteApplicationCloudWatchLoggingOption","DeleteApplicationInputProcessingConfiguration","DeleteApplicationOutput","DeleteApplicationReferenceDataSource","DeleteApplicationSnapshot","DeleteApplicationVpcConfiguration","DescribeApplication","DescribeApplicationSnapshot","DescribeApplicationVersion","DiscoverInputSchema","ListApplicationSnapshots","ListApplicationVersions","ListApplications","ListTagsForResource","RollbackApplication","StartApplication","StopApplication","TagResource","UntagResource","UpdateApplication","UpdateApplicationMaintenanceConfiguration"]',
    ARNFormat:
      "arn:aws:kinesisanalytics:<region>:<account_ID>:application/<applicationname>",
    ARNRegex: "^arn:aws:kinesisanalytics:.+:[0-9]+:application/[a-zA-Z0-9_.-]+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisanalyticsv2.html",
  },
  {
    ServiceShortName: "firehose",
    ServiceName: "Amazon Kinesis Firehose",
    Actions:
      '["CreateDeliveryStream","DeleteDeliveryStream","DescribeDeliveryStream","ListDeliveryStreams","ListTagsForDeliveryStream","PutRecord","PutRecordBatch","StartDeliveryStreamEncryption","StopDeliveryStreamEncryption","TagDeliveryStream","UntagDeliveryStream","UpdateDestination"]',
    ARNFormat:
      "arn:aws:firehose:{Region}:{Account}:deliverystream/${DeliveryStreamName}",
    ARNRegex: "^arn:aws:firehose:.+:[0-9]+:deliverystream/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisfirehose.html",
  },
  {
    ServiceShortName: "kinesisvideo",
    ServiceName: "Amazon Kinesis Video Streams",
    Actions:
      '["ConnectAsMaster","ConnectAsViewer","CreateSignalingChannel","CreateStream","DeleteSignalingChannel","DeleteStream","DescribeSignalingChannel","DescribeStream","GetClip","GetDASHStreamingSessionURL","GetDataEndpoint","GetHLSStreamingSessionURL","GetIceServerConfig","GetMedia","GetMediaForFragmentList","GetSignalingChannelEndpoint","ListFragments","ListSignalingChannels","ListStreams","ListTagsForResource","ListTagsForStream","PutMedia","SendAlexaOfferToMaster","TagResource","TagStream","UntagResource","UntagStream","UpdateDataRetention","UpdateSignalingChannel","UpdateStream"]',
    ARNFormat:
      "arn:aws:kinesisvideo:${Region}:${Account}:${ResourceType}/${ResourceName}/${CreationTime}",
    ARNRegex: "^arn:aws:kinesisvideo:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonkinesisvideostreams.html",
  },
  {
    ServiceShortName: "lex",
    ServiceName: "Amazon Lex",
    Actions:
      '["CreateBotVersion","CreateIntentVersion","CreateSlotTypeVersion","DeleteBot","DeleteBotAlias","DeleteBotChannelAssociation","DeleteBotVersion","DeleteIntent","DeleteIntentVersion","DeleteSession","DeleteSlotType","DeleteSlotTypeVersion","DeleteUtterances","GetBot","GetBotAlias","GetBotAliases","GetBotChannelAssociation","GetBotChannelAssociations","GetBotVersions","GetBots","GetBuiltinIntent","GetBuiltinIntents","GetBuiltinSlotTypes","GetExport","GetImport","GetIntent","GetIntentVersions","GetIntents","GetMigration","GetMigrations","GetSession","GetSlotType","GetSlotTypeVersions","GetSlotTypes","GetUtterancesView","ListTagsForResource","PostContent","PostText","PutBot","PutBotAlias","PutIntent","PutSession","PutSlotType","StartImport","StartMigration","TagResource","UntagResource"]',
    ARNFormat: "arn:aws:lex:${Region}:${Account}:${Type}:${Name}",
    ARNRegex: "^arn:aws:lex:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","lex:associatedIntents","lex:associatedSlotTypes","lex:channelType"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlex.html",
  },
  {
    ServiceShortName: "lex",
    ServiceName: "Amazon Lex V2",
    Actions:
      '["BuildBotLocale","CreateBot","CreateBotAlias","CreateBotChannel","CreateBotLocale","CreateBotVersion","CreateCustomVocabulary","CreateExport","CreateIntent","CreateResourcePolicy","CreateSlot","CreateSlotType","CreateUploadUrl","DeleteBot","DeleteBotAlias","DeleteBotChannel","DeleteBotLocale","DeleteBotVersion","DeleteCustomVocabulary","DeleteExport","DeleteImport","DeleteIntent","DeleteResourcePolicy","DeleteSession","DeleteSlot","DeleteSlotType","DeleteUtterances","DescribeBot","DescribeBotAlias","DescribeBotChannel","DescribeBotLocale","DescribeBotRecommendation","DescribeBotVersion","DescribeCustomVocabulary","DescribeCustomVocabularyMetadata","DescribeExport","DescribeImport","DescribeIntent","DescribeResourcePolicy","DescribeSlot","DescribeSlotType","GetSession","ListAggregatedUtterances","ListBotAliases","ListBotChannels","ListBotLocales","ListBotRecommendations","ListBotVersions","ListBots","ListBuiltInIntents","ListBuiltInSlotTypes","ListExports","ListImports","ListIntents","ListRecommendedIntents","ListSlotTypes","ListSlots","ListTagsForResource","PutSession","RecognizeText","RecognizeUtterance","SearchAssociatedTranscripts","StartBotRecommendation","StartConversation","StartImport","TagResource","UntagResource","UpdateBot","UpdateBotAlias","UpdateBotLocale","UpdateBotRecommendation","UpdateCustomVocabulary","UpdateExport","UpdateIntent","UpdateResourcePolicy","UpdateSlot","UpdateSlotType"]',
    ARNFormat: "arn:aws:lex:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:lex:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlexv2.html",
  },
  {
    ServiceShortName: "lightsail",
    ServiceName: "Amazon Lightsail",
    Actions:
      '["AllocateStaticIp","AttachCertificateToDistribution","AttachDisk","AttachInstancesToLoadBalancer","AttachLoadBalancerTlsCertificate","AttachStaticIp","CloseInstancePublicPorts","CopySnapshot","CreateBucket","CreateBucketAccessKey","CreateCertificate","CreateCloudFormationStack","CreateContactMethod","CreateContainerService","CreateContainerServiceDeployment","CreateContainerServiceRegistryLogin","CreateDisk","CreateDiskFromSnapshot","CreateDiskSnapshot","CreateDistribution","CreateDomain","CreateDomainEntry","CreateInstanceSnapshot","CreateInstances","CreateInstancesFromSnapshot","CreateKeyPair","CreateLoadBalancer","CreateLoadBalancerTlsCertificate","CreateRelationalDatabase","CreateRelationalDatabaseFromSnapshot","CreateRelationalDatabaseSnapshot","DeleteAlarm","DeleteAutoSnapshot","DeleteBucket","DeleteBucketAccessKey","DeleteCertificate","DeleteContactMethod","DeleteContainerImage","DeleteContainerService","DeleteDisk","DeleteDiskSnapshot","DeleteDistribution","DeleteDomain","DeleteDomainEntry","DeleteInstance","DeleteInstanceSnapshot","DeleteKeyPair","DeleteKnownHostKeys","DeleteLoadBalancer","DeleteLoadBalancerTlsCertificate","DeleteRelationalDatabase","DeleteRelationalDatabaseSnapshot","DetachCertificateFromDistribution","DetachDisk","DetachInstancesFromLoadBalancer","DetachStaticIp","DisableAddOn","DownloadDefaultKeyPair","EnableAddOn","ExportSnapshot","GetActiveNames","GetAlarms","GetAutoSnapshots","GetBlueprints","GetBucketAccessKeys","GetBucketBundles","GetBucketMetricData","GetBuckets","GetBundles","GetCertificates","GetCloudFormationStackRecords","GetContactMethods","GetContainerAPIMetadata","GetContainerImages","GetContainerLog","GetContainerServiceDeployments","GetContainerServiceMetricData","GetContainerServicePowers","GetContainerServices","GetDisk","GetDiskSnapshot","GetDiskSnapshots","GetDisks","GetDistributionBundles","GetDistributionLatestCacheReset","GetDistributionMetricData","GetDistributions","GetDomain","GetDomains","GetExportSnapshotRecords","GetInstance","GetInstanceAccessDetails","GetInstanceMetricData","GetInstancePortStates","GetInstanceSnapshot","GetInstanceSnapshots","GetInstanceState","GetInstances","GetKeyPair","GetKeyPairs","GetLoadBalancer","GetLoadBalancerMetricData","GetLoadBalancerTlsCertificates","GetLoadBalancers","GetOperation","GetOperations","GetOperationsForResource","GetRegions","GetRelationalDatabase","GetRelationalDatabaseBlueprints","GetRelationalDatabaseBundles","GetRelationalDatabaseEvents","GetRelationalDatabaseLogEvents","GetRelationalDatabaseLogStreams","GetRelationalDatabaseMasterUserPassword","GetRelationalDatabaseMetricData","GetRelationalDatabaseParameters","GetRelationalDatabaseSnapshot","GetRelationalDatabaseSnapshots","GetRelationalDatabases","GetStaticIp","GetStaticIps","ImportKeyPair","IsVpcPeered","OpenInstancePublicPorts","PeerVpc","PutAlarm","PutInstancePublicPorts","RebootInstance","RebootRelationalDatabase","RegisterContainerImage","ReleaseStaticIp","ResetDistributionCache","SendContactMethodVerification","SetIpAddressType","SetResourceAccessForBucket","StartInstance","StartRelationalDatabase","StopInstance","StopRelationalDatabase","TagResource","TestAlarm","UnpeerVpc","UntagResource","UpdateBucket","UpdateBucketBundle","UpdateContainerService","UpdateDistribution","UpdateDistributionBundle","UpdateDomainEntry","UpdateLoadBalancerAttribute","UpdateRelationalDatabase","UpdateRelationalDatabaseParameters"]',
    ARNFormat: "arn:aws:lightsail:${Region}:${Account}:${ResourceType}/${Id}",
    ARNRegex: "^arn:aws:lightsail:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlightsail.html",
  },
  {
    ServiceShortName: "geo",
    ServiceName: "Amazon Location",
    Actions:
      '["AssociateTrackerConsumer","BatchDeleteDevicePositionHistory","BatchDeleteGeofence","BatchEvaluateGeofences","BatchGetDevicePosition","BatchPutGeofence","BatchUpdateDevicePosition","CalculateRoute","CalculateRouteMatrix","CreateGeofenceCollection","CreateMap","CreatePlaceIndex","CreateRouteCalculator","CreateTracker","DeleteGeofenceCollection","DeleteMap","DeletePlaceIndex","DeleteRouteCalculator","DeleteTracker","DescribeGeofenceCollection","DescribeMap","DescribePlaceIndex","DescribeRouteCalculator","DescribeTracker","DisassociateTrackerConsumer","GetDevicePosition","GetDevicePositionHistory","GetGeofence","GetMapGlyphs","GetMapSprites","GetMapStyleDescriptor","GetMapTile","ListDevicePositions","ListGeofenceCollections","ListGeofences","ListMaps","ListPlaceIndexes","ListRouteCalculators","ListTagsForResource","ListTrackerConsumers","ListTrackers","PutGeofence","SearchPlaceIndexForPosition","SearchPlaceIndexForSuggestions","SearchPlaceIndexForText","TagResource","UntagResource","UpdateGeofenceCollection","UpdateMap","UpdatePlaceIndex","UpdateRouteCalculator","UpdateTracker"]',
    ARNFormat:
      "arn:${Partition}:geo:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:geo:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlocation.html",
  },
  {
    ServiceShortName: "lookoutequipment",
    ServiceName: "Amazon Lookout for Equipment",
    Actions:
      '["CreateDataset","CreateInferenceScheduler","CreateModel","DeleteDataset","DeleteInferenceScheduler","DeleteModel","DescribeDataIngestionJob","DescribeDataset","DescribeInferenceScheduler","DescribeModel","ListDataIngestionJobs","ListDatasets","ListInferenceExecutions","ListInferenceSchedulers","ListModels","ListSensorStatistics","ListTagsForResource","StartDataIngestionJob","StartInferenceScheduler","StopInferenceScheduler","TagResource","UntagResource","UpdateInferenceScheduler"]',
    ARNFormat:
      "arn:aws:lookoutequipment:${Region}:${AccountId}:${ResourceType}/${ResourceName}/${ResourceId}",
    ARNRegex: "^arn:aws:lookoutequipment:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlookoutforequipment.html",
  },
  {
    ServiceShortName: "lookoutmetrics",
    ServiceName: "Amazon Lookout for Metrics",
    Actions:
      '["ActivateAnomalyDetector","BackTestAnomalyDetector","CreateAlert","CreateAnomalyDetector","CreateMetricSet","DeactivateAnomalyDetector","DeleteAlert","DeleteAnomalyDetector","DescribeAlert","DescribeAnomalyDetectionExecutions","DescribeAnomalyDetector","DescribeMetricSet","DetectMetricSetConfig","GetAnomalyGroup","GetDataQualityMetrics","GetFeedback","GetSampleData","ListAlerts","ListAnomalyDetectors","ListAnomalyGroupRelatedMetrics","ListAnomalyGroupSummaries","ListAnomalyGroupTimeSeries","ListMetricSets","ListTagsForResource","PutFeedback","TagResource","UntagResource","UpdateAnomalyDetector","UpdateMetricSet"]',
    ARNFormat:
      "arn:${Partition}:lookoutmetrics:${Region}:${AccountId}:${ResourceType}:${ResourceName}",
    ARNRegex: "^arn:${Partition}:lookoutmetrics:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlookoutformetrics.html",
  },
  {
    ServiceShortName: "lookoutvision",
    ServiceName: "Amazon Lookout for Vision",
    Actions:
      '["CreateDataset","CreateModel","CreateProject","DeleteDataset","DeleteModel","DeleteProject","DescribeDataset","DescribeModel","DescribeModelPackagingJob","DescribeProject","DescribeTrialDetection","DetectAnomalies","ListDatasetEntries","ListModelPackagingJobs","ListModels","ListProjects","ListTagsForResource","ListTrialDetections","StartModel","StartModelPackagingJob","StartTrialDetection","StopModel","TagResource","UntagResource","UpdateDatasetEntries"]',
    ARNFormat:
      "arn:aws:lookoutvision:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:lookoutvision:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonlookoutforvision.html",
  },
  {
    ServiceShortName: "machinelearning",
    ServiceName: "Amazon Machine Learning",
    Actions:
      '["AddTags","CreateBatchPrediction","CreateDataSourceFromRDS","CreateDataSourceFromRedshift","CreateDataSourceFromS3","CreateEvaluation","CreateMLModel","CreateRealtimeEndpoint","DeleteBatchPrediction","DeleteDataSource","DeleteEvaluation","DeleteMLModel","DeleteRealtimeEndpoint","DeleteTags","DescribeBatchPredictions","DescribeDataSources","DescribeEvaluations","DescribeMLModels","DescribeTags","GetBatchPrediction","GetDataSource","GetEvaluation","GetMLModel","Predict","UpdateBatchPrediction","UpdateDataSource","UpdateEvaluation","UpdateMLModel"]',
    ARNFormat:
      "arn:aws:machinelearning:<region>:<account_ID>:<resource_type>/<relative_ID>",
    ARNRegex: "^arn:aws:machinelearning:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmachinelearning.html",
  },
  {
    ServiceShortName: "macie2",
    ServiceName: "Amazon Macie",
    Actions:
      '["AcceptInvitation","BatchGetCustomDataIdentifiers","CreateClassificationJob","CreateCustomDataIdentifier","CreateFindingsFilter","CreateInvitations","CreateMember","CreateSampleFindings","DeclineInvitations","DeleteCustomDataIdentifier","DeleteFindingsFilter","DeleteInvitations","DeleteMember","DescribeBuckets","DescribeClassificationJob","DescribeOrganizationConfiguration","DisableMacie","DisableOrganizationAdminAccount","DisassociateFromAdministratorAccount","DisassociateFromMasterAccount","DisassociateMember","EnableMacie","EnableOrganizationAdminAccount","GetAdministratorAccount","GetBucketStatistics","GetClassificationExportConfiguration","GetCustomDataIdentifier","GetFindingStatistics","GetFindings","GetFindingsFilter","GetFindingsPublicationConfiguration","GetInvitationsCount","GetMacieSession","GetMasterAccount","GetMember","GetUsageStatistics","GetUsageTotals","ListClassificationJobs","ListCustomDataIdentifiers","ListFindings","ListFindingsFilters","ListInvitations","ListManagedDataIdentifiers","ListMembers","ListOrganizationAdminAccounts","ListTagsForResource","PutClassificationExportConfiguration","PutFindingsPublicationConfiguration","SearchResources","TagResource","TestCustomDataIdentifier","UntagResource","UpdateClassificationJob","UpdateFindingsFilter","UpdateMacieSession","UpdateMemberSession","UpdateOrganizationConfiguration"]',
    ARNFormat:
      "arn:aws:macie2:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:macie2:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmacie.html",
  },
  {
    ServiceShortName: "macie",
    ServiceName: "Amazon Macie Classic",
    Actions:
      '["AssociateMemberAccount","AssociateS3Resources","DisassociateMemberAccount","DisassociateS3Resources","ListMemberAccounts","ListS3Resources","UpdateS3Resources"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: '"aws:SourceArn"',
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmacieclassic.html",
  },
  {
    ServiceShortName: "managedblockchain",
    ServiceName: "Amazon Managed Blockchain",
    Actions:
      '["CreateMember","CreateNetwork","CreateNode","CreateProposal","DeleteMember","DeleteNode","GetMember","GetNetwork","GetNode","GetProposal","ListInvitations","ListMembers","ListNetworks","ListNodes","ListProposalVotes","ListProposals","ListTagsForResource","RejectInvitation","TagResource","UntagResource","UpdateMember","UpdateNode","VoteOnProposal"]',
    ARNFormat:
      "arn:aws:managedblockchain:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:managedblockchain:.*:[0-9]*:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedblockchain.html",
  },
  {
    ServiceShortName: "grafana",
    ServiceName: "Amazon Managed Grafana",
    Actions:
      '["AssociateLicense","CreateWorkspace","DeleteWorkspace","DescribeWorkspace","DescribeWorkspaceAuthentication","DisassociateLicense","ListPermissions","ListTagsForResource","ListWorkspaces","TagResource","UntagResource","UpdatePermissions","UpdateWorkspace","UpdateWorkspaceAuthentication"]',
    ARNFormat:
      "arn:aws:grafana:${Region}:${Account}:/${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:grafana:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedgrafana.html",
  },
  {
    ServiceShortName: "aps",
    ServiceName: "Amazon Managed Service for Prometheus",
    Actions:
      '["CreateAlertManagerAlerts","CreateAlertManagerDefinition","CreateRuleGroupsNamespace","CreateWorkspace","DeleteAlertManagerDefinition","DeleteAlertManagerSilence","DeleteRuleGroupsNamespace","DeleteWorkspace","DescribeAlertManagerDefinition","DescribeRuleGroupsNamespace","DescribeWorkspace","GetAlertManagerSilence","GetAlertManagerStatus","GetLabels","GetMetricMetadata","GetSeries","ListAlertManagerAlertGroups","ListAlertManagerAlerts","ListAlertManagerReceivers","ListAlertManagerSilences","ListAlerts","ListRuleGroupsNamespaces","ListRules","ListTagsForResource","ListWorkspaces","PutAlertManagerDefinition","PutAlertManagerSilences","PutRuleGroupsNamespace","QueryMetrics","RemoteWrite","TagResource","UntagResource","UpdateWorkspaceAlias"]',
    ARNFormat:
      "arn:aws:aps:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:aps:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedserviceforprometheus.html",
  },
  {
    ServiceShortName: "kafka",
    ServiceName: "Amazon Managed Streaming for Apache Kafka",
    Actions:
      '["BatchAssociateScramSecret","BatchDisassociateScramSecret","CreateCluster","CreateClusterV2","CreateConfiguration","DeleteCluster","DeleteConfiguration","DescribeCluster","DescribeClusterOperation","DescribeClusterV2","DescribeConfiguration","DescribeConfigurationRevision","GetBootstrapBrokers","GetCompatibleKafkaVersions","ListClusterOperations","ListClusters","ListClustersV2","ListConfigurationRevisions","ListConfigurations","ListKafkaVersions","ListNodes","ListScramSecrets","ListTagsForResource","RebootBroker","TagResource","UntagResource","UpdateBrokerCount","UpdateBrokerStorage","UpdateBrokerType","UpdateClusterConfiguration","UpdateClusterKafkaVersion","UpdateConfiguration","UpdateConnectivity","UpdateMonitoring","UpdateSecurity"]',
    ARNFormat:
      "arn:aws:kafka:${Region}:${Account}:${ResourceType}/${ResourceName}/${Uuid}",
    ARNRegex: "^arn:aws:kafka:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedstreamingforapachekafka.html",
  },
  {
    ServiceShortName: "kafkaconnect",
    ServiceName: "Amazon Managed Streaming for Kafka Connect",
    Actions:
      '["CreateConnector","CreateCustomPlugin","CreateWorkerConfiguration","DeleteConnector","DeleteCustomPlugin","DescribeConnector","DescribeCustomPlugin","DescribeWorkerConfiguration","ListConnectors","ListCustomPlugins","ListWorkerConfigurations","UpdateConnector"]',
    ARNFormat:
      "arn:aws:kafkaconnect:${Region}:${Account}:${ResourceType}/${ResourceName}/${UUID}",
    ARNRegex: "^arn:aws:kafkaconnect:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedstreamingforkafkaconnect.html",
  },
  {
    ServiceShortName: "airflow",
    ServiceName: "Amazon Managed Workflows for Apache Airflow",
    Actions:
      '["CreateCliToken","CreateEnvironment","CreateWebLoginToken","DeleteEnvironment","GetEnvironment","ListEnvironments","ListTagsForResource","PublishMetrics","TagResource","UntagResource","UpdateEnvironment"]',
    ARNFormat:
      "arn:aws:<serviceName>:<region>:<account>:<resourceType>/<resourceName>",
    ARNRegex: "^arn:aws:airflow:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmanagedworkflowsforapacheairflow.html",
  },
  {
    ServiceShortName: "mechanicalturk",
    ServiceName: "Amazon Mechanical Turk",
    Actions:
      '["AcceptQualificationRequest","ApproveAssignment","AssociateQualificationWithWorker","CreateAdditionalAssignmentsForHIT","CreateHIT","CreateHITType","CreateHITWithHITType","CreateQualificationType","CreateWorkerBlock","DeleteHIT","DeleteQualificationType","DeleteWorkerBlock","DisassociateQualificationFromWorker","GetAccountBalance","GetAssignment","GetFileUploadURL","GetHIT","GetQualificationScore","GetQualificationType","ListAssignmentsForHIT","ListBonusPayments","ListHITs","ListHITsForQualificationType","ListQualificationRequests","ListQualificationTypes","ListReviewPolicyResultsForHIT","ListReviewableHITs","ListWorkerBlocks","ListWorkersWithQualificationType","NotifyWorkers","RejectAssignment","RejectQualificationRequest","SendBonus","SendTestEventNotification","UpdateExpirationForHIT","UpdateHITReviewStatus","UpdateHITTypeOfHIT","UpdateNotificationSettings","UpdateQualificationType"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmechanicalturk.html",
  },
  {
    ServiceShortName: "memorydb",
    ServiceName: "Amazon MemoryDB",
    Actions:
      '["BatchUpdateClusters","CopySnapshot","CreateAcl","CreateCluster","CreateParameterGroup","CreateSnapshot","CreateSubnetGroup","CreateUser","DeleteAcl","DeleteCluster","DeleteParameterGroup","DeleteSnapshot","DeleteSubnetGroup","DeleteUser","DescribeAcls","DescribeClusters","DescribeEngineVersions","DescribeEvents","DescribeParameterGroups","DescribeParameters","DescribeServiceUpdates","DescribeSnapshots","DescribeSubnetGroups","DescribeUsers","FailoverShard","ListNodeTypeUpdates","ListTags","ResetParameterGroup","TagResource","UntagResource","UpdateAcl","UpdateCluster","UpdateParameterGroup","UpdateSubnetGroup","UpdateUser"]',
    ARNFormat:
      "arn:<partition>:memorydb:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:.+:memorydb:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmemorydb.html",
  },
  {
    ServiceShortName: "ec2messages",
    ServiceName: "Amazon Message Delivery Service",
    Actions:
      '["AcknowledgeMessage","DeleteMessage","FailMessage","GetEndpoint","GetMessages","SendReply"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmessagedeliveryservice.html",
  },
  {
    ServiceShortName: "mobileanalytics",
    ServiceName: "Amazon Mobile Analytics",
    Actions: '["GetFinancialReports","GetReports","PutEvents"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmobileanalytics.html",
  },
  {
    ServiceShortName: "monitron",
    ServiceName: "Amazon Monitron",
    Actions:
      '["AssociateProjectAdminUser","CreateProject","DeleteProject","DisassociateProjectAdminUser","GetProject","GetProjectAdminUser","ListProjectAdminUsers","ListProjects","ListTagsForResource","TagResource","UntagResource","UpdateProject"]',
    ARNFormat:
      "arn:aws:monitron:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:monitron:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmonitron.html",
  },
  {
    ServiceShortName: "mq",
    ServiceName: "Amazon MQ",
    Actions:
      '["CreateBroker","CreateConfiguration","CreateTags","CreateUser","DeleteBroker","DeleteTags","DeleteUser","DescribeBroker","DescribeBrokerEngineTypes","DescribeBrokerInstanceOptions","DescribeConfiguration","DescribeConfigurationRevision","DescribeUser","ListBrokers","ListConfigurationRevisions","ListConfigurations","ListTags","ListUsers","RebootBroker","UpdateBroker","UpdateConfiguration","UpdateUser"]',
    ARNFormat: "arn:${Partition}:mq:${Region}:${Account}:.+",
    ARNRegex: "^arn:${Partition}:mq:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmq.html",
  },
  {
    ServiceShortName: "neptune-db",
    ServiceName: "Amazon Neptune",
    Actions: '"connect"',
    ARNFormat: "arn:aws:neptune-db:<region>:<accountID>:<relative-id>",
    ARNRegex: "^arn:aws:neptune-db:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonneptune.html",
  },
  {
    ServiceShortName: "nimble",
    ServiceName: "Amazon Nimble Studio",
    Actions:
      '["AcceptEulas","CreateLaunchProfile","CreateStreamingImage","CreateStreamingSession","CreateStreamingSessionStream","CreateStudio","CreateStudioComponent","DeleteLaunchProfile","DeleteLaunchProfileMember","DeleteStreamingImage","DeleteStreamingSession","DeleteStudio","DeleteStudioComponent","DeleteStudioMember","GetEula","GetFeatureMap","GetLaunchProfile","GetLaunchProfileDetails","GetLaunchProfileInitialization","GetLaunchProfileMember","GetStreamingImage","GetStreamingSession","GetStreamingSessionStream","GetStudio","GetStudioComponent","GetStudioMember","ListEulaAcceptances","ListEulas","ListLaunchProfileMembers","ListLaunchProfiles","ListStreamingImages","ListStreamingSessions","ListStudioComponents","ListStudioMembers","ListStudios","ListTagsForResource","PutLaunchProfileMembers","PutStudioLogEvents","PutStudioMembers","StartStreamingSession","StartStudioSSOConfigurationRepair","StopStreamingSession","TagResource","UntagResource","UpdateLaunchProfile","UpdateLaunchProfileMember","UpdateStreamingImage","UpdateStudio","UpdateStudioComponent"]',
    ARNFormat:
      "arn:aws:nimble:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:aws:nimble:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","nimble:createdBy","nimble:ownedBy","nimble:principalId","nimble:requesterPrincipalId","nimble:studioId"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonnimblestudio.html",
  },
  {
    ServiceShortName: "es",
    ServiceName:
      "Amazon OpenSearch Service (successor to Amazon Elasticsearch Service)",
    Actions:
      '["AcceptInboundConnection","AcceptInboundCrossClusterSearchConnection","AddTags","AssociatePackage","CancelElasticsearchServiceSoftwareUpdate","CancelServiceSoftwareUpdate","CreateDomain","CreateElasticsearchDomain","CreateElasticsearchServiceRole","CreateOutboundConnection","CreateOutboundCrossClusterSearchConnection","CreatePackage","CreateServiceRole","DeleteDomain","DeleteElasticsearchDomain","DeleteElasticsearchServiceRole","DeleteInboundConnection","DeleteInboundCrossClusterSearchConnection","DeleteOutboundConnection","DeleteOutboundCrossClusterSearchConnection","DeletePackage","DescribeDomain","DescribeDomainAutoTunes","DescribeDomainChangeProgress","DescribeDomainConfig","DescribeDomains","DescribeElasticsearchDomain","DescribeElasticsearchDomainConfig","DescribeElasticsearchDomains","DescribeElasticsearchInstanceTypeLimits","DescribeInboundConnections","DescribeInboundCrossClusterSearchConnections","DescribeInstanceTypeLimits","DescribeOutboundConnections","DescribeOutboundCrossClusterSearchConnections","DescribePackages","DescribeReservedElasticsearchInstanceOfferings","DescribeReservedElasticsearchInstances","DescribeReservedInstanceOfferings","DescribeReservedInstances","DissociatePackage","ESCrossClusterGet","ESHttpDelete","ESHttpGet","ESHttpHead","ESHttpPatch","ESHttpPost","ESHttpPut","GetCompatibleElasticsearchVersions","GetCompatibleVersions","GetPackageVersionHistory","GetUpgradeHistory","GetUpgradeStatus","ListDomainNames","ListDomainsForPackage","ListElasticsearchInstanceTypeDetails","ListElasticsearchInstanceTypes","ListElasticsearchVersions","ListInstanceTypeDetails","ListPackagesForDomain","ListTags","ListVersions","PurchaseReservedElasticsearchInstanceOffering","PurchaseReservedInstanceOffering","RejectInboundConnection","RejectInboundCrossClusterSearchConnection","RemoveTags","StartElasticsearchServiceSoftwareUpdate","StartServiceSoftwareUpdate","UpdateDomainConfig","UpdateElasticsearchDomainConfig","UpdatePackage","UpgradeDomain","UpgradeElasticsearchDomain"]',
    ARNFormat: "arn:aws:es:${Region}:${Account}:${Resource}",
    ARNRegex: "^arn:aws:es:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonopensearchservicesuccessortoamazonelasticsearchservice.html",
  },
  {
    ServiceShortName: "personalize",
    ServiceName: "Amazon Personalize",
    Actions:
      '["CreateBatchInferenceJob","CreateBatchSegmentJob","CreateCampaign","CreateDataset","CreateDatasetExportJob","CreateDatasetGroup","CreateDatasetImportJob","CreateEventTracker","CreateFilter","CreateRecommender","CreateSchema","CreateSolution","CreateSolutionVersion","DeleteCampaign","DeleteDataset","DeleteDatasetGroup","DeleteEventTracker","DeleteFilter","DeleteRecommender","DeleteSchema","DeleteSolution","DescribeAlgorithm","DescribeBatchInferenceJob","DescribeBatchSegmentJob","DescribeCampaign","DescribeDataset","DescribeDatasetExportJob","DescribeDatasetGroup","DescribeDatasetImportJob","DescribeEventTracker","DescribeFeatureTransformation","DescribeFilter","DescribeRecipe","DescribeRecommender","DescribeSchema","DescribeSolution","DescribeSolutionVersion","GetPersonalizedRanking","GetRecommendations","GetSolutionMetrics","ListBatchInferenceJobs","ListBatchSegmentJobs","ListCampaigns","ListDatasetExportJobs","ListDatasetGroups","ListDatasetImportJobs","ListDatasets","ListEventTrackers","ListFilters","ListRecipes","ListRecommenders","ListSchemas","ListSolutionVersions","ListSolutions","PutEvents","PutItems","PutUsers","StartRecommender","StopRecommender","StopSolutionVersionCreation","UpdateCampaign","UpdateRecommender"]',
    ARNFormat:
      "arn:${Partition}:personalize:${Region}:${Account}:${Resourcename}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:personalize:.+:.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpersonalize.html",
  },
  {
    ServiceShortName: "mobiletargeting",
    ServiceName: "Amazon Pinpoint",
    Actions:
      '["CreateApp","CreateCampaign","CreateEmailTemplate","CreateExportJob","CreateImportJob","CreateInAppTemplate","CreateJourney","CreatePushTemplate","CreateRecommenderConfiguration","CreateSegment","CreateSmsTemplate","CreateVoiceTemplate","DeleteAdmChannel","DeleteApnsChannel","DeleteApnsSandboxChannel","DeleteApnsVoipChannel","DeleteApnsVoipSandboxChannel","DeleteApp","DeleteBaiduChannel","DeleteCampaign","DeleteEmailChannel","DeleteEmailTemplate","DeleteEndpoint","DeleteEventStream","DeleteGcmChannel","DeleteInAppTemplate","DeleteJourney","DeletePushTemplate","DeleteRecommenderConfiguration","DeleteSegment","DeleteSmsChannel","DeleteSmsTemplate","DeleteUserEndpoints","DeleteVoiceChannel","DeleteVoiceTemplate","GetAdmChannel","GetApnsChannel","GetApnsSandboxChannel","GetApnsVoipChannel","GetApnsVoipSandboxChannel","GetApp","GetApplicationDateRangeKpi","GetApplicationSettings","GetApps","GetBaiduChannel","GetCampaign","GetCampaignActivities","GetCampaignDateRangeKpi","GetCampaignVersion","GetCampaignVersions","GetCampaigns","GetChannels","GetEmailChannel","GetEmailTemplate","GetEndpoint","GetEventStream","GetExportJob","GetExportJobs","GetGcmChannel","GetImportJob","GetImportJobs","GetInAppMessages","GetInAppTemplate","GetJourney","GetJourneyDateRangeKpi","GetJourneyExecutionActivityMetrics","GetJourneyExecutionMetrics","GetPushTemplate","GetRecommenderConfiguration","GetRecommenderConfigurations","GetReports","GetSegment","GetSegmentExportJobs","GetSegmentImportJobs","GetSegmentVersion","GetSegmentVersions","GetSegments","GetSmsChannel","GetSmsTemplate","GetUserEndpoints","GetVoiceChannel","GetVoiceTemplate","ListJourneys","ListTagsForResource","ListTemplateVersions","ListTemplates","PhoneNumberValidate","PutEventStream","PutEvents","RemoveAttributes","SendMessages","SendOTPMessage","SendUsersMessages","TagResource","UntagResource","UpdateAdmChannel","UpdateApnsChannel","UpdateApnsSandboxChannel","UpdateApnsVoipChannel","UpdateApnsVoipSandboxChannel","UpdateApplicationSettings","UpdateBaiduChannel","UpdateCampaign","UpdateEmailChannel","UpdateEmailTemplate","UpdateEndpoint","UpdateEndpointsBatch","UpdateGcmChannel","UpdateInAppTemplate","UpdateJourney","UpdateJourneyState","UpdatePushTemplate","UpdateRecommenderConfiguration","UpdateSegment","UpdateSmsChannel","UpdateSmsTemplate","UpdateTemplateActiveVersion","UpdateVoiceChannel","UpdateVoiceTemplate","VerifyOTPMessage"]',
    ARNFormat: "arn:aws:mobiletargeting:${Region}:${Account}:.+",
    ARNRegex: "^arn:aws:mobiletargeting:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpoint.html",
  },
  {
    ServiceShortName: "ses",
    ServiceName: "Amazon Pinpoint Email Service",
    Actions:
      '["CreateConfigurationSet","CreateConfigurationSetEventDestination","CreateDedicatedIpPool","CreateDeliverabilityTestReport","CreateEmailIdentity","DeleteConfigurationSet","DeleteConfigurationSetEventDestination","DeleteDedicatedIpPool","DeleteEmailIdentity","GetAccount","GetBlacklistReports","GetConfigurationSet","GetConfigurationSetEventDestinations","GetDedicatedIp","GetDedicatedIps","GetDeliverabilityDashboardOptions","GetDeliverabilityTestReport","GetDomainDeliverabilityCampaign","GetDomainStatisticsReport","GetEmailIdentity","ListConfigurationSets","ListDedicatedIpPools","ListDeliverabilityTestReports","ListDomainDeliverabilityCampaigns","ListEmailIdentities","ListTagsForResource","PutAccountDedicatedIpWarmupAttributes","PutAccountSendingAttributes","PutConfigurationSetDeliveryOptions","PutConfigurationSetReputationOptions","PutConfigurationSetSendingOptions","PutConfigurationSetTrackingOptions","PutDedicatedIpInPool","PutDedicatedIpWarmupAttributes","PutDeliverabilityDashboardOption","PutEmailIdentityDkimAttributes","PutEmailIdentityFeedbackAttributes","PutEmailIdentityMailFromAttributes","SendEmail","TagResource","UntagResource","UpdateConfigurationSetEventDestination"]',
    ARNFormat:
      "arn:${Partition}:ses:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:ses:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","ses:ApiVersion","ses:FeedbackAddress","ses:FromAddress","ses:FromDisplayName","ses:Recipients"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointemailservice.html",
  },
  {
    ServiceShortName: "sms-voice",
    ServiceName: "Amazon Pinpoint SMS and Voice Service",
    Actions:
      '["CreateConfigurationSet","CreateConfigurationSetEventDestination","DeleteConfigurationSet","DeleteConfigurationSetEventDestination","GetConfigurationSetEventDestinations","ListConfigurationSets","SendVoiceMessage","UpdateConfigurationSetEventDestination"]',
    ARNFormat:
      "arn:aws:sms-voice:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:sms-voice:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointsmsandvoiceservice.html",
  },
  {
    ServiceShortName: "sms-voice",
    ServiceName: "Amazon Pinpoint SMS Voice V2",
    Actions:
      '["AssociateOriginationIdentity","CreateConfigurationSet","CreateEventDestination","CreateOptOutList","CreatePool","DeleteConfigurationSet","DeleteDefaultMessageType","DeleteDefaultSenderId","DeleteEventDestination","DeleteKeyword","DeleteOptOutList","DeleteOptedOutNumber","DeletePool","DeleteTextMessageSpendLimitOverride","DeleteVoiceMessageSpendLimitOverride","DescribeAccountAttributes","DescribeAccountLimits","DescribeConfigurationSets","DescribeKeywords","DescribeOptOutLists","DescribeOptedOutNumbers","DescribePhoneNumbers","DescribePools","DescribeSenderIds","DescribeSpendLimits","DisassociateOriginationIdentity","ListPoolOriginationIdentities","ListTagsForResource","PutKeyword","PutOptedOutNumber","ReleasePhoneNumber","RequestPhoneNumber","SendTextMessage","SendVoiceMessage","SetDefaultMessageType","SetDefaultSenderId","SetTextMessageSpendLimitOverride","SetVoiceMessageSpendLimitOverride","TagResource","UntagResource","UpdateEventDestination","UpdatePhoneNumber","UpdatePool"]',
    ARNFormat:
      "arn:${Partition}:sms-voice:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:sms-voice:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpinpointsmsvoicev2.html",
  },
  {
    ServiceShortName: "polly",
    ServiceName: "Amazon Polly",
    Actions:
      '["DeleteLexicon","DescribeVoices","GetLexicon","GetSpeechSynthesisTask","ListLexicons","ListSpeechSynthesisTasks","PutLexicon","StartSpeechSynthesisTask","SynthesizeSpeech"]',
    ARNFormat: "arn:aws:polly:<region>:<accountID>:lexicon/<relative-id>",
    ARNRegex: "^arn:aws:polly::.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonpolly.html",
  },
  {
    ServiceShortName: "qldb",
    ServiceName: "Amazon QLDB",
    Actions:
      '["CancelJournalKinesisStream","CreateLedger","DeleteLedger","DescribeJournalKinesisStream","DescribeJournalS3Export","DescribeLedger","ExecuteStatement","ExportJournalToS3","GetBlock","GetDigest","GetRevision","InsertSampleData","ListJournalKinesisStreamsForLedger","ListJournalS3Exports","ListJournalS3ExportsForLedger","ListLedgers","ListTagsForResource","PartiQLCreateIndex","PartiQLCreateTable","PartiQLDelete","PartiQLDropIndex","PartiQLDropTable","PartiQLHistoryFunction","PartiQLInsert","PartiQLSelect","PartiQLUndropTable","PartiQLUpdate","SendCommand","ShowCatalog","StreamJournalToKinesis","TagResource","UntagResource","UpdateLedger","UpdateLedgerPermissionsMode"]',
    ARNFormat:
      "arn:${Partition}:qldb:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:qldb:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","qldb:Purge"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonqldb.html",
  },
  {
    ServiceShortName: "quicksight",
    ServiceName: "Amazon QuickSight",
    Actions:
      '["AccountConfigurations","CancelIngestion","CreateAccountCustomization","CreateAdmin","CreateAnalysis","CreateCustomPermissions","CreateDashboard","CreateDataSet","CreateDataSource","CreateEmailCustomizationTemplate","CreateFolder","CreateFolderMembership","CreateGroup","CreateGroupMembership","CreateIAMPolicyAssignment","CreateIngestion","CreateNamespace","CreateReader","CreateTemplate","CreateTemplateAlias","CreateTheme","CreateThemeAlias","CreateUser","CreateVPCConnection","DeleteAccountCustomization","DeleteAnalysis","DeleteCustomPermissions","DeleteDashboard","DeleteDataSet","DeleteDataSource","DeleteEmailCustomizationTemplate","DeleteFolder","DeleteFolderMembership","DeleteGroup","DeleteGroupMembership","DeleteIAMPolicyAssignment","DeleteNamespace","DeleteTemplate","DeleteTemplateAlias","DeleteTheme","DeleteThemeAlias","DeleteUser","DeleteUserByPrincipalId","DeleteVPCConnection","DescribeAccountCustomization","DescribeAccountSettings","DescribeAnalysis","DescribeAnalysisPermissions","DescribeCustomPermissions","DescribeDashboard","DescribeDashboardPermissions","DescribeDataSet","DescribeDataSetPermissions","DescribeDataSource","DescribeDataSourcePermissions","DescribeEmailCustomizationTemplate","DescribeFolder","DescribeFolderPermissions","DescribeFolderResolvedPermissions","DescribeGroup","DescribeGroupMembership","DescribeIAMPolicyAssignment","DescribeIngestion","DescribeIpRestriction","DescribeNamespace","DescribeTemplate","DescribeTemplateAlias","DescribeTemplatePermissions","DescribeTheme","DescribeThemeAlias","DescribeThemePermissions","DescribeUser","GenerateEmbedUrlForAnonymousUser","GenerateEmbedUrlForRegisteredUser","GetAnonymousUserEmbedUrl","GetAuthCode","GetDashboardEmbedUrl","GetGroupMapping","GetSessionEmbedUrl","ListAnalyses","ListCustomPermissions","ListDashboardVersions","ListDashboards","ListDataSets","ListDataSources","ListFolderMembers","ListFolders","ListGroupMemberships","ListGroups","ListIAMPolicyAssignments","ListIAMPolicyAssignmentsForUser","ListIngestions","ListNamespaces","ListTagsForResource","ListTemplateAliases","ListTemplateVersions","ListTemplates","ListThemeAliases","ListThemeVersions","ListThemes","ListUserGroups","ListUsers","PassDataSet","PassDataSource","RegisterUser","RestoreAnalysis","ScopeDownPolicy","SearchAnalyses","SearchDashboards","SearchDirectoryGroups","SearchFolders","SearchGroups","SetGroupMapping","Subscribe","TagResource","Unsubscribe","UntagResource","UpdateAccountCustomization","UpdateAccountSettings","UpdateAnalysis","UpdateAnalysisPermissions","UpdateCustomPermissions","UpdateDashboard","UpdateDashboardPermissions","UpdateDashboardPublishedVersion","UpdateDataSet","UpdateDataSetPermissions","UpdateDataSource","UpdateDataSourcePermissions","UpdateEmailCustomizationTemplate","UpdateFolder","UpdateFolderPermissions","UpdateGroup","UpdateIAMPolicyAssignment","UpdateIpRestriction","UpdateTemplate","UpdateTemplateAlias","UpdateTemplatePermissions","UpdateTheme","UpdateThemeAlias","UpdateThemePermissions","UpdateUser"]',
    ARNFormat:
      "arn:aws:quicksight:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:quicksight:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","quicksight:DirectoryType","quicksight:Edition","quicksight:IamArn","quicksight:SessionName","quicksight:UserName"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonquicksight.html",
  },
  {
    ServiceShortName: "rds",
    ServiceName: "Amazon RDS",
    Actions:
      '["AddRoleToDBCluster","AddRoleToDBInstance","AddSourceIdentifierToSubscription","AddTagsToResource","ApplyPendingMaintenanceAction","AuthorizeDBSecurityGroupIngress","BacktrackDBCluster","CancelExportTask","CopyDBClusterParameterGroup","CopyDBClusterSnapshot","CopyDBParameterGroup","CopyDBSnapshot","CopyOptionGroup","CreateCustomDBEngineVersion","CreateDBCluster","CreateDBClusterEndpoint","CreateDBClusterParameterGroup","CreateDBClusterSnapshot","CreateDBInstance","CreateDBInstanceReadReplica","CreateDBParameterGroup","CreateDBProxy","CreateDBProxyEndpoint","CreateDBSecurityGroup","CreateDBSnapshot","CreateDBSubnetGroup","CreateEventSubscription","CreateGlobalCluster","CreateOptionGroup","CrossRegionCommunication","DeleteCustomDBEngineVersion","DeleteDBCluster","DeleteDBClusterEndpoint","DeleteDBClusterParameterGroup","DeleteDBClusterSnapshot","DeleteDBInstance","DeleteDBInstanceAutomatedBackup","DeleteDBParameterGroup","DeleteDBProxy","DeleteDBProxyEndpoint","DeleteDBSecurityGroup","DeleteDBSnapshot","DeleteDBSubnetGroup","DeleteEventSubscription","DeleteGlobalCluster","DeleteOptionGroup","DeregisterDBProxyTargets","DescribeAccountAttributes","DescribeCertificates","DescribeDBClusterBacktracks","DescribeDBClusterEndpoints","DescribeDBClusterParameterGroups","DescribeDBClusterParameters","DescribeDBClusterSnapshotAttributes","DescribeDBClusterSnapshots","DescribeDBClusters","DescribeDBEngineVersions","DescribeDBInstanceAutomatedBackups","DescribeDBInstances","DescribeDBLogFiles","DescribeDBParameterGroups","DescribeDBParameters","DescribeDBProxies","DescribeDBProxyEndpoints","DescribeDBProxyTargetGroups","DescribeDBProxyTargets","DescribeDBSecurityGroups","DescribeDBSnapshotAttributes","DescribeDBSnapshots","DescribeDBSubnetGroups","DescribeEngineDefaultClusterParameters","DescribeEngineDefaultParameters","DescribeEventCategories","DescribeEventSubscriptions","DescribeEvents","DescribeExportTasks","DescribeGlobalClusters","DescribeOptionGroupOptions","DescribeOptionGroups","DescribeOrderableDBInstanceOptions","DescribePendingMaintenanceActions","DescribeRecommendationGroups","DescribeRecommendations","DescribeReservedDBInstances","DescribeReservedDBInstancesOfferings","DescribeSourceRegions","DescribeValidDBInstanceModifications","DownloadCompleteDBLogFile","DownloadDBLogFilePortion","FailoverDBCluster","FailoverGlobalCluster","ListTagsForResource","ModifyCertificates","ModifyCurrentDBClusterCapacity","ModifyCustomDBEngineVersion","ModifyDBCluster","ModifyDBClusterEndpoint","ModifyDBClusterParameterGroup","ModifyDBClusterSnapshotAttribute","ModifyDBInstance","ModifyDBParameterGroup","ModifyDBProxy","ModifyDBProxyEndpoint","ModifyDBProxyTargetGroup","ModifyDBSnapshot","ModifyDBSnapshotAttribute","ModifyDBSubnetGroup","ModifyEventSubscription","ModifyGlobalCluster","ModifyOptionGroup","ModifyRecommendation","PromoteReadReplica","PromoteReadReplicaDBCluster","PurchaseReservedDBInstancesOffering","RebootDBCluster","RebootDBInstance","RegisterDBProxyTargets","RemoveFromGlobalCluster","RemoveRoleFromDBCluster","RemoveRoleFromDBInstance","RemoveSourceIdentifierFromSubscription","RemoveTagsFromResource","ResetDBClusterParameterGroup","ResetDBParameterGroup","RestoreDBClusterFromS3","RestoreDBClusterFromSnapshot","RestoreDBClusterToPointInTime","RestoreDBInstanceFromDBSnapshot","RestoreDBInstanceFromS3","RestoreDBInstanceToPointInTime","RevokeDBSecurityGroupIngress","StartActivityStream","StartDBCluster","StartDBInstance","StartDBInstanceAutomatedBackupsReplication","StartExportTask","StopActivityStream","StopDBCluster","StopDBInstance","StopDBInstanceAutomatedBackupsReplication"]',
    ARNFormat: "arn:aws:rds:${Region}:${Account}:${RelativeId}",
    ARNRegex: "^arn:aws:rds:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","rds:BackupTarget","rds:DatabaseClass","rds:DatabaseEngine","rds:DatabaseName","rds:EndpointType","rds:MultiAz","rds:Piops","rds:StorageEncrypted","rds:StorageSize","rds:Vpc","rds:cluster-pg-tag/${TagKey}","rds:cluster-snapshot-tag/${TagKey}","rds:cluster-tag/${TagKey}","rds:db-tag/${TagKey}","rds:es-tag/${TagKey}","rds:og-tag/${TagKey}","rds:pg-tag/${TagKey}","rds:req-tag/${TagKey}","rds:ri-tag/${TagKey}","rds:secgrp-tag/${TagKey}","rds:snapshot-tag/${TagKey}","rds:subgrp-tag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrds.html",
  },
  {
    ServiceShortName: "rds-data",
    ServiceName: "Amazon RDS Data API",
    Actions:
      '["BatchExecuteStatement","BeginTransaction","CommitTransaction","ExecuteSql","ExecuteStatement","RollbackTransaction"]',
    ARNFormat: "arn:aws:rds:${Region}:${Account}:${RelativeId}",
    ARNRegex: "^arn:aws:rds:.+",
    conditionKeys: '["aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrdsdataapi.html",
  },
  {
    ServiceShortName: "rds-db",
    ServiceName: "Amazon RDS IAM Authentication",
    Actions: '"connect"',
    ARNFormat:
      "arn:aws:rds-db:<region>:<account-id>:dbuser:<dbi-resource-id>/<db-user-name>",
    ARNRegex: "^arn:aws:rds-db:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrdsiamauthentication.html",
  },
  {
    ServiceShortName: "redshift",
    ServiceName: "Amazon Redshift",
    Actions:
      '["AcceptReservedNodeExchange","AddPartner","AssociateDataShareConsumer","AuthorizeClusterSecurityGroupIngress","AuthorizeDataShare","AuthorizeEndpointAccess","AuthorizeSnapshotAccess","BatchDeleteClusterSnapshots","BatchModifyClusterSnapshots","CancelQuery","CancelQuerySession","CancelResize","CopyClusterSnapshot","CreateAuthenticationProfile","CreateCluster","CreateClusterParameterGroup","CreateClusterSecurityGroup","CreateClusterSnapshot","CreateClusterSubnetGroup","CreateClusterUser","CreateEndpointAccess","CreateEventSubscription","CreateHsmClientCertificate","CreateHsmConfiguration","CreateSavedQuery","CreateScheduledAction","CreateSnapshotCopyGrant","CreateSnapshotSchedule","CreateTags","CreateUsageLimit","DeauthorizeDataShare","DeleteAuthenticationProfile","DeleteCluster","DeleteClusterParameterGroup","DeleteClusterSecurityGroup","DeleteClusterSnapshot","DeleteClusterSubnetGroup","DeleteEndpointAccess","DeleteEventSubscription","DeleteHsmClientCertificate","DeleteHsmConfiguration","DeletePartner","DeleteSavedQueries","DeleteScheduledAction","DeleteSnapshotCopyGrant","DeleteSnapshotSchedule","DeleteTags","DeleteUsageLimit","DescribeAccountAttributes","DescribeAuthenticationProfiles","DescribeClusterDbRevisions","DescribeClusterParameterGroups","DescribeClusterParameters","DescribeClusterSecurityGroups","DescribeClusterSnapshots","DescribeClusterSubnetGroups","DescribeClusterTracks","DescribeClusterVersions","DescribeClusters","DescribeDataShares","DescribeDataSharesForConsumer","DescribeDataSharesForProducer","DescribeDefaultClusterParameters","DescribeEndpointAccess","DescribeEndpointAuthorization","DescribeEventCategories","DescribeEventSubscriptions","DescribeEvents","DescribeHsmClientCertificates","DescribeHsmConfigurations","DescribeLoggingStatus","DescribeNodeConfigurationOptions","DescribeOrderableClusterOptions","DescribePartners","DescribeQuery","DescribeReservedNodeExchangeStatus","DescribeReservedNodeOfferings","DescribeReservedNodes","DescribeResize","DescribeSavedQueries","DescribeScheduledActions","DescribeSnapshotCopyGrants","DescribeSnapshotSchedules","DescribeStorage","DescribeTable","DescribeTableRestoreStatus","DescribeTags","DescribeUsageLimits","DisableLogging","DisableSnapshotCopy","DisassociateDataShareConsumer","EnableLogging","EnableSnapshotCopy","ExecuteQuery","FetchResults","GetClusterCredentials","GetReservedNodeExchangeConfigurationOptions","GetReservedNodeExchangeOfferings","JoinGroup","ListDatabases","ListSavedQueries","ListSchemas","ListTables","ModifyAquaConfiguration","ModifyAuthenticationProfile","ModifyCluster","ModifyClusterDbRevision","ModifyClusterIamRoles","ModifyClusterMaintenance","ModifyClusterParameterGroup","ModifyClusterSnapshot","ModifyClusterSnapshotSchedule","ModifyClusterSubnetGroup","ModifyEndpointAccess","ModifyEventSubscription","ModifySavedQuery","ModifyScheduledAction","ModifySnapshotCopyRetentionPeriod","ModifySnapshotSchedule","ModifyUsageLimit","PauseCluster","PurchaseReservedNodeOffering","RebootCluster","RejectDataShare","ResetClusterParameterGroup","ResizeCluster","RestoreFromClusterSnapshot","RestoreTableFromClusterSnapshot","ResumeCluster","RevokeClusterSecurityGroupIngress","RevokeEndpointAccess","RevokeSnapshotAccess","RotateEncryptionKey","UpdatePartnerStatus","ViewQueriesFromConsole","ViewQueriesInConsole"]',
    ARNFormat: "arn:aws:redshift:${Region}:${Account}:${RelativeId}",
    ARNRegex: "^arn:aws:redshift:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","redshift:ConsumerIdentifier","redshift:DbName","redshift:DbUser","redshift:DurationSeconds"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshift.html",
  },
  {
    ServiceShortName: "redshift-data",
    ServiceName: "Amazon Redshift Data API",
    Actions:
      '["BatchExecuteStatement","CancelStatement","DescribeStatement","DescribeTable","ExecuteStatement","GetStatementResult","ListDatabases","ListSchemas","ListStatements","ListTables"]',
    ARNFormat: "arn:aws:redshift:<region>:<accountID>:<relative-id>",
    ARNRegex: "^arn:aws:redshift:.+:.+:.+",
    conditionKeys:
      '["aws:ResourceTag/${TagKey}","redshift-data:statement-owner-iam-userid"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonredshiftdataapi.html",
  },
  {
    ServiceShortName: "rekognition",
    ServiceName: "Amazon Rekognition",
    Actions:
      '["CompareFaces","CreateCollection","CreateDataset","CreateProject","CreateProjectVersion","CreateStreamProcessor","DeleteCollection","DeleteDataset","DeleteFaces","DeleteProject","DeleteProjectVersion","DeleteStreamProcessor","DescribeCollection","DescribeDataset","DescribeProjectVersions","DescribeProjects","DescribeStreamProcessor","DetectCustomLabels","DetectFaces","DetectLabels","DetectModerationLabels","DetectProtectiveEquipment","DetectText","DistributeDatasetEntries","GetCelebrityInfo","GetCelebrityRecognition","GetContentModeration","GetFaceDetection","GetFaceSearch","GetLabelDetection","GetPersonTracking","GetSegmentDetection","GetTextDetection","IndexFaces","ListCollections","ListDatasetEntries","ListDatasetLabels","ListFaces","ListStreamProcessors","ListTagsForResource","RecognizeCelebrities","SearchFaces","SearchFacesByImage","StartCelebrityRecognition","StartContentModeration","StartFaceDetection","StartFaceSearch","StartLabelDetection","StartPersonTracking","StartProjectVersion","StartSegmentDetection","StartStreamProcessor","StartTextDetection","StopProjectVersion","StopStreamProcessor","TagResource","UntagResource","UpdateDatasetEntries"]',
    ARNFormat: "arn:aws:rekognition:${Region}:${AccountID}:${RelativeId}",
    ARNRegex: "^arn:aws:rekognition:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrekognition.html",
  },
  {
    ServiceShortName: "tag",
    ServiceName: "Amazon Resource Group Tagging API",
    Actions:
      '["DescribeReportCreation","GetComplianceSummary","GetResources","GetTagKeys","GetTagValues","StartReportCreation","TagResources","UntagResources"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonresourcegrouptaggingapi.html",
  },
  {
    ServiceShortName: "rhelkb",
    ServiceName: "Amazon RHEL Knowledgebase Portal",
    Actions: '"GetRhelURL"',
    ARNFormat:
      "arn:aws:rhelkb:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:rhelkb:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonrhelknowledgebaseportal.html",
  },
  {
    ServiceShortName: "route53",
    ServiceName: "Amazon Route 53",
    Actions:
      '["ActivateKeySigningKey","AssociateVPCWithHostedZone","ChangeResourceRecordSets","ChangeTagsForResource","CreateHealthCheck","CreateHostedZone","CreateKeySigningKey","CreateQueryLoggingConfig","CreateReusableDelegationSet","CreateTrafficPolicy","CreateTrafficPolicyInstance","CreateTrafficPolicyVersion","CreateVPCAssociationAuthorization","DeactivateKeySigningKey","DeleteHealthCheck","DeleteHostedZone","DeleteKeySigningKey","DeleteQueryLoggingConfig","DeleteReusableDelegationSet","DeleteTrafficPolicy","DeleteTrafficPolicyInstance","DeleteVPCAssociationAuthorization","DisableHostedZoneDNSSEC","DisassociateVPCFromHostedZone","EnableHostedZoneDNSSEC","GetAccountLimit","GetChange","GetCheckerIpRanges","GetDNSSEC","GetGeoLocation","GetHealthCheck","GetHealthCheckCount","GetHealthCheckLastFailureReason","GetHealthCheckStatus","GetHostedZone","GetHostedZoneCount","GetHostedZoneLimit","GetQueryLoggingConfig","GetReusableDelegationSet","GetReusableDelegationSetLimit","GetTrafficPolicy","GetTrafficPolicyInstance","GetTrafficPolicyInstanceCount","ListGeoLocations","ListHealthChecks","ListHostedZones","ListHostedZonesByName","ListHostedZonesByVPC","ListQueryLoggingConfigs","ListResourceRecordSets","ListReusableDelegationSets","ListTagsForResource","ListTagsForResources","ListTrafficPolicies","ListTrafficPolicyInstances","ListTrafficPolicyInstancesByHostedZone","ListTrafficPolicyInstancesByPolicy","ListTrafficPolicyVersions","ListVPCAssociationAuthorizations","TestDNSAnswer","UpdateHealthCheck","UpdateHostedZoneComment","UpdateTrafficPolicyComment","UpdateTrafficPolicyInstance"]',
    ARNFormat: "arn:${Partition}:route53:::${Resource}/{$Id}",
    ARNRegex: "^arn:${Partition}:route53:::.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53.html",
  },
  {
    ServiceShortName: "route53domains",
    ServiceName: "Amazon Route 53 Domains",
    Actions:
      '["AcceptDomainTransferFromAnotherAwsAccount","CancelDomainTransferToAnotherAwsAccount","CheckDomainAvailability","CheckDomainTransferability","DeleteDomain","DeleteTagsForDomain","DisableDomainAutoRenew","DisableDomainTransferLock","EnableDomainAutoRenew","EnableDomainTransferLock","GetContactReachabilityStatus","GetDomainDetail","GetDomainSuggestions","GetOperationDetail","ListDomains","ListOperations","ListPrices","ListTagsForDomain","RegisterDomain","RejectDomainTransferFromAnotherAwsAccount","RenewDomain","ResendContactReachabilityEmail","RetrieveDomainAuthCode","TransferDomain","TransferDomainToAnotherAwsAccount","UpdateDomainContact","UpdateDomainContactPrivacy","UpdateDomainNameservers","UpdateTagsForDomain","ViewBilling"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53domains.html",
  },
  {
    ServiceShortName: "route53-recovery-cluster",
    ServiceName: "Amazon Route 53 Recovery Cluster",
    Actions:
      '["GetRoutingControlState","ListRoutingControls","UpdateRoutingControlState","UpdateRoutingControlStates"]',
    ARNFormat:
      "arn:${Partition}:route53-recovery-control::${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:route53-recovery-control::.+:.+",
    conditionKeys: '"route53-recovery-cluster:AllowSafetyRulesOverrides"',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53recoverycluster.html",
  },
  {
    ServiceShortName: "route53-recovery-control-config",
    ServiceName: "Amazon Route 53 Recovery Controls",
    Actions:
      '["CreateCluster","CreateControlPanel","CreateRoutingControl","CreateSafetyRule","DeleteCluster","DeleteControlPanel","DeleteRoutingControl","DeleteSafetyRule","DescribeCluster","DescribeControlPanel","DescribeRoutingControl","DescribeRoutingControlByName","DescribeSafetyRule","ListAssociatedRoute53HealthChecks","ListClusters","ListControlPanels","ListRoutingControls","ListSafetyRules","ListTagsForResource","TagResource","UntagResource","UpdateControlPanel","UpdateRoutingControl","UpdateSafetyRule"]',
    ARNFormat:
      "arn:${Partition}:route53-recovery-control::${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:route53-recovery-control::.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53recoverycontrols.html",
  },
  {
    ServiceShortName: "route53-recovery-readiness",
    ServiceName: "Amazon Route 53 Recovery Readiness",
    Actions:
      '["CreateCell","CreateCrossAccountAuthorization","CreateReadinessCheck","CreateRecoveryGroup","CreateResourceSet","DeleteCell","DeleteCrossAccountAuthorization","DeleteReadinessCheck","DeleteRecoveryGroup","DeleteResourceSet","GetArchitectureRecommendations","GetCell","GetCellReadinessSummary","GetReadinessCheck","GetReadinessCheckResourceStatus","GetReadinessCheckStatus","GetRecoveryGroup","GetRecoveryGroupReadinessSummary","GetResourceSet","ListCells","ListCrossAccountAuthorizations","ListReadinessChecks","ListRecoveryGroups","ListResourceSets","ListRules","ListTagsForResources","TagResource","UntagResource","UpdateCell","UpdateReadinessCheck","UpdateRecoveryGroup","UpdateResourceSet"]',
    ARNFormat:
      "arn:${Partition}:route53-recovery-readiness::${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:route53-recovery-readiness::.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53recoveryreadiness.html",
  },
  {
    ServiceShortName: "route53resolver",
    ServiceName: "Amazon Route 53 Resolver",
    Actions:
      '["AssociateFirewallRuleGroup","AssociateResolverEndpointIpAddress","AssociateResolverQueryLogConfig","AssociateResolverRule","CreateFirewallDomainList","CreateFirewallRule","CreateFirewallRuleGroup","CreateResolverEndpoint","CreateResolverQueryLogConfig","CreateResolverRule","DeleteFirewallDomainList","DeleteFirewallRule","DeleteFirewallRuleGroup","DeleteResolverEndpoint","DeleteResolverQueryLogConfig","DeleteResolverRule","DisassociateFirewallRuleGroup","DisassociateResolverEndpointIpAddress","DisassociateResolverQueryLogConfig","DisassociateResolverRule","GetFirewallConfig","GetFirewallDomainList","GetFirewallRuleGroup","GetFirewallRuleGroupAssociation","GetFirewallRuleGroupPolicy","GetResolverConfig","GetResolverDnssecConfig","GetResolverEndpoint","GetResolverQueryLogConfig","GetResolverQueryLogConfigAssociation","GetResolverQueryLogConfigPolicy","GetResolverRule","GetResolverRuleAssociation","GetResolverRulePolicy","ImportFirewallDomains","ListFirewallConfigs","ListFirewallDomainLists","ListFirewallDomains","ListFirewallRuleGroupAssociations","ListFirewallRuleGroups","ListFirewallRules","ListResolverConfigs","ListResolverDnssecConfigs","ListResolverEndpointIpAddresses","ListResolverEndpoints","ListResolverQueryLogConfigAssociations","ListResolverQueryLogConfigs","ListResolverRuleAssociations","ListResolverRules","ListTagsForResource","PutFirewallRuleGroupPolicy","PutResolverQueryLogConfigPolicy","PutResolverRulePolicy","TagResource","UntagResource","UpdateFirewallConfig","UpdateFirewallDomains","UpdateFirewallRule","UpdateFirewallRuleGroupAssociation","UpdateResolverConfig","UpdateResolverDnssecConfig","UpdateResolverEndpoint","UpdateResolverRule"]',
    ARNFormat:
      "arn:${Partition}:route53resolver:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:route53resolver:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonroute53resolver.html",
  },
  {
    ServiceShortName: "s3",
    ServiceName: "Amazon S3",
    Actions:
      '["AbortMultipartUpload","BypassGovernanceRetention","CreateAccessPoint","CreateAccessPointForObjectLambda","CreateBucket","CreateJob","CreateMultiRegionAccessPoint","DeleteAccessPoint","DeleteAccessPointForObjectLambda","DeleteAccessPointPolicy","DeleteAccessPointPolicyForObjectLambda","DeleteBucket","DeleteBucketPolicy","DeleteBucketWebsite","DeleteJobTagging","DeleteMultiRegionAccessPoint","DeleteObject","DeleteObjectTagging","DeleteObjectVersion","DeleteObjectVersionTagging","DeleteStorageLensConfiguration","DeleteStorageLensConfigurationTagging","DescribeJob","DescribeMultiRegionAccessPointOperation","GetAccelerateConfiguration","GetAccessPoint","GetAccessPointConfigurationForObjectLambda","GetAccessPointForObjectLambda","GetAccessPointPolicy","GetAccessPointPolicyForObjectLambda","GetAccessPointPolicyStatus","GetAccessPointPolicyStatusForObjectLambda","GetAccountPublicAccessBlock","GetAnalyticsConfiguration","GetBucketAcl","GetBucketCORS","GetBucketLocation","GetBucketLogging","GetBucketNotification","GetBucketObjectLockConfiguration","GetBucketOwnershipControls","GetBucketPolicy","GetBucketPolicyStatus","GetBucketPublicAccessBlock","GetBucketRequestPayment","GetBucketTagging","GetBucketVersioning","GetBucketWebsite","GetEncryptionConfiguration","GetIntelligentTieringConfiguration","GetInventoryConfiguration","GetJobTagging","GetLifecycleConfiguration","GetMetricsConfiguration","GetMultiRegionAccessPoint","GetMultiRegionAccessPointPolicy","GetMultiRegionAccessPointPolicyStatus","GetObject","GetObjectAcl","GetObjectAttributes","GetObjectLegalHold","GetObjectRetention","GetObjectTagging","GetObjectTorrent","GetObjectVersion","GetObjectVersionAcl","GetObjectVersionAttributes","GetObjectVersionForReplication","GetObjectVersionTagging","GetObjectVersionTorrent","GetReplicationConfiguration","GetStorageLensConfiguration","GetStorageLensConfigurationTagging","GetStorageLensDashboard","InitiateReplication","ListAccessPoints","ListAccessPointsForObjectLambda","ListAllMyBuckets","ListBucket","ListBucketMultipartUploads","ListBucketVersions","ListJobs","ListMultiRegionAccessPoints","ListMultipartUploadParts","ListStorageLensConfigurations","ObjectOwnerOverrideToBucketOwner","PutAccelerateConfiguration","PutAccessPointConfigurationForObjectLambda","PutAccessPointPolicy","PutAccessPointPolicyForObjectLambda","PutAccessPointPublicAccessBlock","PutAccountPublicAccessBlock","PutAnalyticsConfiguration","PutBucketAcl","PutBucketCORS","PutBucketLogging","PutBucketNotification","PutBucketObjectLockConfiguration","PutBucketOwnershipControls","PutBucketPolicy","PutBucketPublicAccessBlock","PutBucketRequestPayment","PutBucketTagging","PutBucketVersioning","PutBucketWebsite","PutEncryptionConfiguration","PutIntelligentTieringConfiguration","PutInventoryConfiguration","PutJobTagging","PutLifecycleConfiguration","PutMetricsConfiguration","PutMultiRegionAccessPointPolicy","PutObject","PutObjectAcl","PutObjectLegalHold","PutObjectRetention","PutObjectTagging","PutObjectVersionAcl","PutObjectVersionTagging","PutReplicationConfiguration","PutStorageLensConfiguration","PutStorageLensConfigurationTagging","ReplicateDelete","ReplicateObject","ReplicateTags","RestoreObject","UpdateJobPriority","UpdateJobStatus"]',
    ARNFormat: "arn:aws:s3:::${BucketName}/${KeyName}",
    ARNRegex: "^arn:aws:s3:::.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:RequestedRegion","aws:ResourceTag/${TagKey}","aws:TagKeys","s3:AccessPointNetworkOrigin","s3:DataAccessPointAccount","s3:DataAccessPointArn","s3:ExistingJobOperation","s3:ExistingJobPriority","s3:ExistingObjectTag/\\u003ckey\\u003e","s3:JobSuspendedCause","s3:LocationConstraint","s3:RequestJobOperation","s3:RequestJobPriority","s3:RequestObjectTag/\\u003ckey\\u003e","s3:RequestObjectTagKeys","s3:ResourceAccount","s3:TlsVersion","s3:VersionId","s3:authType","s3:delimiter","s3:locationconstraint","s3:max-keys","s3:object-lock-legal-hold","s3:object-lock-mode","s3:object-lock-remaining-retention-days","s3:object-lock-retain-until-date","s3:prefix","s3:signatureAge","s3:signatureversion","s3:versionid","s3:x-amz-acl","s3:x-amz-content-sha256","s3:x-amz-copy-source","s3:x-amz-grant-full-control","s3:x-amz-grant-read","s3:x-amz-grant-read-acp","s3:x-amz-grant-write","s3:x-amz-grant-write-acp","s3:x-amz-metadata-directive","s3:x-amz-object-ownership","s3:x-amz-server-side-encryption","s3:x-amz-server-side-encryption-aws-kms-key-id","s3:x-amz-storage-class","s3:x-amz-website-redirect-location"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html",
  },
  {
    ServiceShortName: "glacier",
    ServiceName: "Amazon S3 Glacier",
    Actions:
      '["AbortMultipartUpload","AbortVaultLock","AddTagsToVault","CompleteMultipartUpload","CompleteVaultLock","CreateVault","DeleteArchive","DeleteVault","DeleteVaultAccessPolicy","DeleteVaultNotifications","DescribeJob","DescribeVault","GetDataRetrievalPolicy","GetJobOutput","GetVaultAccessPolicy","GetVaultLock","GetVaultNotifications","InitiateJob","InitiateMultipartUpload","InitiateVaultLock","ListJobs","ListMultipartUploads","ListParts","ListProvisionedCapacity","ListTagsForVault","ListVaults","PurchaseProvisionedCapacity","RemoveTagsFromVault","SetDataRetrievalPolicy","SetVaultAccessPolicy","SetVaultNotifications","UploadArchive","UploadMultipartPart"]',
    ARNFormat:
      "arn:${Partition}:glacier:${Region}:${Account}:vault/${VaultName}",
    ARNRegex: "^arn:${Partition}:glacier:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:TagKeys","glacier:ArchiveAgeInDays","glacier:ResourceTag/"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3glacier.html",
  },
  {
    ServiceShortName: "s3-object-lambda",
    ServiceName: "Amazon S3 Object Lambda",
    Actions:
      '["AbortMultipartUpload","DeleteObject","DeleteObjectTagging","DeleteObjectVersion","DeleteObjectVersionTagging","GetObject","GetObjectAcl","GetObjectLegalHold","GetObjectRetention","GetObjectTagging","GetObjectVersion","GetObjectVersionAcl","GetObjectVersionTagging","ListBucket","ListBucketMultipartUploads","ListBucketVersions","ListMultipartUploadParts","PutObject","PutObjectAcl","PutObjectLegalHold","PutObjectRetention","PutObjectTagging","PutObjectVersionAcl","PutObjectVersionTagging","RestoreObject","WriteGetObjectResponse"]',
    ARNFormat: "arn:aws:s3-object-lambda:::accesspoint/<access point name>",
    ARNRegex: "^arn:aws:s3-object-lambda:::.+",
    conditionKeys:
      '["s3-object-lambda:TlsVersion","s3-object-lambda:authType","s3-object-lambda:signatureAge","s3-object-lambda:versionid"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3objectlambda.html",
  },
  {
    ServiceShortName: "s3-outposts",
    ServiceName: "Amazon S3 on Outposts",
    Actions:
      '["AbortMultipartUpload","CreateAccessPoint","CreateBucket","CreateEndpoint","DeleteAccessPoint","DeleteAccessPointPolicy","DeleteBucket","DeleteBucketPolicy","DeleteEndpoint","DeleteObject","DeleteObjectTagging","GetAccessPoint","GetAccessPointPolicy","GetBucket","GetBucketPolicy","GetBucketTagging","GetLifecycleConfiguration","GetObject","GetObjectTagging","ListAccessPoints","ListBucket","ListBucketMultipartUploads","ListEndpoints","ListMultipartUploadParts","ListRegionalBuckets","ListSharedEndpoints","PutAccessPointPolicy","PutBucketPolicy","PutBucketTagging","PutLifecycleConfiguration","PutObject","PutObjectAcl","PutObjectTagging"]',
    ARNFormat:
      "arn:${Partition}:s3-outposts:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:s3-outposts:.+",
    conditionKeys:
      '["s3-outposts:AccessPointNetworkOrigin","s3-outposts:DataAccessPointAccount","s3-outposts:DataAccessPointArn","s3-outposts:ExistingObjectTag/\\u003ckey\\u003e","s3-outposts:RequestObjectTag/\\u003ckey\\u003e","s3-outposts:RequestObjectTagKeys","s3-outposts:authType","s3-outposts:delimiter","s3-outposts:max-keys","s3-outposts:prefix","s3-outposts:signatureAge","s3-outposts:signatureversion","s3-outposts:x-amz-acl","s3-outposts:x-amz-content-sha256","s3-outposts:x-amz-copy-source","s3-outposts:x-amz-metadata-directive","s3-outposts:x-amz-server-side-encryption","s3-outposts:x-amz-storage-class"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3onoutposts.html",
  },
  {
    ServiceShortName: "sagemaker",
    ServiceName: "Amazon SageMaker",
    Actions:
      '["AddAssociation","AddTags","AssociateTrialComponent","BatchDescribeModelPackage","BatchGetMetrics","BatchGetRecord","BatchPutMetrics","CreateAction","CreateAlgorithm","CreateApp","CreateAppImageConfig","CreateArtifact","CreateAutoMLJob","CreateCodeRepository","CreateCompilationJob","CreateContext","CreateDataQualityJobDefinition","CreateDeviceFleet","CreateDomain","CreateEdgePackagingJob","CreateEndpoint","CreateEndpointConfig","CreateExperiment","CreateFeatureGroup","CreateFlowDefinition","CreateHumanTaskUi","CreateHyperParameterTuningJob","CreateImage","CreateImageVersion","CreateInferenceRecommendationsJob","CreateLabelingJob","CreateLineageGroupPolicy","CreateModel","CreateModelBiasJobDefinition","CreateModelExplainabilityJobDefinition","CreateModelPackage","CreateModelPackageGroup","CreateModelQualityJobDefinition","CreateMonitoringSchedule","CreateNotebookInstance","CreateNotebookInstanceLifecycleConfig","CreatePipeline","CreatePresignedDomainUrl","CreatePresignedNotebookInstanceUrl","CreateProcessingJob","CreateProject","CreateStudioLifecycleConfig","CreateTrainingJob","CreateTransformJob","CreateTrial","CreateTrialComponent","CreateUserProfile","CreateWorkforce","CreateWorkteam","DeleteAction","DeleteAlgorithm","DeleteApp","DeleteAppImageConfig","DeleteArtifact","DeleteAssociation","DeleteCodeRepository","DeleteContext","DeleteDataQualityJobDefinition","DeleteDeviceFleet","DeleteDomain","DeleteEndpoint","DeleteEndpointConfig","DeleteExperiment","DeleteFeatureGroup","DeleteFlowDefinition","DeleteHumanLoop","DeleteHumanTaskUi","DeleteImage","DeleteImageVersion","DeleteLineageGroupPolicy","DeleteModel","DeleteModelBiasJobDefinition","DeleteModelExplainabilityJobDefinition","DeleteModelPackage","DeleteModelPackageGroup","DeleteModelPackageGroupPolicy","DeleteModelQualityJobDefinition","DeleteMonitoringSchedule","DeleteNotebookInstance","DeleteNotebookInstanceLifecycleConfig","DeletePipeline","DeleteProject","DeleteRecord","DeleteStudioLifecycleConfig","DeleteTags","DeleteTrial","DeleteTrialComponent","DeleteUserProfile","DeleteWorkforce","DeleteWorkteam","DeregisterDevices","DescribeAction","DescribeAlgorithm","DescribeApp","DescribeAppImageConfig","DescribeArtifact","DescribeAutoMLJob","DescribeCodeRepository","DescribeCompilationJob","DescribeContext","DescribeDataQualityJobDefinition","DescribeDevice","DescribeDeviceFleet","DescribeDomain","DescribeEdgePackagingJob","DescribeEndpoint","DescribeEndpointConfig","DescribeExperiment","DescribeFeatureGroup","DescribeFlowDefinition","DescribeHumanLoop","DescribeHumanTaskUi","DescribeHyperParameterTuningJob","DescribeImage","DescribeImageVersion","DescribeInferenceRecommendationsJob","DescribeLabelingJob","DescribeLineageGroup","DescribeModel","DescribeModelBiasJobDefinition","DescribeModelExplainabilityJobDefinition","DescribeModelPackage","DescribeModelPackageGroup","DescribeModelQualityJobDefinition","DescribeMonitoringSchedule","DescribeNotebookInstance","DescribeNotebookInstanceLifecycleConfig","DescribePipeline","DescribePipelineDefinitionForExecution","DescribePipelineExecution","DescribeProcessingJob","DescribeProject","DescribeStudioLifecycleConfig","DescribeSubscribedWorkteam","DescribeTrainingJob","DescribeTransformJob","DescribeTrial","DescribeTrialComponent","DescribeUserProfile","DescribeWorkforce","DescribeWorkteam","DisableSagemakerServicecatalogPortfolio","DisassociateTrialComponent","EnableSagemakerServicecatalogPortfolio","GetDeviceFleetReport","GetDeviceRegistration","GetLineageGroupPolicy","GetModelPackageGroupPolicy","GetRecord","GetSagemakerServicecatalogPortfolioStatus","GetSearchSuggestions","InvokeEndpoint","InvokeEndpointAsync","ListActions","ListAlgorithms","ListAppImageConfigs","ListApps","ListArtifacts","ListAssociations","ListAutoMLJobs","ListCandidatesForAutoMLJob","ListCodeRepositories","ListCompilationJobs","ListContexts","ListDataQualityJobDefinitions","ListDeviceFleets","ListDevices","ListDomains","ListEdgePackagingJobs","ListEndpointConfigs","ListEndpoints","ListExperiments","ListFeatureGroups","ListFlowDefinitions","ListHumanLoops","ListHumanTaskUis","ListHyperParameterTuningJobs","ListImageVersions","ListImages","ListInferenceRecommendationsJobs","ListLabelingJobs","ListLabelingJobsForWorkteam","ListLineageGroups","ListModelBiasJobDefinitions","ListModelExplainabilityJobDefinitions","ListModelMetadata","ListModelPackageGroups","ListModelPackages","ListModelQualityJobDefinitions","ListModels","ListMonitoringExecutions","ListMonitoringSchedules","ListNotebookInstanceLifecycleConfigs","ListNotebookInstances","ListPipelineExecutionSteps","ListPipelineExecutions","ListPipelineParametersForExecution","ListPipelines","ListProcessingJobs","ListProjects","ListStudioLifecycleConfigs","ListSubscribedWorkteams","ListTags","ListTrainingJobs","ListTrainingJobsForHyperParameterTuningJob","ListTransformJobs","ListTrialComponents","ListTrials","ListUserProfiles","ListWorkforces","ListWorkteams","PutLineageGroupPolicy","PutModelPackageGroupPolicy","PutRecord","QueryLineage","RegisterDevices","RenderUiTemplate","RetryPipelineExecution","Search","SendHeartbeat","SendPipelineExecutionStepFailure","SendPipelineExecutionStepSuccess","StartHumanLoop","StartMonitoringSchedule","StartNotebookInstance","StartPipelineExecution","StopAutoMLJob","StopCompilationJob","StopEdgePackagingJob","StopHumanLoop","StopHyperParameterTuningJob","StopInferenceRecommendationsJob","StopLabelingJob","StopMonitoringSchedule","StopNotebookInstance","StopPipelineExecution","StopProcessingJob","StopTrainingJob","StopTransformJob","UpdateAction","UpdateAppImageConfig","UpdateArtifact","UpdateCodeRepository","UpdateContext","UpdateDeviceFleet","UpdateDevices","UpdateDomain","UpdateEndpoint","UpdateEndpointWeightsAndCapacities","UpdateExperiment","UpdateImage","UpdateModelPackage","UpdateMonitoringSchedule","UpdateNotebookInstance","UpdateNotebookInstanceLifecycleConfig","UpdatePipeline","UpdatePipelineExecution","UpdateProject","UpdateTrainingJob","UpdateTrial","UpdateTrialComponent","UpdateUserProfile","UpdateWorkforce","UpdateWorkteam"]',
    ARNFormat:
      "arn:${Partition}:sagemaker:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:sagemaker:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","sagemaker:AcceleratorTypes","sagemaker:AppNetworkAccessType","sagemaker:DirectInternetAccess","sagemaker:DomainSharingOutputKmsKey","sagemaker:FeatureGroupOfflineStoreKmsKey","sagemaker:FeatureGroupOfflineStoreS3Uri","sagemaker:FeatureGroupOnlineStoreKmsKey","sagemaker:FileSystemAccessMode","sagemaker:FileSystemDirectoryPath","sagemaker:FileSystemId","sagemaker:FileSystemType","sagemaker:HomeEfsFileSystemKmsKey","sagemaker:ImageArns","sagemaker:ImageVersionArns","sagemaker:InstanceTypes","sagemaker:InterContainerTrafficEncryption","sagemaker:MaxRuntimeInSeconds","sagemaker:ModelApprovalStatus","sagemaker:ModelArn","sagemaker:NetworkIsolation","sagemaker:OutputKmsKey","sagemaker:ResourceTag/","sagemaker:ResourceTag/${TagKey}","sagemaker:RootAccess","sagemaker:ServerlessMaxConcurrency","sagemaker:ServerlessMemorySize","sagemaker:TargetModel","sagemaker:VolumeKmsKey","sagemaker:VpcSecurityGroupIds","sagemaker:VpcSubnets","sagemaker:WorkteamArn","sagemaker:WorkteamType"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsagemaker.html",
  },
  {
    ServiceShortName: "ses",
    ServiceName: "Amazon SES",
    Actions:
      '["CloneReceiptRuleSet","CreateConfigurationSet","CreateConfigurationSetEventDestination","CreateConfigurationSetTrackingOptions","CreateCustomVerificationEmailTemplate","CreateReceiptFilter","CreateReceiptRule","CreateReceiptRuleSet","CreateTemplate","DeleteConfigurationSet","DeleteConfigurationSetEventDestination","DeleteConfigurationSetTrackingOptions","DeleteCustomVerificationEmailTemplate","DeleteIdentity","DeleteIdentityPolicy","DeleteReceiptFilter","DeleteReceiptRule","DeleteReceiptRuleSet","DeleteTemplate","DeleteVerifiedEmailAddress","DescribeActiveReceiptRuleSet","DescribeConfigurationSet","DescribeReceiptRule","DescribeReceiptRuleSet","GetAccountSendingEnabled","GetCustomVerificationEmailTemplate","GetIdentityDkimAttributes","GetIdentityMailFromDomainAttributes","GetIdentityNotificationAttributes","GetIdentityPolicies","GetIdentityVerificationAttributes","GetSendQuota","GetSendStatistics","GetTemplate","ListConfigurationSets","ListCustomVerificationEmailTemplates","ListIdentities","ListIdentityPolicies","ListReceiptFilters","ListReceiptRuleSets","ListTemplates","ListVerifiedEmailAddresses","PutConfigurationSetDeliveryOptions","PutIdentityPolicy","ReorderReceiptRuleSet","SendBounce","SendBulkTemplatedEmail","SendCustomVerificationEmail","SendEmail","SendRawEmail","SendTemplatedEmail","SetActiveReceiptRuleSet","SetIdentityDkimEnabled","SetIdentityFeedbackForwardingEnabled","SetIdentityHeadersInNotificationsEnabled","SetIdentityMailFromDomain","SetIdentityNotificationTopic","SetReceiptRulePosition","TestRenderTemplate","UpdateAccountSendingEnabled","UpdateConfigurationSetEventDestination","UpdateConfigurationSetReputationMetricsEnabled","UpdateConfigurationSetSendingEnabled","UpdateConfigurationSetTrackingOptions","UpdateCustomVerificationEmailTemplate","UpdateReceiptRule","UpdateTemplate","VerifyDomainDkim","VerifyDomainIdentity","VerifyEmailAddress","VerifyEmailIdentity"]',
    ARNFormat:
      "arn:${Partition}:ses:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:ses:.+:[0-9]+:.+",
    conditionKeys:
      '["ses:ApiVersion","ses:FeedbackAddress","ses:FromAddress","ses:FromDisplayName","ses:Recipients"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonses.html",
  },
  {
    ServiceShortName: "ssmmessages",
    ServiceName: "Amazon Session Manager Message Gateway Service",
    Actions:
      '["CreateControlChannel","CreateDataChannel","OpenControlChannel","OpenDataChannel"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsessionmanagermessagegatewayservice.html",
  },
  {
    ServiceShortName: "ses",
    ServiceName: "Amazon Simple Email Service v2",
    Actions:
      '["CreateConfigurationSet","CreateConfigurationSetEventDestination","CreateContact","CreateContactList","CreateCustomVerificationEmailTemplate","CreateDedicatedIpPool","CreateDeliverabilityTestReport","CreateEmailIdentity","CreateEmailIdentityPolicy","CreateEmailTemplate","CreateImportJob","DeleteConfigurationSet","DeleteConfigurationSetEventDestination","DeleteContact","DeleteContactList","DeleteCustomVerificationEmailTemplate","DeleteDedicatedIpPool","DeleteEmailIdentity","DeleteEmailIdentityPolicy","DeleteEmailTemplate","DeleteSuppressedDestination","GetAccount","GetBlacklistReports","GetConfigurationSet","GetConfigurationSetEventDestinations","GetContact","GetContactList","GetCustomVerificationEmailTemplate","GetDedicatedIp","GetDedicatedIps","GetDeliverabilityDashboardOptions","GetDeliverabilityTestReport","GetDomainDeliverabilityCampaign","GetDomainStatisticsReport","GetEmailIdentity","GetEmailIdentityPolicies","GetEmailTemplate","GetImportJob","GetSuppressedDestination","ListConfigurationSets","ListContactLists","ListContacts","ListCustomVerificationEmailTemplates","ListDedicatedIpPools","ListDeliverabilityTestReports","ListDomainDeliverabilityCampaigns","ListEmailIdentities","ListEmailTemplates","ListImportJobs","ListSuppressedDestinations","ListTagsForResource","PutAccountDedicatedIpWarmupAttributes","PutAccountDetails","PutAccountSendingAttributes","PutAccountSuppressionAttributes","PutConfigurationSetDeliveryOptions","PutConfigurationSetReputationOptions","PutConfigurationSetSendingOptions","PutConfigurationSetSuppressionOptions","PutConfigurationSetTrackingOptions","PutDedicatedIpInPool","PutDedicatedIpWarmupAttributes","PutDeliverabilityDashboardOption","PutEmailIdentityConfigurationSetAttributes","PutEmailIdentityDkimAttributes","PutEmailIdentityDkimSigningAttributes","PutEmailIdentityFeedbackAttributes","PutEmailIdentityMailFromAttributes","PutSuppressedDestination","SendBulkEmail","SendCustomVerificationEmail","SendEmail","TagResource","TestRenderEmailTemplate","UntagResource","UpdateConfigurationSetEventDestination","UpdateContact","UpdateContactList","UpdateCustomVerificationEmailTemplate","UpdateEmailIdentityPolicy","UpdateEmailTemplate"]',
    ARNFormat:
      "arn:${Partition}:ses:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:ses:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","ses:ApiVersion","ses:FeedbackAddress","ses:FromAddress","ses:FromDisplayName","ses:Recipients"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleemailservicev2.html",
  },
  {
    ServiceShortName: "swf",
    ServiceName: "Amazon Simple Workflow Service",
    Actions:
      '["CancelTimer","CancelWorkflowExecution","CompleteWorkflowExecution","ContinueAsNewWorkflowExecution","CountClosedWorkflowExecutions","CountOpenWorkflowExecutions","CountPendingActivityTasks","CountPendingDecisionTasks","DeprecateActivityType","DeprecateDomain","DeprecateWorkflowType","DescribeActivityType","DescribeDomain","DescribeWorkflowExecution","DescribeWorkflowType","FailWorkflowExecution","GetWorkflowExecutionHistory","ListActivityTypes","ListClosedWorkflowExecutions","ListDomains","ListOpenWorkflowExecutions","ListTagsForResource","ListWorkflowTypes","PollForActivityTask","PollForDecisionTask","RecordActivityTaskHeartbeat","RecordMarker","RegisterActivityType","RegisterDomain","RegisterWorkflowType","RequestCancelActivityTask","RequestCancelExternalWorkflowExecution","RequestCancelWorkflowExecution","RespondActivityTaskCanceled","RespondActivityTaskCompleted","RespondActivityTaskFailed","RespondDecisionTaskCompleted","ScheduleActivityTask","SignalExternalWorkflowExecution","SignalWorkflowExecution","StartChildWorkflowExecution","StartTimer","StartWorkflowExecution","TagResource","TerminateWorkflowExecution","UndeprecateActivityType","UndeprecateDomain","UndeprecateWorkflowType","UntagResource"]',
    ARNFormat: "arn:aws:swf:${Region}:${Account}:/domain/${DomainName}",
    ARNRegex: "^arn:aws:swf:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","swf:activityType.name","swf:activityType.version","swf:defaultTaskList.name","swf:name","swf:tagFilter.tag","swf:tagList.member.0","swf:tagList.member.1","swf:tagList.member.2","swf:tagList.member.3","swf:tagList.member.4","swf:taskList.name","swf:typeFilter.name","swf:typeFilter.version","swf:version","swf:workflowType.name","swf:workflowType.version"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpleworkflowservice.html",
  },
  {
    ServiceShortName: "sdb",
    ServiceName: "Amazon SimpleDB",
    Actions:
      '["BatchDeleteAttributes","BatchPutAttributes","CreateDomain","DeleteAttributes","DeleteDomain","DomainMetadata","GetAttributes","ListDomains","PutAttributes","Select"]',
    ARNFormat: "arn:${Partition}:sdb:${Region}:${Account}:domain/${DomainName}",
    ARNRegex: "^arn:${Partition}:sdb:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsimpledb.html",
  },
  {
    ServiceShortName: "sns",
    ServiceName: "Amazon SNS",
    Actions:
      '["AddPermission","CheckIfPhoneNumberIsOptedOut","ConfirmSubscription","CreatePlatformApplication","CreatePlatformEndpoint","CreateSMSSandboxPhoneNumber","CreateTopic","DeleteEndpoint","DeletePlatformApplication","DeleteSMSSandboxPhoneNumber","DeleteTopic","GetEndpointAttributes","GetPlatformApplicationAttributes","GetSMSAttributes","GetSMSSandboxAccountStatus","GetSubscriptionAttributes","GetTopicAttributes","ListEndpointsByPlatformApplication","ListOriginationNumbers","ListPhoneNumbersOptedOut","ListPlatformApplications","ListSMSSandboxPhoneNumbers","ListSubscriptions","ListSubscriptionsByTopic","ListTagsForResource","ListTopics","OptInPhoneNumber","Publish","RemovePermission","SetEndpointAttributes","SetPlatformApplicationAttributes","SetSMSAttributes","SetSubscriptionAttributes","SetTopicAttributes","Subscribe","TagResource","Unsubscribe","UntagResource","VerifySMSSandboxPhoneNumber"]',
    ARNFormat: "arn:aws:sns:${Region}:${Account}:${TopicName}",
    ARNRegex: "^arn:aws:sns:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","sns:Endpoint","sns:Protocol"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsns.html",
  },
  {
    ServiceShortName: "sqs",
    ServiceName: "Amazon SQS",
    Actions:
      '["AddPermission","ChangeMessageVisibility","CreateQueue","DeleteMessage","DeleteQueue","GetQueueAttributes","GetQueueUrl","ListDeadLetterSourceQueues","ListQueueTags","ListQueues","PurgeQueue","ReceiveMessage","RemovePermission","SendMessage","SetQueueAttributes","TagQueue","UntagQueue"]',
    ARNFormat: "arn:aws:sqs:${Region}:${AccountID}:${QueueName}",
    ARNRegex: "^arn:aws:sqs:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsqs.html",
  },
  {
    ServiceShortName: "storagegateway",
    ServiceName: "Amazon Storage Gateway",
    Actions:
      '["ActivateGateway","AddCache","AddTagsToResource","AddUploadBuffer","AddWorkingStorage","AssignTapePool","AssociateFileSystem","AttachVolume","BypassGovernanceRetention","CancelArchival","CancelRetrieval","CreateCachediSCSIVolume","CreateNFSFileShare","CreateSMBFileShare","CreateSnapshot","CreateSnapshotFromVolumeRecoveryPoint","CreateStorediSCSIVolume","CreateTapePool","CreateTapeWithBarcode","CreateTapes","DeleteAutomaticTapeCreationPolicy","DeleteBandwidthRateLimit","DeleteChapCredentials","DeleteFileShare","DeleteGateway","DeleteSnapshotSchedule","DeleteTape","DeleteTapeArchive","DeleteTapePool","DeleteVolume","DescribeAvailabilityMonitorTest","DescribeBandwidthRateLimit","DescribeBandwidthRateLimitSchedule","DescribeCache","DescribeCachediSCSIVolumes","DescribeChapCredentials","DescribeFileSystemAssociations","DescribeGatewayInformation","DescribeMaintenanceStartTime","DescribeNFSFileShares","DescribeSMBFileShares","DescribeSMBSettings","DescribeSnapshotSchedule","DescribeStorediSCSIVolumes","DescribeTapeArchives","DescribeTapeRecoveryPoints","DescribeTapes","DescribeUploadBuffer","DescribeVTLDevices","DescribeWorkingStorage","DetachVolume","DisableGateway","DisassociateFileSystem","JoinDomain","ListAutomaticTapeCreationPolicies","ListFileShares","ListFileSystemAssociations","ListGateways","ListLocalDisks","ListTagsForResource","ListTapePools","ListTapes","ListVolumeInitiators","ListVolumeRecoveryPoints","ListVolumes","NotifyWhenUploaded","RefreshCache","RemoveTagsFromResource","ResetCache","RetrieveTapeArchive","RetrieveTapeRecoveryPoint","SetLocalConsolePassword","SetSMBGuestPassword","ShutdownGateway","StartAvailabilityMonitorTest","StartGateway","UpdateAutomaticTapeCreationPolicy","UpdateBandwidthRateLimit","UpdateBandwidthRateLimitSchedule","UpdateChapCredentials","UpdateFileSystemAssociation","UpdateGatewayInformation","UpdateGatewaySoftwareNow","UpdateMaintenanceStartTime","UpdateNFSFileShare","UpdateSMBFileShare","UpdateSMBFileShareVisibility","UpdateSMBLocalGroups","UpdateSMBSecurityStrategy","UpdateSnapshotSchedule","UpdateVTLDeviceType"]',
    ARNFormat:
      "arn:aws:storagegateway:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:storagegateway:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonstoragegateway.html",
  },
  {
    ServiceShortName: "sumerian",
    ServiceName: "Amazon Sumerian",
    Actions: '["Login","ViewRelease"]',
    ARNFormat:
      "arn:aws:sumerian:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:aws:sumerian:.+:.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsumerian.html",
  },
  {
    ServiceShortName: "textract",
    ServiceName: "Amazon Textract",
    Actions:
      '["AnalyzeDocument","AnalyzeExpense","AnalyzeID","DetectDocumentText","GetDocumentAnalysis","GetDocumentTextDetection","GetExpenseAnalysis","StartDocumentAnalysis","StartDocumentTextDetection","StartExpenseAnalysis"]',
    ARNFormat: "arn:${Partition}:textract:${Region}:${AccountID}:${RelativeId}",
    ARNRegex: "^arn:${Partition}:textract:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontextract.html",
  },
  {
    ServiceShortName: "timestream",
    ServiceName: "Amazon Timestream",
    Actions:
      '["CancelQuery","CreateDatabase","CreateScheduledQuery","CreateTable","DeleteDatabase","DeleteScheduledQuery","DeleteTable","DescribeDatabase","DescribeEndpoints","DescribeScheduledQuery","DescribeTable","ExecuteScheduledQuery","ListDatabases","ListMeasures","ListScheduledQueries","ListTables","ListTagsForResource","PrepareQuery","Select","SelectValues","TagResource","UntagResource","UpdateDatabase","UpdateScheduledQuery","UpdateTable","WriteRecords"]',
    ARNFormat:
      "arn:${Partition}:timestream:${Region}:${Account}:database/${DatabaseName}/table/${TableName}",
    ARNRegex: "^arn:${Partition}:timestream:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontimestream.html",
  },
  {
    ServiceShortName: "transcribe",
    ServiceName: "Amazon Transcribe",
    Actions:
      '["CreateCallAnalyticsCategory","CreateLanguageModel","CreateMedicalVocabulary","CreateVocabulary","CreateVocabularyFilter","DeleteCallAnalyticsCategory","DeleteCallAnalyticsJob","DeleteLanguageModel","DeleteMedicalTranscriptionJob","DeleteMedicalVocabulary","DeleteTranscriptionJob","DeleteVocabulary","DeleteVocabularyFilter","DescribeLanguageModel","GetCallAnalyticsCategory","GetCallAnalyticsJob","GetMedicalTranscriptionJob","GetMedicalVocabulary","GetTranscriptionJob","GetVocabulary","GetVocabularyFilter","ListCallAnalyticsCategories","ListCallAnalyticsJobs","ListLanguageModels","ListMedicalTranscriptionJobs","ListMedicalVocabularies","ListTagsForResource","ListTranscriptionJobs","ListVocabularies","ListVocabularyFilters","StartCallAnalyticsJob","StartMedicalStreamTranscription","StartMedicalStreamTranscriptionWebSocket","StartMedicalTranscriptionJob","StartStreamTranscription","StartStreamTranscriptionWebSocket","StartTranscriptionJob","TagResource","UntagResource","UpdateCallAnalyticsCategory","UpdateMedicalVocabulary","UpdateVocabulary","UpdateVocabularyFilter"]',
    ARNFormat:
      "arn:${Partition}:transcribe:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:transcribe:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","transcribe:OutputBucketName","transcribe:OutputEncryptionKMSKeyId","transcribe:OutputKey","transcribe:OutputLocation"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranscribe.html",
  },
  {
    ServiceShortName: "translate",
    ServiceName: "Amazon Translate",
    Actions:
      '["CreateParallelData","DeleteParallelData","DeleteTerminology","DescribeTextTranslationJob","GetParallelData","GetTerminology","ImportTerminology","ListParallelData","ListTerminologies","ListTextTranslationJobs","StartTextTranslationJob","StopTextTranslationJob","TranslateText","UpdateParallelData"]',
    ARNFormat:
      "arn:${Partition}:translate:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:translate:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazontranslate.html",
  },
  {
    ServiceShortName: "workdocs",
    ServiceName: "Amazon WorkDocs",
    Actions:
      '["AbortDocumentVersionUpload","ActivateUser","AddResourcePermissions","AddUserToGroup","CheckAlias","CreateComment","CreateCustomMetadata","CreateFolder","CreateInstance","CreateLabels","CreateNotificationSubscription","CreateUser","DeactivateUser","DeleteComment","DeleteCustomMetadata","DeleteDocument","DeleteFolder","DeleteFolderContents","DeleteInstance","DeleteLabels","DeleteNotificationSubscription","DeleteUser","DeregisterDirectory","DescribeActivities","DescribeAvailableDirectories","DescribeComments","DescribeDocumentVersions","DescribeFolderContents","DescribeGroups","DescribeInstances","DescribeNotificationSubscriptions","DescribeResourcePermissions","DescribeRootFolders","DescribeUsers","DownloadDocumentVersion","GetCurrentUser","GetDocument","GetDocumentPath","GetDocumentVersion","GetFolder","GetFolderPath","GetGroup","GetResources","InitiateDocumentVersionUpload","RegisterDirectory","RemoveAllResourcePermissions","RemoveResourcePermission","UpdateDocument","UpdateDocumentVersion","UpdateFolder","UpdateInstanceAlias","UpdateUser"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkdocs.html",
  },
  {
    ServiceShortName: "worklink",
    ServiceName: "Amazon WorkLink",
    Actions:
      '["AssociateDomain","AssociateWebsiteAuthorizationProvider","AssociateWebsiteCertificateAuthority","CreateFleet","DeleteFleet","DescribeAuditStreamConfiguration","DescribeCompanyNetworkConfiguration","DescribeDevice","DescribeDevicePolicyConfiguration","DescribeDomain","DescribeFleetMetadata","DescribeIdentityProviderConfiguration","DescribeWebsiteCertificateAuthority","DisassociateDomain","DisassociateWebsiteAuthorizationProvider","DisassociateWebsiteCertificateAuthority","ListDevices","ListDomains","ListFleets","ListTagsForResource","ListWebsiteAuthorizationProviders","ListWebsiteCertificateAuthorities","RestoreDomainAccess","RevokeDomainAccess","SearchEntity","SignOutUser","TagResource","UntagResource","UpdateAuditStreamConfiguration","UpdateCompanyNetworkConfiguration","UpdateDevicePolicyConfiguration","UpdateDomainMetadata","UpdateFleetMetadata","UpdateIdentityProviderConfiguration"]',
    ARNFormat:
      "arn:${Partition}:worklink::${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:worklink:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworklink.html",
  },
  {
    ServiceShortName: "workmail",
    ServiceName: "Amazon WorkMail",
    Actions:
      '["AddMembersToGroup","AssociateDelegateToResource","AssociateMemberToGroup","CancelMailboxExportJob","CreateAlias","CreateGroup","CreateInboundMailFlowRule","CreateMailDomain","CreateMailUser","CreateMobileDeviceAccessRule","CreateOrganization","CreateOutboundMailFlowRule","CreateResource","CreateSmtpGateway","CreateUser","DeleteAccessControlRule","DeleteAlias","DeleteEmailMonitoringConfiguration","DeleteGroup","DeleteInboundMailFlowRule","DeleteMailDomain","DeleteMailboxPermissions","DeleteMobileDevice","DeleteMobileDeviceAccessOverride","DeleteMobileDeviceAccessRule","DeleteOrganization","DeleteOutboundMailFlowRule","DeleteResource","DeleteRetentionPolicy","DeleteSmtpGateway","DeleteUser","DeregisterFromWorkMail","DeregisterMailDomain","DescribeDirectories","DescribeEmailMonitoringConfiguration","DescribeGroup","DescribeInboundDmarcSettings","DescribeInboundMailFlowRule","DescribeKmsKeys","DescribeMailDomains","DescribeMailGroups","DescribeMailUsers","DescribeMailboxExportJob","DescribeOrganization","DescribeOrganizations","DescribeOutboundMailFlowRule","DescribeResource","DescribeSmtpGateway","DescribeUser","DisableMailGroups","DisableMailUsers","DisassociateDelegateFromResource","DisassociateMemberFromGroup","EnableMailDomain","EnableMailGroups","EnableMailUsers","GetAccessControlEffect","GetDefaultRetentionPolicy","GetJournalingRules","GetMailDomain","GetMailDomainDetails","GetMailGroupDetails","GetMailUserDetails","GetMailboxDetails","GetMobileDeviceAccessEffect","GetMobileDeviceAccessOverride","GetMobileDeviceDetails","GetMobileDevicesForUser","GetMobilePolicyDetails","ListAccessControlRules","ListAliases","ListGroupMembers","ListGroups","ListInboundMailFlowRules","ListMailDomains","ListMailboxExportJobs","ListMailboxPermissions","ListMembersInMailGroup","ListMobileDeviceAccessOverrides","ListMobileDeviceAccessRules","ListOrganizations","ListOutboundMailFlowRules","ListResourceDelegates","ListResources","ListSmtpGateways","ListTagsForResource","ListUsers","PutAccessControlRule","PutEmailMonitoringConfiguration","PutInboundDmarcSettings","PutMailboxPermissions","PutMobileDeviceAccessOverride","PutRetentionPolicy","RegisterMailDomain","RegisterToWorkMail","RemoveMembersFromGroup","ResetPassword","ResetUserPassword","SearchMembers","SetAdmin","SetDefaultMailDomain","SetJournalingRules","SetMailGroupDetails","SetMailUserDetails","SetMobilePolicyDetails","StartMailboxExportJob","TagResource","TestInboundMailFlowRules","TestOutboundMailFlowRules","UntagResource","UpdateDefaultMailDomain","UpdateInboundMailFlowRule","UpdateMailboxQuota","UpdateMobileDeviceAccessRule","UpdateOutboundMailFlowRule","UpdatePrimaryEmailAddress","UpdateResource","UpdateSmtpGateway","WipeMobileDevice"]',
    ARNFormat:
      "arn:${Partition}:workmail:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:workmail:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmail.html",
  },
  {
    ServiceShortName: "workmailmessageflow",
    ServiceName: "Amazon WorkMail Message Flow",
    Actions: '["GetRawMessageContent","PutRawMessageContent"]',
    ARNFormat:
      "arn:${Partition}:workmailmessageflow:${Region}:${Account}:message/${OrganizationId}/${Context}/${MessageId}",
    ARNRegex: "^arn:${Partition}:workmailmessageflow:.+:.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkmailmessageflow.html",
  },
  {
    ServiceShortName: "workspaces",
    ServiceName: "Amazon WorkSpaces",
    Actions:
      '["AssociateConnectionAlias","AssociateIpGroups","AuthorizeIpRules","CopyWorkspaceImage","CreateConnectClientAddIn","CreateConnectionAlias","CreateIpGroup","CreateTags","CreateUpdatedWorkspaceImage","CreateWorkspaceBundle","CreateWorkspaces","DeleteClientBranding","DeleteConnectClientAddIn","DeleteConnectionAlias","DeleteIpGroup","DeleteTags","DeleteWorkspaceBundle","DeleteWorkspaceImage","DeregisterWorkspaceDirectory","DescribeAccount","DescribeAccountModifications","DescribeClientBranding","DescribeClientProperties","DescribeConnectClientAddIns","DescribeConnectionAliasPermissions","DescribeConnectionAliases","DescribeIpGroups","DescribeTags","DescribeWorkspaceBundles","DescribeWorkspaceDirectories","DescribeWorkspaceImagePermissions","DescribeWorkspaceImages","DescribeWorkspaceSnapshots","DescribeWorkspaces","DescribeWorkspacesConnectionStatus","DisassociateConnectionAlias","DisassociateIpGroups","ImportClientBranding","ImportWorkspaceImage","ListAvailableManagementCidrRanges","MigrateWorkspace","ModifyAccount","ModifyClientProperties","ModifySelfservicePermissions","ModifyWorkspaceAccessProperties","ModifyWorkspaceCreationProperties","ModifyWorkspaceProperties","ModifyWorkspaceState","RebootWorkspaces","RebuildWorkspaces","RegisterWorkspaceDirectory","RestoreWorkspace","RevokeIpRules","StartWorkspaces","StopWorkspaces","TerminateWorkspaces","UpdateConnectClientAddIn","UpdateConnectionAliasPermission","UpdateRulesOfIpGroup","UpdateWorkspaceBundle","UpdateWorkspaceImagePermission"]',
    ARNFormat: "arn:aws:workspaces:*:*",
    ARNRegex: "^arn:aws:workspaces:(.*)",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspaces.html",
  },
  {
    ServiceShortName: "wam",
    ServiceName: "Amazon WorkSpaces Application Manager",
    Actions: '"AuthenticatePackager"',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspacesapplicationmanager.html",
  },
  {
    ServiceShortName: "workspaces-web",
    ServiceName: "Amazon WorkSpaces Web",
    Actions:
      '["AssociateBrowserSettings","AssociateNetworkSettings","AssociateTrustStore","AssociateUserSettings","CreateBrowserSettings","CreateIdentityProvider","CreateNetworkSettings","CreatePortal","CreateTrustStore","CreateUserSettings","DeleteBrowserSettings","DeleteIdentityProvider","DeleteNetworkSettings","DeletePortal","DeleteTrustStore","DeleteUserSettings","DisassociateBrowserSettings","DisassociateNetworkSettings","DisassociateTrustStore","DisassociateUserSettings","GetBrowserSettings","GetIdentityProvider","GetNetworkSettings","GetPortal","GetPortalServiceProviderMetadata","GetTrustStore","GetTrustStoreCertificate","GetUserSettings","ListBrowserSettings","ListIdentityProviders","ListNetworkSettings","ListPortals","ListTagsForResource","ListTrustStoreCertificates","ListTrustStores","ListUserSettings","TagResource","UntagResource","UpdateBrowserSettings","UpdateIdentityProvider","UpdateNetworkSettings","UpdatePortal","UpdateTrustStore","UpdateUserSettings"]',
    ARNFormat:
      "arn:${Partition}:workspaces-web:${Region}:${Account}:${ResourceType}/${ResourceIdentifier}",
    ARNRegex: "^arn:${Partition}:workspaces-web:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonworkspacesweb.html",
  },
  {
    ServiceShortName: "mediaimport",
    ServiceName: "AmazonMediaImport",
    Actions: '"CreateDatabaseBinarySnapshot"',
    ARNFormat: "arn:aws:mediaimport:${Region}:${Account}/*",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonmediaimport.html",
  },
  {
    ServiceShortName: "kafka-cluster",
    ServiceName: "Apache Kafka APIs for Amazon MSK clusters",
    Actions:
      '["AlterCluster","AlterClusterDynamicConfiguration","AlterGroup","AlterTopic","AlterTopicDynamicConfiguration","AlterTransactionalId","Connect","CreateTopic","DeleteGroup","DeleteTopic","DescribeCluster","DescribeClusterDynamicConfiguration","DescribeGroup","DescribeTopic","DescribeTopicDynamicConfiguration","DescribeTransactionalId","ReadData","WriteData","WriteDataIdempotently"]',
    ARNFormat:
      "arn:aws:kafka:${Region}:${Account}:${ResourceType}/${ResourceDescriptor}",
    ARNRegex: "^arn:aws:kafka:.+",
    conditionKeys: '"aws:ResourceTag/${TagKey}"',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_apachekafkaapisforamazonmskclusters.html",
  },
  {
    ServiceShortName: "discovery",
    ServiceName: "Application Discovery",
    Actions:
      '["AssociateConfigurationItemsToApplication","BatchDeleteImportData","CreateApplication","CreateTags","DeleteApplications","DeleteTags","DescribeAgents","DescribeConfigurations","DescribeContinuousExports","DescribeExportConfigurations","DescribeExportTasks","DescribeImportTasks","DescribeTags","DisassociateConfigurationItemsFromApplication","ExportConfigurations","GetDiscoverySummary","ListConfigurations","ListServerNeighbors","StartContinuousExport","StartDataCollectionByAgentIds","StartExportTask","StartImportTask","StopContinuousExport","StopDataCollectionByAgentIds","UpdateApplication"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscovery.html",
  },
  {
    ServiceShortName: "arsenal",
    ServiceName: "Application Discovery Arsenal",
    Actions: '"RegisterOnPremisesAgent"',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_applicationdiscoveryarsenal.html",
  },
  {
    ServiceShortName: "account",
    ServiceName: "AWS Account Management",
    Actions:
      '["DeleteAlternateContact","DisableRegion","EnableRegion","GetAlternateContact","ListRegions","PutAlternateContact"]',
    ARNFormat: "arn:${Partition}:account::${Account}:account",
    ARNRegex: "^arn:${Partition}:account::.+:account",
    conditionKeys:
      '["account:AccountResourceOrgPaths","account:AccountResourceOrgTags/${TagKey}","account:AlternateContactTypes","account:TargetRegion"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsaccountmanagement.html",
  },
  {
    ServiceShortName: "activate",
    ServiceName: "AWS Activate",
    Actions:
      '["CreateForm","GetAccountContact","GetContentInfo","GetCosts","GetCredits","GetMemberInfo","GetProgram","PutMemberInfo"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsactivate.html",
  },
  {
    ServiceShortName: "amplify",
    ServiceName: "AWS Amplify",
    Actions:
      '["CreateApp","CreateBackendEnvironment","CreateBranch","CreateDeployment","CreateDomainAssociation","CreateWebHook","DeleteApp","DeleteBackendEnvironment","DeleteBranch","DeleteDomainAssociation","DeleteJob","DeleteWebHook","GenerateAccessLogs","GetApp","GetArtifactUrl","GetBackendEnvironment","GetBranch","GetDomainAssociation","GetJob","GetWebHook","ListApps","ListArtifacts","ListBackendEnvironments","ListBranches","ListDomainAssociations","ListJobs","ListTagsForResource","ListWebHooks","StartDeployment","StartJob","StopJob","TagResource","UntagResource","UpdateApp","UpdateBranch","UpdateDomainAssociation","UpdateWebHook"]',
    ARNFormat:
      "arn:aws:amplify:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:amplify:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsamplify.html",
  },
  {
    ServiceShortName: "amplifybackend",
    ServiceName: "AWS Amplify Admin",
    Actions:
      '["CloneBackend","CreateBackend","CreateBackendAPI","CreateBackendAuth","CreateBackendConfig","CreateBackendStorage","CreateToken","DeleteBackend","DeleteBackendAPI","DeleteBackendAuth","DeleteBackendStorage","DeleteToken","GenerateBackendAPIModels","GetBackend","GetBackendAPI","GetBackendAPIModels","GetBackendAuth","GetBackendJob","GetBackendStorage","GetToken","ImportBackendAuth","ImportBackendStorage","ListBackendJobs","ListS3Buckets","RemoveAllBackends","RemoveBackendConfig","UpdateBackendAPI","UpdateBackendAuth","UpdateBackendConfig","UpdateBackendJob","UpdateBackendStorage"]',
    ARNFormat:
      "arn:aws:amplifybackend:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:amplifybackend:.+:.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsamplifyadmin.html",
  },
  {
    ServiceShortName: "amplifyuibuilder",
    ServiceName: "AWS Amplify UI Builder",
    Actions:
      '["CreateComponent","CreateTheme","DeleteComponent","DeleteTheme","ExchangeCodeForToken","ExportComponents","ExportThemes","GetComponent","GetTheme","ListComponents","ListTagsForResource","ListThemes","RefreshToken","TagResource","UntagResource","UpdateComponent","UpdateTheme"]',
    ARNFormat:
      "arn:aws:amplifyuibuilder:${Region}:${AccountId}>:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:amplifyuibuilder:.+:.+:.+",
    conditionKeys:
      '["amplifyuibuilder:AppId","amplifyuibuilder:ComponentsId","amplifyuibuilder:EnvironmentName","amplifyuibuilder:ThemesId","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsamplifyuibuilder.html",
  },
  {
    ServiceShortName: "appmesh",
    ServiceName: "AWS App Mesh",
    Actions:
      '["CreateGatewayRoute","CreateMesh","CreateRoute","CreateVirtualGateway","CreateVirtualNode","CreateVirtualRouter","CreateVirtualService","DeleteGatewayRoute","DeleteMesh","DeleteRoute","DeleteVirtualGateway","DeleteVirtualNode","DeleteVirtualRouter","DeleteVirtualService","DescribeGatewayRoute","DescribeMesh","DescribeRoute","DescribeVirtualGateway","DescribeVirtualNode","DescribeVirtualRouter","DescribeVirtualService","ListGatewayRoutes","ListMeshes","ListRoutes","ListTagsForResource","ListVirtualGateways","ListVirtualNodes","ListVirtualRouters","ListVirtualServices","StreamAggregatedResources","TagResource","UntagResource","UpdateGatewayRoute","UpdateMesh","UpdateRoute","UpdateVirtualGateway","UpdateVirtualNode","UpdateVirtualRouter","UpdateVirtualService"]',
    ARNFormat:
      "arn:${Partition}:appmesh:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:appmesh:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappmesh.html",
  },
  {
    ServiceShortName: "appmesh-preview",
    ServiceName: "AWS App Mesh Preview",
    Actions:
      '["CreateGatewayRoute","CreateMesh","CreateRoute","CreateVirtualGateway","CreateVirtualNode","CreateVirtualRouter","CreateVirtualService","DeleteGatewayRoute","DeleteMesh","DeleteRoute","DeleteVirtualGateway","DeleteVirtualNode","DeleteVirtualRouter","DeleteVirtualService","DescribeGatewayRoute","DescribeMesh","DescribeRoute","DescribeVirtualGateway","DescribeVirtualNode","DescribeVirtualRouter","DescribeVirtualService","ListGatewayRoutes","ListMeshes","ListRoutes","ListVirtualGateways","ListVirtualNodes","ListVirtualRouters","ListVirtualServices","StreamAggregatedResources","UpdateGatewayRoute","UpdateMesh","UpdateRoute","UpdateVirtualGateway","UpdateVirtualNode","UpdateVirtualRouter","UpdateVirtualService"]',
    ARNFormat:
      "arn:${Partition}:appmesh-preview:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:appmesh-preview:.+:.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappmeshpreview.html",
  },
  {
    ServiceShortName: "apprunner",
    ServiceName: "AWS App Runner",
    Actions:
      '["AssociateCustomDomain","CreateAutoScalingConfiguration","CreateConnection","CreateObservabilityConfiguration","CreateService","CreateVpcConnector","DeleteAutoScalingConfiguration","DeleteConnection","DeleteObservabilityConfiguration","DeleteService","DeleteVpcConnector","DescribeAutoScalingConfiguration","DescribeCustomDomains","DescribeObservabilityConfiguration","DescribeOperation","DescribeService","DescribeVpcConnector","DisassociateCustomDomain","ListAutoScalingConfigurations","ListConnections","ListObservabilityConfigurations","ListOperations","ListServices","ListTagsForResource","ListVpcConnectors","PauseService","ResumeService","StartDeployment","TagResource","UntagResource","UpdateService"]',
    ARNFormat:
      "arn:aws:apprunner:${Region}:${Account}:${ResourceType}/${PathToResource}",
    ARNRegex: "^arn:aws:apprunner:.+",
    conditionKeys:
      '["apprunner:AutoScalingConfigurationArn","apprunner:ConnectionArn","apprunner:ObservabilityConfigurationArn","apprunner:VpcConnectorArn","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsapprunner.html",
  },
  {
    ServiceShortName: "appconfig",
    ServiceName: "AWS AppConfig",
    Actions:
      '["CreateApplication","CreateConfigurationProfile","CreateDeploymentStrategy","CreateEnvironment","CreateHostedConfigurationVersion","DeleteApplication","DeleteConfigurationProfile","DeleteDeploymentStrategy","DeleteEnvironment","DeleteHostedConfigurationVersion","GetApplication","GetConfiguration","GetConfigurationProfile","GetDeployment","GetDeploymentStrategy","GetEnvironment","GetHostedConfigurationVersion","GetLatestConfiguration","ListApplications","ListConfigurationProfiles","ListDeploymentStrategies","ListDeployments","ListEnvironments","ListHostedConfigurationVersions","ListTagsForResource","StartConfigurationSession","StartDeployment","StopDeployment","TagResource","UntagResource","UpdateApplication","UpdateConfigurationProfile","UpdateDeploymentStrategy","UpdateEnvironment","ValidateConfiguration"]',
    ARNFormat: "arn:aws:appconfig:${Region}:${Account}:${RelativeId}",
    ARNRegex: "^arn:aws:appconfig:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappconfig.html",
  },
  {
    ServiceShortName: "application-autoscaling",
    ServiceName: "AWS Application Auto Scaling",
    Actions:
      '["DeleteScalingPolicy","DeleteScheduledAction","DeregisterScalableTarget","DescribeScalableTargets","DescribeScalingActivities","DescribeScalingPolicies","DescribeScheduledActions","PutScalingPolicy","PutScheduledAction","RegisterScalableTarget"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsapplicationautoscaling.html",
  },
  {
    ServiceShortName: "application-cost-profiler",
    ServiceName: "AWS Application Cost Profiler Service",
    Actions:
      '["DeleteReportDefinition","GetReportDefinition","ImportApplicationUsage","ListReportDefinitions","PutReportDefinition","UpdateReportDefinition"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsapplicationcostprofilerservice.html",
  },
  {
    ServiceShortName: "mgn",
    ServiceName: "AWS Application Migration Service",
    Actions:
      '["BatchCreateVolumeSnapshotGroupForMgn","BatchDeleteSnapshotRequestForMgn","ChangeServerLifeCycleState","CreateReplicationConfigurationTemplate","CreateVcenterClientForMgn","DeleteJob","DeleteReplicationConfigurationTemplate","DeleteSourceServer","DeleteVcenterClient","DescribeJobLogItems","DescribeJobs","DescribeReplicationConfigurationTemplates","DescribeReplicationServerAssociationsForMgn","DescribeSnapshotRequestsForMgn","DescribeSourceServers","DescribeVcenterClients","DisconnectFromService","FinalizeCutover","GetAgentCommandForMgn","GetAgentConfirmedResumeInfoForMgn","GetAgentInstallationAssetsForMgn","GetAgentReplicationInfoForMgn","GetAgentRuntimeConfigurationForMgn","GetAgentSnapshotCreditsForMgn","GetChannelCommandsForMgn","GetLaunchConfiguration","GetReplicationConfiguration","GetVcenterClientCommandsForMgn","InitializeService","ListTagsForResource","MarkAsArchived","NotifyAgentAuthenticationForMgn","NotifyAgentConnectedForMgn","NotifyAgentDisconnectedForMgn","NotifyAgentReplicationProgressForMgn","NotifyVcenterClientStartedForMgn","RegisterAgentForMgn","RetryDataReplication","SendAgentLogsForMgn","SendAgentMetricsForMgn","SendChannelCommandResultForMgn","SendClientLogsForMgn","SendClientMetricsForMgn","SendVcenterClientCommandResultForMgn","SendVcenterClientLogsForMgn","SendVcenterClientMetricsForMgn","StartCutover","StartReplication","StartTest","TagResource","TerminateTargetInstances","UntagResource","UpdateAgentBacklogForMgn","UpdateAgentConversionInfoForMgn","UpdateAgentReplicationInfoForMgn","UpdateAgentReplicationProcessStateForMgn","UpdateAgentSourcePropertiesForMgn","UpdateLaunchConfiguration","UpdateReplicationConfiguration","UpdateReplicationConfigurationTemplate","UpdateSourceServerReplicationType"]',
    ARNFormat:
      "arn:aws:mgn:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:mgn:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","mgn:CreateAction"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsapplicationmigrationservice.html",
  },
  {
    ServiceShortName: "appsync",
    ServiceName: "AWS AppSync",
    Actions:
      '["AssociateApi","CreateApiCache","CreateApiKey","CreateDataSource","CreateDomainName","CreateFunction","CreateGraphqlApi","CreateResolver","CreateType","DeleteApiCache","DeleteApiKey","DeleteDataSource","DeleteDomainName","DeleteFunction","DeleteGraphqlApi","DeleteResolver","DeleteType","DisassociateApi","FlushApiCache","GetApiAssociation","GetApiCache","GetDataSource","GetDomainName","GetFunction","GetGraphqlApi","GetIntrospectionSchema","GetResolver","GetSchemaCreationStatus","GetType","GraphQL","ListApiKeys","ListDataSources","ListDomainNames","ListFunctions","ListGraphqlApis","ListResolvers","ListResolversByFunction","ListTagsForResource","ListTypes","SetWebACL","StartSchemaCreation","TagResource","UntagResource","UpdateApiCache","UpdateApiKey","UpdateDataSource","UpdateDomainName","UpdateFunction","UpdateGraphqlApi","UpdateResolver","UpdateType"]',
    ARNFormat:
      "arn:aws:appsync:${Region}:${AccountId}>:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:aws:appsync:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsappsync.html",
  },
  {
    ServiceShortName: "artifact",
    ServiceName: "AWS Artifact",
    Actions:
      '["AcceptAgreement","DownloadAgreement","Get","TerminateAgreement"]',
    ARNFormat: "arn:aws:artifact::<resource>",
    ARNRegex: "^arn:aws:artifact::.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsartifact.html",
  },
  {
    ServiceShortName: "auditmanager",
    ServiceName: "AWS Audit Manager",
    Actions:
      '["AssociateAssessmentReportEvidenceFolder","BatchAssociateAssessmentReportEvidence","BatchCreateDelegationByAssessment","BatchDeleteDelegationByAssessment","BatchDisassociateAssessmentReportEvidence","BatchImportEvidenceToAssessmentControl","CreateAssessment","CreateAssessmentFramework","CreateAssessmentReport","CreateControl","DeleteAssessment","DeleteAssessmentFramework","DeleteAssessmentFrameworkShare","DeleteAssessmentReport","DeleteControl","DeregisterAccount","DeregisterOrganizationAdminAccount","DisassociateAssessmentReportEvidenceFolder","GetAccountStatus","GetAssessment","GetAssessmentFramework","GetAssessmentReportUrl","GetChangeLogs","GetControl","GetDelegations","GetEvidence","GetEvidenceByEvidenceFolder","GetEvidenceFolder","GetEvidenceFoldersByAssessment","GetEvidenceFoldersByAssessmentControl","GetInsights","GetInsightsByAssessment","GetOrganizationAdminAccount","GetServicesInScope","GetSettings","ListAssessmentControlInsightsByControlDomain","ListAssessmentFrameworkShareRequests","ListAssessmentFrameworks","ListAssessmentReports","ListAssessments","ListControlDomainInsights","ListControlDomainInsightsByAssessment","ListControlInsightsByControlDomain","ListControls","ListKeywordsForDataSource","ListNotifications","ListTagsForResource","RegisterAccount","RegisterOrganizationAdminAccount","StartAssessmentFrameworkShare","TagResource","UntagResource","UpdateAssessment","UpdateAssessmentControl","UpdateAssessmentControlSetStatus","UpdateAssessmentFramework","UpdateAssessmentFrameworkShare","UpdateAssessmentStatus","UpdateControl","UpdateSettings","ValidateAssessmentReportIntegrity"]',
    ARNFormat: "arn:aws:auditmanager::${ResourceType}:${ResourceName}",
    ARNRegex: "^arn:aws:auditmanager::.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsauditmanager.html",
  },
  {
    ServiceShortName: "autoscaling-plans",
    ServiceName: "AWS Auto Scaling",
    Actions:
      '["CreateScalingPlan","DeleteScalingPlan","DescribeScalingPlanResources","DescribeScalingPlans","GetScalingPlanResourceForecastData","UpdateScalingPlan"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsautoscaling.html",
  },
  {
    ServiceShortName: "backup",
    ServiceName: "AWS Backup",
    Actions:
      '["CopyFromBackupVault","CopyIntoBackupVault","CreateBackupPlan","CreateBackupSelection","CreateBackupVault","CreateFramework","CreateReportPlan","DeleteBackupPlan","DeleteBackupSelection","DeleteBackupVault","DeleteBackupVaultAccessPolicy","DeleteBackupVaultLockConfiguration","DeleteBackupVaultNotifications","DeleteFramework","DeleteRecoveryPoint","DeleteReportPlan","DescribeBackupJob","DescribeBackupVault","DescribeCopyJob","DescribeFramework","DescribeGlobalSettings","DescribeProtectedResource","DescribeRecoveryPoint","DescribeRegionSettings","DescribeReportJob","DescribeReportPlan","DescribeRestoreJob","DisassociateRecoveryPoint","ExportBackupPlanTemplate","GetBackupPlan","GetBackupPlanFromJSON","GetBackupPlanFromTemplate","GetBackupSelection","GetBackupVaultAccessPolicy","GetBackupVaultNotifications","GetRecoveryPointRestoreMetadata","GetSupportedResourceTypes","ListBackupJobs","ListBackupPlanTemplates","ListBackupPlanVersions","ListBackupPlans","ListBackupSelections","ListBackupVaults","ListCopyJobs","ListFrameworks","ListProtectedResources","ListRecoveryPointsByBackupVault","ListRecoveryPointsByResource","ListReportJobs","ListReportPlans","ListRestoreJobs","ListTags","PutBackupVaultAccessPolicy","PutBackupVaultLockConfiguration","PutBackupVaultNotifications","StartBackupJob","StartCopyJob","StartReportJob","StartRestoreJob","StopBackupJob","TagResource","UntagResource","UpdateBackupPlan","UpdateFramework","UpdateGlobalSettings","UpdateRecoveryPointLifecycle","UpdateRegionSettings","UpdateReportPlan"]',
    ARNFormat:
      "arn:${Partition}:backup:${Region}:${Account}:${ResourceType}:${ResourceName}",
    ARNRegex: "^arn:${Partition}:backup:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","backup:CopyTargetOrgPaths","backup:CopyTargets","backup:FrameworkArns"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackup.html",
  },
  {
    ServiceShortName: "backup-gateway",
    ServiceName: "AWS Backup Gateway",
    Actions:
      '["AssociateGatewayToServer","Backup","CreateGateway","DeleteGateway","DeleteHypervisor","DisassociateGatewayFromServer","ImportHypervisorConfiguration","ListGateways","ListHypervisors","ListTagsForResource","ListVirtualMachines","PutMaintenanceStartTime","Restore","TagResource","TestHypervisorConfiguration","UntagResource","UpdateGatewayInformation","UpdateHypervisor"]',
    ARNFormat:
      "arn:${Partition}:aws:backup-gateway:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:?.*:aws:backup-gateway:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackupgateway.html",
  },
  {
    ServiceShortName: "backup-storage",
    ServiceName: "AWS Backup storage",
    Actions: '"MountCapsule"',
    ARNFormat:
      "arn:aws:backup-storage:<region>:<account-id>:<resource-type>:<resource_name>",
    ARNRegex: "^^arn:aws:backup-storage:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbackupstorage.html",
  },
  {
    ServiceShortName: "batch",
    ServiceName: "AWS Batch",
    Actions:
      '["CancelJob","CreateComputeEnvironment","CreateJobQueue","CreateSchedulingPolicy","DeleteComputeEnvironment","DeleteJobQueue","DeleteSchedulingPolicy","DeregisterJobDefinition","DescribeComputeEnvironments","DescribeJobDefinitions","DescribeJobQueues","DescribeJobs","DescribeSchedulingPolicies","ListJobs","ListSchedulingPolicies","ListTagsForResource","RegisterJobDefinition","SubmitJob","TagResource","TerminateJob","UntagResource","UpdateComputeEnvironment","UpdateJobQueue","UpdateSchedulingPolicy"]',
    ARNFormat:
      "arn:aws:batch:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:aws:batch:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","batch:AWSLogsCreateGroup","batch:AWSLogsGroup","batch:AWSLogsRegion","batch:AWSLogsStreamPrefix","batch:Image","batch:LogDriver","batch:Privileged","batch:ShareIdentifier","batch:User"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbatch.html",
  },
  {
    ServiceShortName: "aws-portal",
    ServiceName: "AWS Billing",
    Actions:
      '["ModifyAccount","ModifyBilling","ModifyPaymentMethods","ViewAccount","ViewBilling","ViewPaymentMethods","ViewUsage"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbilling.html",
  },
  {
    ServiceShortName: "billingconductor",
    ServiceName: "AWS Billing Conductor",
    Actions:
      '["AssociateAccounts","AssociatePricingRules","BatchAssociateResourcesToCustomLineItem","BatchDisassociateResourcesFromCustomLineItem","CreateBillingGroup","CreateCustomLineItem","CreatePricingPlan","CreatePricingRule","DeleteBillingGroup","DeleteCustomLineItem","DeletePricingPlan","DeletePricingRule","DisassociateAccounts","DisassociatePricingRules","ListAccountAssociations","ListBillingGroupCostReports","ListBillingGroups","ListCustomLineItems","ListPricingPlans","ListPricingPlansAssociatedWithPricingRule","ListPricingRules","ListPricingRulesAssociatedToPricingPlan","ListResourcesAssociatedToCustomLineItem","ListTagsForResource","TagResource","UntagResource","UpdateBillingGroup","UpdateCustomLineItem","UpdatePricingPlan","UpdatePricingRule"]',
    ARNFormat: "^arn:${Partition}:billingconductor::${Account}:${ResourceType}",
    ARNRegex: "^arn:${Partition}:billingconductor:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbillingconductor.html",
  },
  {
    ServiceShortName: "budgets",
    ServiceName: "AWS Budget Service",
    Actions:
      '["CreateBudgetAction","DeleteBudgetAction","DescribeBudgetAction","DescribeBudgetActionHistories","DescribeBudgetActionsForAccount","DescribeBudgetActionsForBudget","ExecuteBudgetAction","ModifyBudget","UpdateBudgetAction","ViewBudget"]',
    ARNFormat: "arn:aws:budgets::<account_ID>:budget/<budgetname>",
    ARNRegex: "^arn:aws:budgets::.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbudgetservice.html",
  },
  {
    ServiceShortName: "bugbust",
    ServiceName: "AWS BugBust",
    Actions:
      '["CreateEvent","EvaluateProfilingGroups","GetEvent","GetJoinEventStatus","JoinEvent","ListBugs","ListEventParticipants","ListEventScores","ListEvents","ListProfilingGroups","ListPullRequests","ListTagsForResource","TagResource","UntagResource","UpdateEvent","UpdateWorkItem","UpdateWorkItemAdmin"]',
    ARNFormat:
      "arn:aws:bugbust:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:bugbust:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsbugbust.html",
  },
  {
    ServiceShortName: "acm",
    ServiceName: "AWS Certificate Manager",
    Actions:
      '["AddTagsToCertificate","DeleteCertificate","DescribeCertificate","ExportCertificate","GetAccountConfiguration","GetCertificate","ImportCertificate","ListCertificates","ListTagsForCertificate","PutAccountConfiguration","RemoveTagsFromCertificate","RenewCertificate","RequestCertificate","ResendValidationEmail","UpdateCertificateOptions"]',
    ARNFormat: "arn:aws:acm:${Region}:${AccountId}:${ArnType}/${ResourceId}",
    ARNRegex: "^arn:aws:acm:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscertificatemanager.html",
  },
  {
    ServiceShortName: "acm-pca",
    ServiceName: "AWS Certificate Manager Private Certificate Authority",
    Actions:
      '["CreateCertificateAuthority","CreateCertificateAuthorityAuditReport","CreatePermission","DeleteCertificateAuthority","DeletePermission","DeletePolicy","DescribeCertificateAuthority","DescribeCertificateAuthorityAuditReport","GetCertificate","GetCertificateAuthorityCertificate","GetCertificateAuthorityCsr","GetPolicy","ImportCertificateAuthorityCertificate","IssueCertificate","ListCertificateAuthorities","ListPermissions","ListTags","PutPolicy","RestoreCertificateAuthority","RevokeCertificate","TagCertificateAuthority","UntagCertificateAuthority","UpdateCertificateAuthority"]',
    ARNFormat: "arn:aws:acm-pca:<region>:<account_ID>:<arn_type>/<resource_id>",
    ARNRegex: "^arn:aws:acm-pca:.+:[0-9]+:.+",
    conditionKeys:
      '["acm-pca:TemplateArn","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscertificatemanagerprivatecertificateauthority.html",
  },
  {
    ServiceShortName: "chatbot",
    ServiceName: "AWS Chatbot",
    Actions:
      '["CreateChimeWebhookConfiguration","CreateSlackChannelConfiguration","DeleteChimeWebhookConfiguration","DeleteSlackChannelConfiguration","DeleteSlackUserIdentity","DeleteSlackWorkspaceAuthorization","DescribeChimeWebhookConfigurations","DescribeSlackChannelConfigurations","DescribeSlackChannels","DescribeSlackUserIdentities","DescribeSlackWorkspaces","GetAccountPreferences","GetSlackOauthParameters","RedeemSlackOauthCode","UpdateAccountPreferences","UpdateChimeWebhookConfiguration","UpdateSlackChannelConfiguration"]',
    ARNFormat:
      "arn:${Partition}:chatbot::${Account}:chat-configuration/${ConfigurationType}/${ChatbotConfigurationName}",
    ARNRegex: "^arn:${Partition}:chatbot:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awschatbot.html",
  },
  {
    ServiceShortName: "cloudformation",
    ServiceName: "AWS Cloud Control API",
    Actions:
      '["CancelResourceRequest","CreateResource","DeleteResource","GetResource","GetResourceRequestStatus","ListResourceRequests","ListResources","UpdateResource"]',
    ARNFormat: "arn:aws:cloudformation:${Region}:${Account}:${RelativeId}",
    ARNRegex: "^arn:aws:cloudformation:.+:[0-9]+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudcontrolapi.html",
  },
  {
    ServiceShortName: "servicediscovery",
    ServiceName: "AWS Cloud Map",
    Actions:
      '["CreateHttpNamespace","CreatePrivateDnsNamespace","CreatePublicDnsNamespace","CreateService","DeleteNamespace","DeleteService","DeregisterInstance","DiscoverInstances","GetInstance","GetInstancesHealthStatus","GetNamespace","GetOperation","GetService","ListInstances","ListNamespaces","ListOperations","ListServices","ListTagsForResource","RegisterInstance","TagResource","UntagResource","UpdateHttpNamespace","UpdateInstanceCustomHealthStatus","UpdatePrivateDnsNamespace","UpdatePublicDnsNamespace","UpdateService"]',
    ARNFormat:
      "arn:aws:servicediscovery:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:servicediscovery:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","servicediscovery:NamespaceArn","servicediscovery:NamespaceName","servicediscovery:ServiceArn","servicediscovery:ServiceName"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudmap.html",
  },
  {
    ServiceShortName: "cloud9",
    ServiceName: "AWS Cloud9",
    Actions:
      '["ActivateEC2Remote","CreateEnvironmentEC2","CreateEnvironmentMembership","CreateEnvironmentSSH","CreateEnvironmentToken","DeleteEnvironment","DeleteEnvironmentMembership","DescribeEC2Remote","DescribeEnvironmentMemberships","DescribeEnvironmentStatus","DescribeEnvironments","DescribeSSHRemote","GetEnvironmentConfig","GetEnvironmentSettings","GetMembershipSettings","GetUserPublicKey","GetUserSettings","ListEnvironments","ListTagsForResource","ModifyTemporaryCredentialsOnEnvironmentEC2","TagResource","UntagResource","UpdateEnvironment","UpdateEnvironmentMembership","UpdateEnvironmentSettings","UpdateMembershipSettings","UpdateSSHRemote","UpdateUserSettings","ValidateEnvironmentName"]',
    ARNFormat:
      "arn:aws:cloud9:${Region}:${Account}:${ResourceType}:${ResourceId}",
    ARNRegex: "^arn:aws:cloud9:.+:[0-9]+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","cloud9:EnvironmentId","cloud9:EnvironmentName","cloud9:InstanceType","cloud9:OwnerArn","cloud9:Permissions","cloud9:SubnetId","cloud9:UserArn"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloud9.html",
  },
  {
    ServiceShortName: "cloudformation",
    ServiceName: "AWS CloudFormation",
    Actions:
      '["ActivateType","BatchDescribeTypeConfigurations","CancelUpdateStack","ContinueUpdateRollback","CreateChangeSet","CreateStack","CreateStackInstances","CreateStackSet","CreateUploadBucket","DeactivateType","DeleteChangeSet","DeleteStack","DeleteStackInstances","DeleteStackSet","DeregisterType","DescribeAccountLimits","DescribeChangeSet","DescribeChangeSetHooks","DescribePublisher","DescribeStackDriftDetectionStatus","DescribeStackEvents","DescribeStackInstance","DescribeStackResource","DescribeStackResourceDrifts","DescribeStackResources","DescribeStackSet","DescribeStackSetOperation","DescribeStacks","DescribeType","DescribeTypeRegistration","DetectStackDrift","DetectStackResourceDrift","DetectStackSetDrift","EstimateTemplateCost","ExecuteChangeSet","GetStackPolicy","GetTemplate","GetTemplateSummary","ImportStacksToStackSet","ListChangeSets","ListExports","ListImports","ListStackInstances","ListStackResources","ListStackSetOperationResults","ListStackSetOperations","ListStackSets","ListStacks","ListTypeRegistrations","ListTypeVersions","ListTypes","PublishType","RecordHandlerProgress","RegisterPublisher","RegisterType","RollbackStack","SetStackPolicy","SetTypeConfiguration","SetTypeDefaultVersion","SignalResource","StopStackSetOperation","TagResource","TestType","UntagResource","UpdateStack","UpdateStackInstances","UpdateStackSet","UpdateTerminationProtection","ValidateTemplate"]',
    ARNFormat:
      "arn:${Partition}:cloudformation:${Region}:${AccountId}:${ResourceType}/${Id}",
    ARNRegex: "^arn:${Partition}:cloudformation:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","cloudformation:ChangeSetName","cloudformation:ImportResourceTypes","cloudformation:ResourceTypes","cloudformation:RoleArn","cloudformation:StackPolicyUrl","cloudformation:TargetRegion","cloudformation:TemplateUrl"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudformation.html",
  },
  {
    ServiceShortName: "cloudhsm",
    ServiceName: "AWS CloudHSM",
    Actions:
      '["AddTagsToResource","CopyBackupToRegion","CreateCluster","CreateHapg","CreateHsm","CreateLunaClient","DeleteBackup","DeleteCluster","DeleteHapg","DeleteHsm","DeleteLunaClient","DescribeBackups","DescribeClusters","DescribeHapg","DescribeHsm","DescribeLunaClient","GetConfig","InitializeCluster","ListAvailableZones","ListHapgs","ListHsms","ListLunaClients","ListTags","ListTagsForResource","ModifyBackupAttributes","ModifyCluster","ModifyHapg","ModifyHsm","ModifyLunaClient","RemoveTagsFromResource","RestoreBackup","TagResource","UntagResource"]',
    ARNFormat: "arn:<partition>:cloudhsm:<region>:<accountID>:<relative-id>",
    ARNRegex: "^arn:<partition>:cloudhsm:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudhsm.html",
  },
  {
    ServiceShortName: "cloudshell",
    ServiceName: "AWS CloudShell",
    Actions:
      '["CreateEnvironment","CreateSession","DeleteEnvironment","GetEnvironmentStatus","GetFileDownloadUrls","GetFileUploadUrls","PutCredentials","StartEnvironment","StopEnvironment"]',
    ARNFormat:
      "arn:${Partition}:cloudshell:${Region}:${Account}:environment/${EnvironmentId}",
    ARNRegex:
      "^arn:${Partition}:cloudshell:${Region}:${Account}:environment/.+?",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudshell.html",
  },
  {
    ServiceShortName: "cloudtrail",
    ServiceName: "AWS CloudTrail",
    Actions:
      '["AddTags","CancelQuery","CreateEventDataStore","CreateTrail","DeleteEventDataStore","DeleteTrail","DescribeQuery","DescribeTrails","GetEventDataStore","GetEventSelectors","GetInsightSelectors","GetQueryResults","GetTrail","GetTrailStatus","ListEventDataStores","ListPublicKeys","ListQueries","ListTags","ListTrails","LookupEvents","PutEventSelectors","PutInsightSelectors","RemoveTags","RestoreEventDataStore","StartLogging","StartQuery","StopLogging","UpdateEventDataStore","UpdateTrail"]',
    ARNFormat: "arn:aws:cloudtrail:${Region}:${Account}:${Resource}",
    ARNRegex: "^arn:aws:cloudtrail:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudtrail.html",
  },
  {
    ServiceShortName: "rum",
    ServiceName: "AWS CloudWatch RUM",
    Actions:
      '["CreateAppMonitor","DeleteAppMonitor","GetAppMonitor","GetAppMonitorData","ListAppMonitors","ListTagsForResource","PutRumEvents","TagResource","UntagResource","UpdateAppMonitor"]',
    ARNFormat: "arn:${Partition}:rum:${Region}:${Account}:appmonitor/${Name}",
    ARNRegex: "^arn:${Partition}:rum:${Region}:${Account}:appmonitor/.+?",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscloudwatchrum.html",
  },
  {
    ServiceShortName: "codeartifact",
    ServiceName: "AWS CodeArtifact",
    Actions:
      '["AssociateExternalConnection","AssociateWithDownstreamRepository","CopyPackageVersions","CreateDomain","CreateRepository","DeleteDomain","DeleteDomainPermissionsPolicy","DeletePackageVersions","DeleteRepository","DeleteRepositoryPermissionsPolicy","DescribeDomain","DescribePackageVersion","DescribeRepository","DisassociateExternalConnection","DisposePackageVersions","GetAuthorizationToken","GetDomainPermissionsPolicy","GetPackageVersionAsset","GetPackageVersionReadme","GetRepositoryEndpoint","GetRepositoryPermissionsPolicy","ListDomains","ListPackageVersionAssets","ListPackageVersionDependencies","ListPackageVersions","ListPackages","ListRepositories","ListRepositoriesInDomain","ListTagsForResource","PublishPackageVersion","PutDomainPermissionsPolicy","PutPackageMetadata","PutRepositoryPermissionsPolicy","ReadFromRepository","TagResource","UntagResource","UpdatePackageVersionsStatus","UpdateRepository"]',
    ARNFormat:
      "arn:${Partition}:codeartifact:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:codeartifact:.+:[0-9]+:.+/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodeartifact.html",
  },
  {
    ServiceShortName: "codebuild",
    ServiceName: "AWS CodeBuild",
    Actions:
      '["BatchDeleteBuilds","BatchGetBuildBatches","BatchGetBuilds","BatchGetProjects","BatchGetReportGroups","BatchGetReports","BatchPutCodeCoverages","BatchPutTestCases","CreateProject","CreateReport","CreateReportGroup","CreateWebhook","DeleteBuildBatch","DeleteOAuthToken","DeleteProject","DeleteReport","DeleteReportGroup","DeleteResourcePolicy","DeleteSourceCredentials","DeleteWebhook","DescribeCodeCoverages","DescribeTestCases","GetReportGroupTrend","GetResourcePolicy","ImportSourceCredentials","InvalidateProjectCache","ListBuildBatches","ListBuildBatchesForProject","ListBuilds","ListBuildsForProject","ListConnectedOAuthAccounts","ListCuratedEnvironmentImages","ListProjects","ListReportGroups","ListReports","ListReportsForReportGroup","ListRepositories","ListSharedProjects","ListSharedReportGroups","ListSourceCredentials","PersistOAuthToken","PutResourcePolicy","RetryBuild","RetryBuildBatch","StartBuild","StartBuildBatch","StopBuild","StopBuildBatch","UpdateProject","UpdateProjectVisibility","UpdateReport","UpdateReportGroup","UpdateWebhook"]',
    ARNFormat:
      "arn:${Partition}:codebuild:${Region}:${Account}:build/${BuildId}",
    ARNRegex: "^arn:${Partition}:codebuild:.+:[0-9]+:.+/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodebuild.html",
  },
  {
    ServiceShortName: "codecommit",
    ServiceName: "AWS CodeCommit",
    Actions:
      '["AssociateApprovalRuleTemplateWithRepository","BatchAssociateApprovalRuleTemplateWithRepositories","BatchDescribeMergeConflicts","BatchDisassociateApprovalRuleTemplateFromRepositories","BatchGetCommits","BatchGetPullRequests","BatchGetRepositories","CancelUploadArchive","CreateApprovalRuleTemplate","CreateBranch","CreateCommit","CreatePullRequest","CreatePullRequestApprovalRule","CreateRepository","CreateUnreferencedMergeCommit","DeleteApprovalRuleTemplate","DeleteBranch","DeleteCommentContent","DeleteFile","DeletePullRequestApprovalRule","DeleteRepository","DescribeMergeConflicts","DescribePullRequestEvents","DisassociateApprovalRuleTemplateFromRepository","EvaluatePullRequestApprovalRules","GetApprovalRuleTemplate","GetBlob","GetBranch","GetComment","GetCommentReactions","GetCommentsForComparedCommit","GetCommentsForPullRequest","GetCommit","GetCommitHistory","GetCommitsFromMergeBase","GetDifferences","GetFile","GetFolder","GetMergeCommit","GetMergeConflicts","GetMergeOptions","GetObjectIdentifier","GetPullRequest","GetPullRequestApprovalStates","GetPullRequestOverrideState","GetReferences","GetRepository","GetRepositoryTriggers","GetTree","GetUploadArchiveStatus","GitPull","GitPush","ListApprovalRuleTemplates","ListAssociatedApprovalRuleTemplatesForRepository","ListBranches","ListPullRequests","ListRepositories","ListRepositoriesForApprovalRuleTemplate","ListTagsForResource","MergeBranchesByFastForward","MergeBranchesBySquash","MergeBranchesByThreeWay","MergePullRequestByFastForward","MergePullRequestBySquash","MergePullRequestByThreeWay","OverridePullRequestApprovalRules","PostCommentForComparedCommit","PostCommentForPullRequest","PostCommentReply","PutCommentReaction","PutFile","PutRepositoryTriggers","TagResource","TestRepositoryTriggers","UntagResource","UpdateApprovalRuleTemplateContent","UpdateApprovalRuleTemplateDescription","UpdateApprovalRuleTemplateName","UpdateComment","UpdateDefaultBranch","UpdatePullRequestApprovalRuleContent","UpdatePullRequestApprovalState","UpdatePullRequestDescription","UpdatePullRequestStatus","UpdatePullRequestTitle","UpdateRepositoryDescription","UpdateRepositoryName","UploadArchive"]',
    ARNFormat: "arn:aws:codecommit:<region>:<account_ID>:<repository_name>",
    ARNRegex: "^arn:aws:codecommit:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","codecommit:References"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodecommit.html",
  },
  {
    ServiceShortName: "codedeploy",
    ServiceName: "AWS CodeDeploy",
    Actions:
      '["AddTagsToOnPremisesInstances","BatchGetApplicationRevisions","BatchGetApplications","BatchGetDeploymentGroups","BatchGetDeploymentInstances","BatchGetDeploymentTargets","BatchGetDeployments","BatchGetOnPremisesInstances","ContinueDeployment","CreateApplication","CreateCloudFormationDeployment","CreateDeployment","CreateDeploymentConfig","CreateDeploymentGroup","DeleteApplication","DeleteDeploymentConfig","DeleteDeploymentGroup","DeleteGitHubAccountToken","DeleteResourcesByExternalId","DeregisterOnPremisesInstance","GetApplication","GetApplicationRevision","GetDeployment","GetDeploymentConfig","GetDeploymentGroup","GetDeploymentInstance","GetDeploymentTarget","GetOnPremisesInstance","ListApplicationRevisions","ListApplications","ListDeploymentConfigs","ListDeploymentGroups","ListDeploymentInstances","ListDeploymentTargets","ListDeployments","ListGitHubAccountTokenNames","ListOnPremisesInstances","ListTagsForResource","PutLifecycleEventHookExecutionStatus","RegisterApplicationRevision","RegisterOnPremisesInstance","RemoveTagsFromOnPremisesInstances","SkipWaitTimeForInstanceTermination","StopDeployment","TagResource","UntagResource","UpdateApplication","UpdateDeploymentGroup"]',
    ARNFormat:
      "arn:${Partition}:codedeploy:${Region}:${Account}:${ResourceType}:${ResourceSpecifier}",
    ARNRegex: "^arn:${Partition}:codedeploy:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodedeploy.html",
  },
  {
    ServiceShortName: "codedeploy-commands-secure",
    ServiceName: "AWS CodeDeploy secure host commands service",
    Actions:
      '["GetDeploymentSpecification","PollHostCommand","PutHostCommandAcknowledgement","PutHostCommandComplete"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodedeploysecurehostcommandsservice.html",
  },
  {
    ServiceShortName: "codepipeline",
    ServiceName: "AWS CodePipeline",
    Actions:
      '["AcknowledgeJob","AcknowledgeThirdPartyJob","CreateCustomActionType","CreatePipeline","DeleteCustomActionType","DeletePipeline","DeleteWebhook","DeregisterWebhookWithThirdParty","DisableStageTransition","EnableStageTransition","GetActionType","GetJobDetails","GetPipeline","GetPipelineExecution","GetPipelineState","GetThirdPartyJobDetails","ListActionExecutions","ListActionTypes","ListPipelineExecutions","ListPipelines","ListTagsForResource","ListWebhooks","PollForJobs","PollForThirdPartyJobs","PutActionRevision","PutApprovalResult","PutJobFailureResult","PutJobSuccessResult","PutThirdPartyJobFailureResult","PutThirdPartyJobSuccessResult","PutWebhook","RegisterWebhookWithThirdParty","RetryStageExecution","StartPipelineExecution","StopPipelineExecution","TagResource","UntagResource","UpdateActionType","UpdatePipeline"]',
    ARNFormat:
      "arn:aws:codepipeline:${Region}:${Account}:${PathToPipelineResource}",
    ARNRegex: "^arn:aws:codepipeline:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodepipeline.html",
  },
  {
    ServiceShortName: "codestar",
    ServiceName: "AWS CodeStar",
    Actions:
      '["AssociateTeamMember","CreateProject","CreateUserProfile","DeleteExtendedAccess","DeleteProject","DeleteUserProfile","DescribeProject","DescribeUserProfile","DisassociateTeamMember","GetExtendedAccess","ListProjects","ListResources","ListTagsForProject","ListTeamMembers","ListUserProfiles","PutExtendedAccess","TagProject","UntagProject","UpdateProject","UpdateTeamMember","UpdateUserProfile","VerifyServiceRole"]',
    ARNFormat:
      "arn:aws:codestar:<region>:<account_ID>:<resource_type>/<resource_id>",
    ARNRegex: "^arn:aws:codestar:.+:[0-9]+:project/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","iam:ResourceTag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestar.html",
  },
  {
    ServiceShortName: "codestar-connections",
    ServiceName: "AWS CodeStar Connections",
    Actions:
      '["CreateConnection","CreateHost","DeleteConnection","DeleteHost","GetConnection","GetHost","GetIndividualAccessToken","GetInstallationUrl","ListConnections","ListHosts","ListInstallationTargets","ListTagsForResource","PassConnection","RegisterAppCode","StartAppRegistrationHandshake","StartOAuthHandshake","TagResource","UntagResource","UpdateConnectionInstallation","UpdateHost","UseConnection"]',
    ARNFormat:
      "arn:aws:codestar-connections:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:codestar-connections:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","codestar-connections:BranchName","codestar-connections:FullRepositoryId","codestar-connections:HostArn","codestar-connections:InstallationId","codestar-connections:OwnerId","codestar-connections:PassedToService","codestar-connections:ProviderAction","codestar-connections:ProviderPermissionsRequired","codestar-connections:ProviderType","codestar-connections:ProviderTypeFilter","codestar-connections:RepositoryName"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestarconnections.html",
  },
  {
    ServiceShortName: "codestar-notifications",
    ServiceName: "AWS CodeStar Notifications",
    Actions:
      '["CreateNotificationRule","DeleteNotificationRule","DeleteTarget","DescribeNotificationRule","ListEventTypes","ListNotificationRules","ListTagsForResource","ListTargets","Subscribe","TagResource","Unsubscribe","UntagResource","UpdateNotificationRule"]',
    ARNFormat:
      "arn:aws:codestar-notifications:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:codestar-notifications:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","codestar-notifications:NotificationsForResource"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscodestarnotifications.html",
  },
  {
    ServiceShortName: "compute-optimizer",
    ServiceName: "AWS Compute Optimizer",
    Actions:
      '["DeleteRecommendationPreferences","DescribeRecommendationExportJobs","ExportAutoScalingGroupRecommendations","ExportEBSVolumeRecommendations","ExportEC2InstanceRecommendations","ExportLambdaFunctionRecommendations","GetAutoScalingGroupRecommendations","GetEBSVolumeRecommendations","GetEC2InstanceRecommendations","GetEC2RecommendationProjectedMetrics","GetEffectiveRecommendationPreferences","GetEnrollmentStatus","GetEnrollmentStatusesForOrganization","GetLambdaFunctionRecommendations","GetRecommendationPreferences","GetRecommendationSummaries","PutRecommendationPreferences","UpdateEnrollmentStatus"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: '"compute-optimizer:ResourceType"',
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscomputeoptimizer.html",
  },
  {
    ServiceShortName: "config",
    ServiceName: "AWS Config",
    Actions:
      '["BatchGetAggregateResourceConfig","BatchGetResourceConfig","DeleteAggregationAuthorization","DeleteConfigRule","DeleteConfigurationAggregator","DeleteConfigurationRecorder","DeleteConformancePack","DeleteDeliveryChannel","DeleteEvaluationResults","DeleteOrganizationConfigRule","DeleteOrganizationConformancePack","DeletePendingAggregationRequest","DeleteRemediationConfiguration","DeleteRemediationExceptions","DeleteResourceConfig","DeleteRetentionConfiguration","DeleteStoredQuery","DeliverConfigSnapshot","DescribeAggregateComplianceByConfigRules","DescribeAggregateComplianceByConformancePacks","DescribeAggregationAuthorizations","DescribeComplianceByConfigRule","DescribeComplianceByResource","DescribeConfigRuleEvaluationStatus","DescribeConfigRules","DescribeConfigurationAggregatorSourcesStatus","DescribeConfigurationAggregators","DescribeConfigurationRecorderStatus","DescribeConfigurationRecorders","DescribeConformancePackCompliance","DescribeConformancePackStatus","DescribeConformancePacks","DescribeDeliveryChannelStatus","DescribeDeliveryChannels","DescribeOrganizationConfigRuleStatuses","DescribeOrganizationConfigRules","DescribeOrganizationConformancePackStatuses","DescribeOrganizationConformancePacks","DescribePendingAggregationRequests","DescribeRemediationConfigurations","DescribeRemediationExceptions","DescribeRemediationExecutionStatus","DescribeRetentionConfigurations","GetAggregateComplianceDetailsByConfigRule","GetAggregateConfigRuleComplianceSummary","GetAggregateConformancePackComplianceSummary","GetAggregateDiscoveredResourceCounts","GetAggregateResourceConfig","GetComplianceDetailsByConfigRule","GetComplianceDetailsByResource","GetComplianceSummaryByConfigRule","GetComplianceSummaryByResourceType","GetConformancePackComplianceDetails","GetConformancePackComplianceSummary","GetDiscoveredResourceCounts","GetOrganizationConfigRuleDetailedStatus","GetOrganizationConformancePackDetailedStatus","GetResourceConfigHistory","GetStoredQuery","ListAggregateDiscoveredResources","ListDiscoveredResources","ListStoredQueries","ListTagsForResource","PutAggregationAuthorization","PutConfigRule","PutConfigurationAggregator","PutConfigurationRecorder","PutConformancePack","PutDeliveryChannel","PutEvaluations","PutExternalEvaluation","PutOrganizationConfigRule","PutOrganizationConformancePack","PutRemediationConfigurations","PutRemediationExceptions","PutResourceConfig","PutRetentionConfiguration","PutStoredQuery","SelectAggregateResourceConfig","SelectResourceConfig","StartConfigRulesEvaluation","StartConfigurationRecorder","StartRemediationExecution","StopConfigurationRecorder","TagResource","UntagResource"]',
    ARNFormat:
      "arn:${Partition}:config:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:config:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconfig.html",
  },
  {
    ServiceShortName: "awsconnector",
    ServiceName: "AWS Connector Service",
    Actions: '["GetConnectorHealth","RegisterConnector","ValidateConnectorId"]',
    ARNFormat:
      "arn:aws:<serviceName>:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:<serviceName>:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconnectorservice.html",
  },
  {
    ServiceShortName: "controltower",
    ServiceName: "AWS Control Tower",
    Actions:
      '["CreateManagedAccount","DeregisterManagedAccount","DeregisterOrganizationalUnit","DescribeAccountFactoryConfig","DescribeCoreService","DescribeGuardrail","DescribeGuardrailForTarget","DescribeManagedAccount","DescribeManagedOrganizationalUnit","DescribeSingleSignOn","DisableGuardrail","EnableGuardrail","GetAvailableUpdates","GetGuardrailComplianceStatus","GetHomeRegion","GetLandingZoneStatus","ListDirectoryGroups","ListEnabledGuardrails","ListGuardrailViolations","ListGuardrails","ListGuardrailsForTarget","ListManagedAccounts","ListManagedAccountsForGuardrail","ListManagedAccountsForParent","ListManagedOrganizationalUnits","ListManagedOrganizationalUnitsForGuardrail","ManageOrganizationalUnit","SetupLandingZone","UpdateAccountFactoryConfig"]',
    ARNFormat:
      "arn:aws:controltower:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:controltower:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscontroltower.html",
  },
  {
    ServiceShortName: "cur",
    ServiceName: "AWS Cost and Usage Report",
    Actions:
      '["DeleteReportDefinition","DescribeReportDefinitions","ModifyReportDefinition","PutReportDefinition"]',
    ARNFormat: "arn:aws:cur:<region>:<account_ID>:definition/<reportname>",
    ARNRegex: "^arn:aws:cur:.+:.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostandusagereport.html",
  },
  {
    ServiceShortName: "ce",
    ServiceName: "AWS Cost Explorer Service",
    Actions:
      '["CreateAnomalyMonitor","CreateAnomalySubscription","CreateCostCategoryDefinition","CreateNotificationSubscription","CreateReport","DeleteAnomalyMonitor","DeleteAnomalySubscription","DeleteCostCategoryDefinition","DeleteNotificationSubscription","DeleteReport","DescribeCostCategoryDefinition","DescribeNotificationSubscription","DescribeReport","GetAnomalies","GetAnomalyMonitors","GetAnomalySubscriptions","GetCostAndUsage","GetCostAndUsageWithResources","GetCostCategories","GetCostForecast","GetDimensionValues","GetPreferences","GetReservationCoverage","GetReservationPurchaseRecommendation","GetReservationUtilization","GetRightsizingRecommendation","GetSavingsPlansCoverage","GetSavingsPlansPurchaseRecommendation","GetSavingsPlansUtilization","GetSavingsPlansUtilizationDetails","GetTags","GetUsageForecast","ListCostCategoryDefinitions","ListTagsForResource","ProvideAnomalyFeedback","TagResource","UntagResource","UpdateAnomalyMonitor","UpdateAnomalySubscription","UpdateCostCategoryDefinition","UpdateNotificationSubscription","UpdatePreferences","UpdateReport"]',
    ARNFormat:
      "arn:${Partition}:ce::${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:ce::.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awscostexplorerservice.html",
  },
  {
    ServiceShortName: "dataexchange",
    ServiceName: "AWS Data Exchange",
    Actions:
      '["CancelJob","CreateAsset","CreateDataSet","CreateEventAction","CreateJob","CreateRevision","DeleteAsset","DeleteDataSet","DeleteEventAction","DeleteRevision","GetAsset","GetDataSet","GetEventAction","GetJob","GetRevision","ListDataSetRevisions","ListDataSets","ListEventActions","ListJobs","ListRevisionAssets","ListTagsForResource","PublishDataSet","RevokeRevision","SendApiAsset","StartJob","TagResource","UntagResource","UpdateAsset","UpdateDataSet","UpdateEventAction","UpdateRevision"]',
    ARNFormat:
      "arn:aws:dataexchange:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:dataexchange:.+:.*:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","dataexchange:JobType"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdataexchange.html",
  },
  {
    ServiceShortName: "datapipeline",
    ServiceName: "AWS Data Pipeline",
    Actions:
      '["ActivatePipeline","AddTags","CreatePipeline","DeactivatePipeline","DeletePipeline","DescribeObjects","DescribePipelines","EvaluateExpression","GetAccountLimits","GetPipelineDefinition","ListPipelines","PollForTask","PutAccountLimits","PutPipelineDefinition","QueryObjects","RemoveTags","ReportTaskProgress","ReportTaskRunnerHeartbeat","SetStatus","SetTaskStatus","ValidatePipelineDefinition"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:TagKeys","datapipeline:PipelineCreator","datapipeline:Tag","datapipeline:workerGroup"]',
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdatapipeline.html",
  },
  {
    ServiceShortName: "dms",
    ServiceName: "AWS Database Migration Service",
    Actions:
      '["AddTagsToResource","ApplyPendingMaintenanceAction","CancelReplicationTaskAssessmentRun","CreateEndpoint","CreateEventSubscription","CreateReplicationInstance","CreateReplicationSubnetGroup","CreateReplicationTask","DeleteCertificate","DeleteConnection","DeleteEndpoint","DeleteEventSubscription","DeleteReplicationInstance","DeleteReplicationSubnetGroup","DeleteReplicationTask","DeleteReplicationTaskAssessmentRun","DescribeAccountAttributes","DescribeApplicableIndividualAssessments","DescribeCertificates","DescribeConnections","DescribeEndpointSettings","DescribeEndpointTypes","DescribeEndpoints","DescribeEventCategories","DescribeEventSubscriptions","DescribeEvents","DescribeOrderableReplicationInstances","DescribeRefreshSchemasStatus","DescribeReplicationInstanceTaskLogs","DescribeReplicationInstances","DescribeReplicationSubnetGroups","DescribeReplicationTaskAssessmentResults","DescribeReplicationTaskAssessmentRuns","DescribeReplicationTaskIndividualAssessments","DescribeReplicationTasks","DescribeSchemas","DescribeTableStatistics","ImportCertificate","ListTagsForResource","ModifyEndpoint","ModifyEventSubscription","ModifyReplicationInstance","ModifyReplicationSubnetGroup","ModifyReplicationTask","MoveReplicationTask","RebootReplicationInstance","RefreshSchemas","ReloadTables","RemoveTagsFromResource","StartReplicationTask","StartReplicationTaskAssessment","StartReplicationTaskAssessmentRun","StopReplicationTask","TestConnection"]',
    ARNFormat: "arn:aws:dms:${Region}:${Account}:${Resource}",
    ARNRegex: "^arn:aws:dms:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","dms:cert-tag/${TagKey}","dms:endpoint-tag/${TagKey}","dms:es-tag/${TagKey}","dms:rep-tag/${TagKey}","dms:req-tag/${TagKey}","dms:subgrp-tag/${TagKey}","dms:task-tag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdatabasemigrationservice.html",
  },
  {
    ServiceShortName: "datasync",
    ServiceName: "AWS DataSync",
    Actions:
      '["CancelTaskExecution","CreateAgent","CreateLocationEfs","CreateLocationFsxLustre","CreateLocationFsxOpenZfs","CreateLocationFsxWindows","CreateLocationHdfs","CreateLocationNfs","CreateLocationObjectStorage","CreateLocationS3","CreateLocationSmb","CreateTask","DeleteAgent","DeleteLocation","DeleteTask","DescribeAgent","DescribeLocationEfs","DescribeLocationFsxLustre","DescribeLocationFsxOpenZfs","DescribeLocationFsxWindows","DescribeLocationHdfs","DescribeLocationNfs","DescribeLocationObjectStorage","DescribeLocationS3","DescribeLocationSmb","DescribeTask","DescribeTaskExecution","ListAgents","ListLocations","ListTagsForResource","ListTaskExecutions","ListTasks","StartTaskExecution","TagResource","UntagResource","UpdateAgent","UpdateLocationHdfs","UpdateLocationNfs","UpdateLocationObjectStorage","UpdateLocationSmb","UpdateTask","UpdateTaskExecution"]',
    ARNFormat:
      "arn:${Partition}:datasync:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:datasync:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdatasync.html",
  },
  {
    ServiceShortName: "deepcomposer",
    ServiceName: "AWS DeepComposer",
    Actions:
      '["AssociateCoupon","CreateAudio","CreateComposition","CreateModel","DeleteComposition","DeleteModel","GetComposition","GetModel","GetSampleModel","ListCompositions","ListModels","ListSampleModels","ListTagsForResource","ListTrainingTopics","TagResource","UntagResource","UpdateComposition","UpdateModel"]',
    ARNFormat:
      "arn:aws:deepcomposer:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:deepcomposer:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdeepcomposer.html",
  },
  {
    ServiceShortName: "deeplens",
    ServiceName: "AWS DeepLens",
    Actions:
      '["AssociateServiceRoleToAccount","BatchGetDevice","BatchGetModel","BatchGetProject","CreateDeviceCertificates","CreateModel","CreateProject","DeleteModel","DeleteProject","DeployProject","DeregisterDevice","GetAssociatedResources","GetDeploymentStatus","GetDevice","GetModel","GetProject","ImportProjectFromTemplate","ListDeployments","ListDevices","ListModels","ListProjects","RegisterDevice","RemoveProject","UpdateProject"]',
    ARNFormat:
      "arn:aws:deeplens:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:deeplens:.+:.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdeeplens.html",
  },
  {
    ServiceShortName: "deepracer",
    ServiceName: "AWS DeepRacer",
    Actions:
      '["AddLeaderboardAccessPermission","AdminGetAccountConfig","AdminListAssociatedResources","AdminListAssociatedUsers","AdminManageUser","AdminSetAccountConfig","CloneReinforcementLearningModel","CreateCar","CreateLeaderboard","CreateLeaderboardAccessToken","CreateLeaderboardSubmission","CreateReinforcementLearningModel","DeleteLeaderboard","DeleteModel","EditLeaderboard","GetAccountConfig","GetAlias","GetAssetUrl","GetCar","GetCars","GetEvaluation","GetLatestUserSubmission","GetLeaderboard","GetModel","GetPrivateLeaderboard","GetRankedUserSubmission","GetTrack","GetTrainingJob","ImportModel","ListEvaluations","ListLeaderboardSubmissions","ListLeaderboards","ListModels","ListPrivateLeaderboardParticipants","ListPrivateLeaderboards","ListSubscribedPrivateLeaderboards","ListTagsForResource","ListTracks","ListTrainingJobs","MigrateModels","PerformLeaderboardOperation","RemoveLeaderboardAccessPermission","SetAlias","StartEvaluation","StopEvaluation","StopTrainingReinforcementLearningModel","TagResource","TestRewardFunction","UntagResource","UpdateCar"]',
    ARNFormat:
      "arn:aws:deepracer:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:deepracer:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","deepracer:MultiUser","deepracer:UserToken"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdeepracer.html",
  },
  {
    ServiceShortName: "devicefarm",
    ServiceName: "AWS Device Farm",
    Actions:
      '["CreateDevicePool","CreateInstanceProfile","CreateNetworkProfile","CreateProject","CreateRemoteAccessSession","CreateTestGridProject","CreateTestGridUrl","CreateUpload","CreateVPCEConfiguration","DeleteDevicePool","DeleteInstanceProfile","DeleteNetworkProfile","DeleteProject","DeleteRemoteAccessSession","DeleteRun","DeleteTestGridProject","DeleteUpload","DeleteVPCEConfiguration","GetAccountSettings","GetDevice","GetDeviceInstance","GetDevicePool","GetDevicePoolCompatibility","GetInstanceProfile","GetJob","GetNetworkProfile","GetOfferingStatus","GetProject","GetRemoteAccessSession","GetRun","GetSuite","GetTest","GetTestGridProject","GetTestGridSession","GetUpload","GetVPCEConfiguration","InstallToRemoteAccessSession","ListArtifacts","ListDeviceInstances","ListDevicePools","ListDevices","ListInstanceProfiles","ListJobs","ListNetworkProfiles","ListOfferingPromotions","ListOfferingTransactions","ListOfferings","ListProjects","ListRemoteAccessSessions","ListRuns","ListSamples","ListSuites","ListTagsForResource","ListTestGridProjects","ListTestGridSessionActions","ListTestGridSessionArtifacts","ListTestGridSessions","ListTests","ListUniqueProblems","ListUploads","ListVPCEConfigurations","PurchaseOffering","RenewOffering","ScheduleRun","StopJob","StopRemoteAccessSession","StopRun","TagResource","UntagResource","UpdateDeviceInstance","UpdateDevicePool","UpdateInstanceProfile","UpdateNetworkProfile","UpdateProject","UpdateTestGridProject","UpdateUpload","UpdateVPCEConfiguration"]',
    ARNFormat:
      "arn:aws:devicefarm:${Region}:${Account}:${ResourceType}:${ResourceId}",
    ARNRegex: "^arn:aws:devicefarm:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdevicefarm.html",
  },
  {
    ServiceShortName: "directconnect",
    ServiceName: "AWS Direct Connect",
    Actions:
      '["AcceptDirectConnectGatewayAssociationProposal","AllocateConnectionOnInterconnect","AllocateHostedConnection","AllocatePrivateVirtualInterface","AllocatePublicVirtualInterface","AllocateTransitVirtualInterface","AssociateConnectionWithLag","AssociateHostedConnection","AssociateMacSecKey","AssociateVirtualInterface","ConfirmConnection","ConfirmCustomerAgreement","ConfirmPrivateVirtualInterface","ConfirmPublicVirtualInterface","ConfirmTransitVirtualInterface","CreateBGPPeer","CreateConnection","CreateDirectConnectGateway","CreateDirectConnectGatewayAssociation","CreateDirectConnectGatewayAssociationProposal","CreateInterconnect","CreateLag","CreatePrivateVirtualInterface","CreatePublicVirtualInterface","CreateTransitVirtualInterface","DeleteBGPPeer","DeleteConnection","DeleteDirectConnectGateway","DeleteDirectConnectGatewayAssociation","DeleteDirectConnectGatewayAssociationProposal","DeleteInterconnect","DeleteLag","DeleteVirtualInterface","DescribeConnectionLoa","DescribeConnections","DescribeConnectionsOnInterconnect","DescribeCustomerMetadata","DescribeDirectConnectGatewayAssociationProposals","DescribeDirectConnectGatewayAssociations","DescribeDirectConnectGatewayAttachments","DescribeDirectConnectGateways","DescribeHostedConnections","DescribeInterconnectLoa","DescribeInterconnects","DescribeLags","DescribeLoa","DescribeLocations","DescribeRouterConfiguration","DescribeTags","DescribeVirtualGateways","DescribeVirtualInterfaces","DisassociateConnectionFromLag","DisassociateMacSecKey","ListVirtualInterfaceTestHistory","StartBgpFailoverTest","StopBgpFailoverTest","TagResource","UntagResource","UpdateConnection","UpdateDirectConnectGateway","UpdateDirectConnectGatewayAssociation","UpdateLag","UpdateVirtualInterfaceAttributes"]',
    ARNFormat:
      "arn:${Partition}:directconnect:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:directconnect:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectconnect.html",
  },
  {
    ServiceShortName: "ds",
    ServiceName: "AWS Directory Service",
    Actions:
      '["AcceptSharedDirectory","AddIpRoutes","AddRegion","AddTagsToResource","AuthorizeApplication","CancelSchemaExtension","CheckAlias","ConnectDirectory","CreateAlias","CreateComputer","CreateConditionalForwarder","CreateDirectory","CreateIdentityPoolDirectory","CreateLogSubscription","CreateMicrosoftAD","CreateSnapshot","CreateTrust","DeleteConditionalForwarder","DeleteDirectory","DeleteLogSubscription","DeleteSnapshot","DeleteTrust","DeregisterCertificate","DeregisterEventTopic","DescribeCertificate","DescribeClientAuthenticationSettings","DescribeConditionalForwarders","DescribeDirectories","DescribeDomainControllers","DescribeEventTopics","DescribeLDAPSSettings","DescribeRegions","DescribeSharedDirectories","DescribeSnapshots","DescribeTrusts","DisableClientAuthentication","DisableLDAPS","DisableRadius","DisableSso","EnableClientAuthentication","EnableLDAPS","EnableRadius","EnableSso","GetAuthorizedApplicationDetails","GetDirectoryLimits","GetSnapshotLimits","ListAuthorizedApplications","ListCertificates","ListIpRoutes","ListLogSubscriptions","ListSchemaExtensions","ListTagsForResource","RegisterCertificate","RegisterEventTopic","RejectSharedDirectory","RemoveIpRoutes","RemoveRegion","RemoveTagsFromResource","ResetUserPassword","RestoreFromSnapshot","ShareDirectory","StartSchemaExtension","UnauthorizeApplication","UnshareDirectory","UpdateConditionalForwarder","UpdateNumberOfDomainControllers","UpdateRadius","UpdateTrust","VerifyTrust"]',
    ARNFormat: "arn:${Partition}:ds:${Region}:${Account}:${RelativeId}",
    ARNRegex: "^arn:${Partition}:ds:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsdirectoryservice.html",
  },
  {
    ServiceShortName: "elasticbeanstalk",
    ServiceName: "AWS Elastic Beanstalk",
    Actions:
      '["AbortEnvironmentUpdate","AddTags","ApplyEnvironmentManagedAction","AssociateEnvironmentOperationsRole","CheckDNSAvailability","ComposeEnvironments","CreateApplication","CreateApplicationVersion","CreateConfigurationTemplate","CreateEnvironment","CreatePlatformVersion","CreateStorageLocation","DeleteApplication","DeleteApplicationVersion","DeleteConfigurationTemplate","DeleteEnvironmentConfiguration","DeletePlatformVersion","DescribeAccountAttributes","DescribeApplicationVersions","DescribeApplications","DescribeConfigurationOptions","DescribeConfigurationSettings","DescribeEnvironmentHealth","DescribeEnvironmentManagedActionHistory","DescribeEnvironmentManagedActions","DescribeEnvironmentResources","DescribeEnvironments","DescribeEvents","DescribeInstancesHealth","DescribePlatformVersion","DisassociateEnvironmentOperationsRole","ListAvailableSolutionStacks","ListPlatformBranches","ListPlatformVersions","ListTagsForResource","PutInstanceStatistics","RebuildEnvironment","RemoveTags","RequestEnvironmentInfo","RestartAppServer","RetrieveEnvironmentInfo","SwapEnvironmentCNAMEs","TerminateEnvironment","UpdateApplication","UpdateApplicationResourceLifecycle","UpdateApplicationVersion","UpdateConfigurationTemplate","UpdateEnvironment","UpdateTagsForResource","ValidateConfigurationSettings"]',
    ARNFormat:
      "arn:aws:elasticbeanstalk:${Region}:${AccountID}:${ResourceType}/${PathToResource}",
    ARNRegex: "^arn:aws:elasticbeanstalk:.+:.*:.+/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","elasticbeanstalk:FromApplication","elasticbeanstalk:FromApplicationVersion","elasticbeanstalk:FromConfigurationTemplate","elasticbeanstalk:FromEnvironment","elasticbeanstalk:FromPlatform","elasticbeanstalk:FromSolutionStack","elasticbeanstalk:InApplication"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselasticbeanstalk.html",
  },
  {
    ServiceShortName: "drs",
    ServiceName: "AWS Elastic Disaster Recovery",
    Actions:
      '["AssociateFailbackClientToRecoveryInstanceForDrs","BatchCreateVolumeSnapshotGroupForDrs","BatchDeleteSnapshotRequestForDrs","CreateRecoveryInstanceForDrs","CreateReplicationConfigurationTemplate","CreateSessionForDrs","CreateSourceServerForDrs","DeleteJob","DeleteRecoveryInstance","DeleteReplicationConfigurationTemplate","DeleteSourceServer","DescribeJobLogItems","DescribeJobs","DescribeRecoveryInstances","DescribeRecoverySnapshots","DescribeReplicationConfigurationTemplates","DescribeReplicationServerAssociationsForDrs","DescribeSnapshotRequestsForDrs","DescribeSourceServers","DisconnectRecoveryInstance","DisconnectSourceServer","GetAgentCommandForDrs","GetAgentConfirmedResumeInfoForDrs","GetAgentInstallationAssetsForDrs","GetAgentReplicationInfoForDrs","GetAgentRuntimeConfigurationForDrs","GetAgentSnapshotCreditsForDrs","GetChannelCommandsForDrs","GetFailbackCommandForDrs","GetFailbackLaunchRequestedForDrs","GetFailbackReplicationConfiguration","GetLaunchConfiguration","GetReplicationConfiguration","GetSuggestedFailbackClientDeviceMappingForDrs","InitializeService","IssueAgentCertificateForDrs","ListTagsForResource","NotifyAgentAuthenticationForDrs","NotifyAgentConnectedForDrs","NotifyAgentDisconnectedForDrs","NotifyAgentReplicationProgressForDrs","NotifyConsistencyAttainedForDrs","NotifyReplicationServerAuthenticationForDrs","RetryDataReplication","SendAgentLogsForDrs","SendAgentMetricsForDrs","SendChannelCommandResultForDrs","SendClientLogsForDrs","SendClientMetricsForDrs","StartFailbackLaunch","StartRecovery","StopFailback","TagResource","TerminateRecoveryInstances","UntagResource","UpdateAgentBacklogForDrs","UpdateAgentConversionInfoForDrs","UpdateAgentReplicationInfoForDrs","UpdateAgentReplicationProcessStateForDrs","UpdateAgentSourcePropertiesForDrs","UpdateFailbackClientDeviceMappingForDrs","UpdateFailbackClientLastSeenForDrs","UpdateFailbackReplicationConfiguration","UpdateLaunchConfiguration","UpdateReplicationCertificateForDrs","UpdateReplicationConfiguration","UpdateReplicationConfigurationTemplate"]',
    ARNFormat:
      "arn:aws:drs:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:drs:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","drs:EC2InstanceARN"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselasticdisasterrecovery.html",
  },
  {
    ServiceShortName: "elemental-appliances-software",
    ServiceName: "AWS Elemental Appliances and Software",
    Actions:
      '["CreateQuote","GetQuote","ListQuotes","ListTagsForResource","TagResource","UntagResource","UpdateQuote"]',
    ARNFormat:
      "arn:aws:elemental-appliances-software:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:elemental-appliances-software:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalappliancesandsoftware.html",
  },
  {
    ServiceShortName: "elemental-activations",
    ServiceName: "AWS Elemental Appliances and Software Activation Service",
    Actions:
      '["CompleteAccountRegistration","CompleteFileUpload","DownloadSoftware","GenerateLicenses","GetActivation","ListTagsForResource","StartAccountRegistration","StartFileUpload","TagResource","UntagResource"]',
    ARNFormat:
      "arn:aws:elemental-activations:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:elemental-activations:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalappliancesandsoftwareactivationservice.html",
  },
  {
    ServiceShortName: "mediaconnect",
    ServiceName: "AWS Elemental MediaConnect",
    Actions:
      '["AddFlowMediaStreams","AddFlowOutputs","AddFlowSources","AddFlowVpcInterfaces","CreateFlow","DeleteFlow","DescribeFlow","DescribeOffering","DescribeReservation","GrantFlowEntitlements","ListEntitlements","ListFlows","ListOfferings","ListReservations","ListTagsForResource","PurchaseOffering","RemoveFlowMediaStream","RemoveFlowOutput","RemoveFlowSource","RemoveFlowVpcInterface","RevokeFlowEntitlement","StartFlow","StopFlow","TagResource","UntagResource","UpdateFlow","UpdateFlowEntitlement","UpdateFlowMediaStream","UpdateFlowOutput","UpdateFlowSource"]',
    ARNFormat:
      "arn:${Partition}:mediaconnect:${Region}:${Account}:<namespace>:<relative-id>:<relative-name>",
    ARNRegex: "^arn:${Partition}:mediaconnect:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconnect.html",
  },
  {
    ServiceShortName: "mediaconvert",
    ServiceName: "AWS Elemental MediaConvert",
    Actions:
      '["AssociateCertificate","CancelJob","CreateJob","CreateJobTemplate","CreatePreset","CreateQueue","DeleteJobTemplate","DeletePolicy","DeletePreset","DeleteQueue","DescribeEndpoints","DisassociateCertificate","GetJob","GetJobTemplate","GetPolicy","GetPreset","GetQueue","ListJobTemplates","ListJobs","ListPresets","ListQueues","ListTagsForResource","PutPolicy","TagResource","UntagResource","UpdateJobTemplate","UpdatePreset","UpdateQueue"]',
    ARNFormat:
      "arn:${Partition}:mediaconvert:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:mediaconvert:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediaconvert.html",
  },
  {
    ServiceShortName: "medialive",
    ServiceName: "AWS Elemental MediaLive",
    Actions:
      '["AcceptInputDeviceTransfer","BatchDelete","BatchStart","BatchStop","BatchUpdateSchedule","CancelInputDeviceTransfer","ClaimDevice","CreateChannel","CreateInput","CreateInputSecurityGroup","CreateMultiplex","CreateMultiplexProgram","CreatePartnerInput","CreateTags","DeleteChannel","DeleteInput","DeleteInputSecurityGroup","DeleteMultiplex","DeleteMultiplexProgram","DeleteReservation","DeleteSchedule","DeleteTags","DescribeChannel","DescribeInput","DescribeInputDevice","DescribeInputDeviceThumbnail","DescribeInputSecurityGroup","DescribeMultiplex","DescribeMultiplexProgram","DescribeOffering","DescribeReservation","DescribeSchedule","ListChannels","ListInputDeviceTransfers","ListInputDevices","ListInputSecurityGroups","ListInputs","ListMultiplexPrograms","ListMultiplexes","ListOfferings","ListReservations","ListTagsForResource","PurchaseOffering","RejectInputDeviceTransfer","StartChannel","StartMultiplex","StopChannel","StopMultiplex","TransferInputDevice","UpdateChannel","UpdateChannelClass","UpdateInput","UpdateInputDevice","UpdateInputSecurityGroup","UpdateMultiplex","UpdateMultiplexProgram","UpdateReservation"]',
    ARNFormat:
      "arn:${Partition}:medialive:${Region}:${Account}:${ResourceType}:${ResourceId}",
    ARNRegex: "^arn:${Partition}:medialive:${Region}:${Account}:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmedialive.html",
  },
  {
    ServiceShortName: "mediapackage",
    ServiceName: "AWS Elemental MediaPackage",
    Actions:
      '["ConfigureLogs","CreateChannel","CreateHarvestJob","CreateOriginEndpoint","DeleteChannel","DeleteOriginEndpoint","DescribeChannel","DescribeHarvestJob","DescribeOriginEndpoint","ListChannels","ListHarvestJobs","ListOriginEndpoints","ListTagsForResource","RotateChannelCredentials","RotateIngestEndpointCredentials","TagResource","UntagResource","UpdateChannel","UpdateOriginEndpoint"]',
    ARNFormat:
      "arn:aws:mediapackage:${Region}:${Account}:${ResourceType}/${ResourceIdentifier}",
    ARNRegex: "^arn:aws:mediapackage:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediapackage.html",
  },
  {
    ServiceShortName: "mediapackage-vod",
    ServiceName: "AWS Elemental MediaPackage VOD",
    Actions:
      '["ConfigureLogs","CreateAsset","CreatePackagingConfiguration","CreatePackagingGroup","DeleteAsset","DeletePackagingConfiguration","DeletePackagingGroup","DescribeAsset","DescribePackagingConfiguration","DescribePackagingGroup","ListAssets","ListPackagingConfigurations","ListPackagingGroups","ListTagsForResource","TagResource","UntagResource","UpdatePackagingGroup"]',
    ARNFormat:
      "arn:aws:mediapackage-vod:${Region}:${Account}:${ResourceType}/${ResourceIdentifier}",
    ARNRegex: "^arn:aws:mediapackage-vod:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediapackagevod.html",
  },
  {
    ServiceShortName: "mediastore",
    ServiceName: "AWS Elemental MediaStore",
    Actions:
      '["CreateContainer","DeleteContainer","DeleteContainerPolicy","DeleteCorsPolicy","DeleteLifecyclePolicy","DeleteMetricPolicy","DeleteObject","DescribeContainer","DescribeObject","GetContainerPolicy","GetCorsPolicy","GetLifecyclePolicy","GetMetricPolicy","GetObject","ListContainers","ListItems","ListTagsForResource","PutContainerPolicy","PutCorsPolicy","PutLifecyclePolicy","PutMetricPolicy","PutObject","StartAccessLogging","StopAccessLogging","TagResource","UntagResource"]',
    ARNFormat: "arn:aws:mediastore:${Region}:${Account}:${Resource}",
    ARNRegex: "^arn:aws:mediastore:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediastore.html",
  },
  {
    ServiceShortName: "mediatailor",
    ServiceName: "AWS Elemental MediaTailor",
    Actions:
      '["ConfigureLogsForPlaybackConfiguration","CreateChannel","CreateLiveSource","CreatePrefetchSchedule","CreateProgram","CreateSourceLocation","CreateVodSource","DeleteChannel","DeleteChannelPolicy","DeleteLiveSource","DeletePlaybackConfiguration","DeletePrefetchSchedule","DeleteProgram","DeleteSourceLocation","DeleteVodSource","DescribeChannel","DescribeLiveSource","DescribeProgram","DescribeSourceLocation","DescribeVodSource","GetChannelPolicy","GetChannelSchedule","GetPlaybackConfiguration","GetPrefetchSchedule","ListAlerts","ListChannels","ListLiveSources","ListPlaybackConfigurations","ListPrefetchSchedules","ListSourceLocations","ListTagsForResource","ListVodSources","PutChannelPolicy","PutPlaybackConfiguration","StartChannel","StopChannel","TagResource","UntagResource","UpdateChannel","UpdateLiveSource","UpdateSourceLocation","UpdateVodSource"]',
    ARNFormat:
      "arn:aws:mediatailor:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:mediatailor:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awselementalmediatailor.html",
  },
  {
    ServiceShortName: "fis",
    ServiceName: "AWS Fault Injection Simulator",
    Actions:
      '["CreateExperimentTemplate","DeleteExperimentTemplate","GetAction","GetExperiment","GetExperimentTemplate","GetTargetResourceType","InjectApiInternalError","InjectApiThrottleError","InjectApiUnavailableError","ListActions","ListExperimentTemplates","ListExperiments","ListTagsForResource","ListTargetResourceTypes","StartExperiment","StopExperiment","TagResource","UntagResource","UpdateExperimentTemplate"]',
    ARNFormat:
      "arn:aws:fis:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:fis:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","fis:Operations","fis:Percentage","fis:Service","fis:Targets"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsfaultinjectionsimulator.html",
  },
  {
    ServiceShortName: "fms",
    ServiceName: "AWS Firewall Manager",
    Actions:
      '["AssociateAdminAccount","AssociateThirdPartyFirewall","DeleteAppsList","DeleteNotificationChannel","DeletePolicy","DeleteProtocolsList","DisassociateAdminAccount","DisassociateThirdPartyFirewall","GetAdminAccount","GetAppsList","GetComplianceDetail","GetNotificationChannel","GetPolicy","GetProtectionStatus","GetProtocolsList","GetThirdPartyFirewallAssociationStatus","GetViolationDetails","ListAppsLists","ListComplianceStatus","ListMemberAccounts","ListPolicies","ListProtocolsLists","ListTagsForResource","ListThirdPartyFirewallFirewallPolicies","PutAppsList","PutNotificationChannel","PutPolicy","PutProtocolsList","TagResource","UntagResource"]',
    ARNFormat: "arn:${Partition}:fms:${Region}:${Account}:${Resource}/${Id}",
    ARNRegex: "^arn:${Partition}:fms:.+:[0-9]+:.+/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsfirewallmanager.html",
  },
  {
    ServiceShortName: "globalaccelerator",
    ServiceName: "AWS Global Accelerator",
    Actions:
      '["AddCustomRoutingEndpoints","AdvertiseByoipCidr","AllowCustomRoutingTraffic","CreateAccelerator","CreateCustomRoutingAccelerator","CreateCustomRoutingEndpointGroup","CreateCustomRoutingListener","CreateEndpointGroup","CreateListener","DeleteAccelerator","DeleteCustomRoutingAccelerator","DeleteCustomRoutingEndpointGroup","DeleteCustomRoutingListener","DeleteEndpointGroup","DeleteListener","DenyCustomRoutingTraffic","DeprovisionByoipCidr","DescribeAccelerator","DescribeAcceleratorAttributes","DescribeCustomRoutingAccelerator","DescribeCustomRoutingAcceleratorAttributes","DescribeCustomRoutingEndpointGroup","DescribeCustomRoutingListener","DescribeEndpointGroup","DescribeListener","ListAccelerators","ListByoipCidrs","ListCustomRoutingAccelerators","ListCustomRoutingEndpointGroups","ListCustomRoutingListeners","ListCustomRoutingPortMappings","ListCustomRoutingPortMappingsByDestination","ListEndpointGroups","ListListeners","ListTagsForResource","ProvisionByoipCidr","RemoveCustomRoutingEndpoints","TagResource","UntagResource","UpdateAccelerator","UpdateAcceleratorAttributes","UpdateCustomRoutingAccelerator","UpdateCustomRoutingAcceleratorAttributes","UpdateCustomRoutingListener","UpdateEndpointGroup","UpdateListener","WithdrawByoipCidr"]',
    ARNFormat:
      "arn:aws:globalaccelerator::${Account}:accelerator/${AcceleratorId}",
    ARNRegex: "^arn:aws:globalaccelerator::.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsglobalaccelerator.html",
  },
  {
    ServiceShortName: "glue",
    ServiceName: "AWS Glue",
    Actions:
      '["BatchCreatePartition","BatchDeleteConnection","BatchDeletePartition","BatchDeleteTable","BatchDeleteTableVersion","BatchGetBlueprints","BatchGetCrawlers","BatchGetCustomEntityTypes","BatchGetDevEndpoints","BatchGetJobs","BatchGetPartition","BatchGetTriggers","BatchGetWorkflows","BatchStopJobRun","BatchUpdatePartition","CancelMLTaskRun","CancelStatement","CheckSchemaVersionValidity","CreateBlueprint","CreateClassifier","CreateConnection","CreateCrawler","CreateCustomEntityType","CreateDatabase","CreateDevEndpoint","CreateJob","CreateMLTransform","CreatePartition","CreatePartitionIndex","CreateRegistry","CreateSchema","CreateScript","CreateSecurityConfiguration","CreateSession","CreateTable","CreateTrigger","CreateUserDefinedFunction","CreateWorkflow","DeleteBlueprint","DeleteClassifier","DeleteColumnStatisticsForPartition","DeleteColumnStatisticsForTable","DeleteConnection","DeleteCrawler","DeleteCustomEntityType","DeleteDatabase","DeleteDevEndpoint","DeleteJob","DeleteMLTransform","DeletePartition","DeletePartitionIndex","DeleteRegistry","DeleteResourcePolicy","DeleteSchema","DeleteSchemaVersions","DeleteSecurityConfiguration","DeleteSession","DeleteTable","DeleteTableVersion","DeleteTrigger","DeleteUserDefinedFunction","DeleteWorkflow","GetBlueprint","GetBlueprintRun","GetBlueprintRuns","GetCatalogImportStatus","GetClassifier","GetClassifiers","GetColumnStatisticsForPartition","GetColumnStatisticsForTable","GetConnection","GetConnections","GetCrawler","GetCrawlerMetrics","GetCrawlers","GetCustomEntityType","GetDataCatalogEncryptionSettings","GetDatabase","GetDatabases","GetDataflowGraph","GetDevEndpoint","GetDevEndpoints","GetJob","GetJobBookmark","GetJobRun","GetJobRuns","GetJobs","GetMLTaskRun","GetMLTaskRuns","GetMLTransform","GetMLTransforms","GetMapping","GetPartition","GetPartitionIndexes","GetPartitions","GetPlan","GetRegistry","GetResourcePolicies","GetResourcePolicy","GetSchema","GetSchemaByDefinition","GetSchemaVersion","GetSchemaVersionsDiff","GetSecurityConfiguration","GetSecurityConfigurations","GetSession","GetStatement","GetTable","GetTableVersion","GetTableVersions","GetTables","GetTags","GetTrigger","GetTriggers","GetUserDefinedFunction","GetUserDefinedFunctions","GetWorkflow","GetWorkflowRun","GetWorkflowRunProperties","GetWorkflowRuns","ImportCatalogToGlue","ListBlueprints","ListCrawlers","ListCustomEntityTypes","ListDevEndpoints","ListJobs","ListMLTransforms","ListRegistries","ListSchemaVersions","ListSchemas","ListSessions","ListStatements","ListTriggers","ListWorkflows","NotifyEvent","PutDataCatalogEncryptionSettings","PutResourcePolicy","PutSchemaVersionMetadata","PutWorkflowRunProperties","QuerySchemaVersionMetadata","RegisterSchemaVersion","RemoveSchemaVersionMetadata","ResetJobBookmark","ResumeWorkflowRun","RunStatement","SearchTables","StartBlueprintRun","StartCrawler","StartCrawlerSchedule","StartExportLabelsTaskRun","StartImportLabelsTaskRun","StartJobRun","StartMLEvaluationTaskRun","StartMLLabelingSetGenerationTaskRun","StartTrigger","StartWorkflowRun","StopCrawler","StopCrawlerSchedule","StopSession","StopTrigger","StopWorkflowRun","TagResource","UntagResource","UpdateBlueprint","UpdateClassifier","UpdateColumnStatisticsForPartition","UpdateColumnStatisticsForTable","UpdateConnection","UpdateCrawler","UpdateCrawlerSchedule","UpdateDatabase","UpdateDevEndpoint","UpdateJob","UpdateMLTransform","UpdatePartition","UpdateRegistry","UpdateSchema","UpdateTable","UpdateTrigger","UpdateUserDefinedFunction","UpdateWorkflow","UseMLTransforms"]',
    ARNFormat:
      "arn:aws:glue:${Region}:${AccountID}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:aws:glue:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","glue:CredentialIssuingService","glue:RoleAssumedBy","glue:SecurityGroupIds","glue:SubnetIds","glue:VpcIds"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsglue.html",
  },
  {
    ServiceShortName: "databrew",
    ServiceName: "AWS Glue DataBrew",
    Actions:
      '["BatchDeleteRecipeVersion","CreateDataset","CreateProfileJob","CreateProject","CreateRecipe","CreateRecipeJob","CreateRuleset","CreateSchedule","DeleteDataset","DeleteJob","DeleteProject","DeleteRecipeVersion","DeleteRuleset","DeleteSchedule","DescribeDataset","DescribeJob","DescribeJobRun","DescribeProject","DescribeRecipe","DescribeRuleset","DescribeSchedule","ListDatasets","ListJobRuns","ListJobs","ListProjects","ListRecipeVersions","ListRecipes","ListRulesets","ListSchedules","ListTagsForResource","PublishRecipe","SendProjectSessionAction","StartJobRun","StartProjectSession","StopJobRun","TagResource","UntagResource","UpdateDataset","UpdateProfileJob","UpdateProject","UpdateRecipe","UpdateRecipeJob","UpdateRuleset","UpdateSchedule"]',
    ARNFormat:
      "arn:${Partition}:databrew:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:databrew:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsgluedatabrew.html",
  },
  {
    ServiceShortName: "groundstation",
    ServiceName: "AWS Ground Station",
    Actions:
      '["CancelContact","CreateConfig","CreateDataflowEndpointGroup","CreateMissionProfile","DeleteConfig","DeleteDataflowEndpointGroup","DeleteMissionProfile","DescribeContact","GetConfig","GetDataflowEndpointGroup","GetMinuteUsage","GetMissionProfile","GetSatellite","ListConfigs","ListContacts","ListDataflowEndpointGroups","ListGroundStations","ListMissionProfiles","ListSatellites","ListTagsForResource","ReserveContact","TagResource","UntagResource","UpdateConfig","UpdateMissionProfile"]',
    ARNFormat:
      "arn:aws:groundstation:${Region}:${AccountID}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:groundstation:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","groundstation:ConfigId","groundstation:ConfigType","groundstation:ContactId","groundstation:DataflowEndpointGroupId","groundstation:GroundStationId","groundstation:MissionProfileId","groundstation:SatelliteId"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsgroundstation.html",
  },
  {
    ServiceShortName: "health",
    ServiceName: "AWS Health APIs and Notifications",
    Actions:
      '["DescribeAffectedAccountsForOrganization","DescribeAffectedEntities","DescribeAffectedEntitiesForOrganization","DescribeEntityAggregates","DescribeEventAggregates","DescribeEventDetails","DescribeEventDetailsForOrganization","DescribeEventTypes","DescribeEvents","DescribeEventsForOrganization","DescribeHealthServiceStatusForOrganization","DisableHealthServiceAccessForOrganization","EnableHealthServiceAccessForOrganization"]',
    ARNFormat: "arn:aws:health::${Namespace}:${RelativeId}",
    ARNRegex: "^arn:aws:health:[^:]*:[^:]*:.+",
    conditionKeys: '["health:eventTypeCode","health:service"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awshealthapisandnotifications.html",
  },
  {
    ServiceShortName: "access-analyzer",
    ServiceName: "AWS IAM Access Analyzer",
    Actions:
      '["ApplyArchiveRule","CancelPolicyGeneration","CreateAccessPreview","CreateAnalyzer","CreateArchiveRule","DeleteAnalyzer","DeleteArchiveRule","GetAccessPreview","GetAnalyzedResource","GetAnalyzer","GetArchiveRule","GetFinding","GetGeneratedPolicy","ListAccessPreviewFindings","ListAccessPreviews","ListAnalyzedResources","ListAnalyzers","ListArchiveRules","ListFindings","ListPolicyGenerations","ListTagsForResource","StartPolicyGeneration","StartResourceScan","TagResource","UntagResource","UpdateArchiveRule","UpdateFindings","ValidatePolicy"]',
    ARNFormat:
      "arn:${Partition}:access-analyzer:${Region}:${Account}:analyzer/${AnalyzerName}",
    ARNRegex: "^arn:${Partition}:access-analyzer:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiamaccessanalyzer.html",
  },
  {
    ServiceShortName: "identitystore",
    ServiceName: "AWS Identity Store",
    Actions: '["DescribeGroup","DescribeUser","ListGroups","ListUsers"]',
    ARNFormat:
      "arn:${Partition}:identitystore:${Region}:${Account}:<relative-id>",
    ARNRegex: "^arn:${Partition}:identitystore:${Region}:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsidentitystore.html",
  },
  {
    ServiceShortName: "identity-sync",
    ServiceName: "AWS Identity Synchronization Service",
    Actions:
      '["CreateSyncFilter","CreateSyncProfile","CreateSyncTarget","DeleteSyncFilter","DeleteSyncProfile","DeleteSyncTarget","GetSyncProfile","GetSyncTarget","ListSyncFilters","StartSync","StopSync","UpdateSyncTarget"]',
    ARNFormat:
      "^arn:${Partition}:identity-sync:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:identity-sync:.+:.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsidentitysynchronizationservice.html",
  },
  {
    ServiceShortName: "importexport",
    ServiceName: "AWS Import Export Disk Service",
    Actions:
      '["CancelJob","CreateJob","GetShippingLabel","GetStatus","ListJobs","UpdateJob"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsimportexportdiskservice.html",
  },
  {
    ServiceShortName: "iot",
    ServiceName: "AWS IoT",
    Actions:
      '["AcceptCertificateTransfer","AddThingToBillingGroup","AddThingToThingGroup","AssociateTargetsWithJob","AttachPolicy","AttachPrincipalPolicy","AttachSecurityProfile","AttachThingPrincipal","CancelAuditMitigationActionsTask","CancelAuditTask","CancelCertificateTransfer","CancelDetectMitigationActionsTask","CancelJob","CancelJobExecution","ClearDefaultAuthorizer","CloseTunnel","ConfirmTopicRuleDestination","Connect","CreateAuditSuppression","CreateAuthorizer","CreateBillingGroup","CreateCertificateFromCsr","CreateCustomMetric","CreateDimension","CreateDomainConfiguration","CreateDynamicThingGroup","CreateFleetMetric","CreateJob","CreateJobTemplate","CreateKeysAndCertificate","CreateMitigationAction","CreateOTAUpdate","CreatePolicy","CreatePolicyVersion","CreateProvisioningClaim","CreateProvisioningTemplate","CreateProvisioningTemplateVersion","CreateRoleAlias","CreateScheduledAudit","CreateSecurityProfile","CreateStream","CreateThing","CreateThingGroup","CreateThingType","CreateTopicRule","CreateTopicRuleDestination","DeleteAccountAuditConfiguration","DeleteAuditSuppression","DeleteAuthorizer","DeleteBillingGroup","DeleteCACertificate","DeleteCertificate","DeleteCustomMetric","DeleteDimension","DeleteDomainConfiguration","DeleteDynamicThingGroup","DeleteFleetMetric","DeleteJob","DeleteJobExecution","DeleteJobTemplate","DeleteMitigationAction","DeleteOTAUpdate","DeletePolicy","DeletePolicyVersion","DeleteProvisioningTemplate","DeleteProvisioningTemplateVersion","DeleteRegistrationCode","DeleteRoleAlias","DeleteScheduledAudit","DeleteSecurityProfile","DeleteStream","DeleteThing","DeleteThingGroup","DeleteThingShadow","DeleteThingType","DeleteTopicRule","DeleteTopicRuleDestination","DeleteV2LoggingLevel","DeprecateThingType","DescribeAccountAuditConfiguration","DescribeAuditFinding","DescribeAuditMitigationActionsTask","DescribeAuditSuppression","DescribeAuditTask","DescribeAuthorizer","DescribeBillingGroup","DescribeCACertificate","DescribeCertificate","DescribeCustomMetric","DescribeDefaultAuthorizer","DescribeDetectMitigationActionsTask","DescribeDimension","DescribeDomainConfiguration","DescribeEndpoint","DescribeEventConfigurations","DescribeFleetMetric","DescribeIndex","DescribeJob","DescribeJobExecution","DescribeJobTemplate","DescribeManagedJobTemplate","DescribeMitigationAction","DescribeProvisioningTemplate","DescribeProvisioningTemplateVersion","DescribeRoleAlias","DescribeScheduledAudit","DescribeSecurityProfile","DescribeStream","DescribeThing","DescribeThingGroup","DescribeThingRegistrationTask","DescribeThingType","DescribeTunnel","DetachPolicy","DetachPrincipalPolicy","DetachSecurityProfile","DetachThingPrincipal","DisableTopicRule","EnableTopicRule","GetBehaviorModelTrainingSummaries","GetBucketsAggregation","GetCardinality","GetEffectivePolicies","GetIndexingConfiguration","GetJobDocument","GetLoggingOptions","GetOTAUpdate","GetPercentiles","GetPolicy","GetPolicyVersion","GetRegistrationCode","GetRetainedMessage","GetStatistics","GetThingShadow","GetTopicRule","GetTopicRuleDestination","GetV2LoggingOptions","ListActiveViolations","ListAttachedPolicies","ListAuditFindings","ListAuditMitigationActionsExecutions","ListAuditMitigationActionsTasks","ListAuditSuppressions","ListAuditTasks","ListAuthorizers","ListBillingGroups","ListCACertificates","ListCertificates","ListCertificatesByCA","ListCustomMetrics","ListDetectMitigationActionsExecutions","ListDetectMitigationActionsTasks","ListDimensions","ListDomainConfigurations","ListFleetMetrics","ListIndices","ListJobExecutionsForJob","ListJobExecutionsForThing","ListJobTemplates","ListJobs","ListManagedJobTemplates","ListMetricValues","ListMitigationActions","ListNamedShadowsForThing","ListOTAUpdates","ListOutgoingCertificates","ListPolicies","ListPolicyPrincipals","ListPolicyVersions","ListPrincipalPolicies","ListPrincipalThings","ListProvisioningTemplateVersions","ListProvisioningTemplates","ListRetainedMessages","ListRoleAliases","ListScheduledAudits","ListSecurityProfiles","ListSecurityProfilesForTarget","ListStreams","ListTagsForResource","ListTargetsForPolicy","ListTargetsForSecurityProfile","ListThingGroups","ListThingGroupsForThing","ListThingPrincipals","ListThingRegistrationTaskReports","ListThingRegistrationTasks","ListThingTypes","ListThings","ListThingsInBillingGroup","ListThingsInThingGroup","ListTopicRuleDestinations","ListTopicRules","ListTunnels","ListV2LoggingLevels","ListViolationEvents","OpenTunnel","Publish","PutVerificationStateOnViolation","Receive","RegisterCACertificate","RegisterCertificate","RegisterCertificateWithoutCA","RegisterThing","RejectCertificateTransfer","RemoveThingFromBillingGroup","RemoveThingFromThingGroup","ReplaceTopicRule","RetainPublish","SearchIndex","SetDefaultAuthorizer","SetDefaultPolicyVersion","SetLoggingOptions","SetV2LoggingLevel","SetV2LoggingOptions","StartAuditMitigationActionsTask","StartDetectMitigationActionsTask","StartOnDemandAuditTask","StartThingRegistrationTask","StopThingRegistrationTask","Subscribe","TagResource","TestAuthorization","TestInvokeAuthorizer","TransferCertificate","UntagResource","UpdateAccountAuditConfiguration","UpdateAuditSuppression","UpdateAuthorizer","UpdateBillingGroup","UpdateCACertificate","UpdateCertificate","UpdateCustomMetric","UpdateDimension","UpdateDomainConfiguration","UpdateDynamicThingGroup","UpdateEventConfigurations","UpdateFleetMetric","UpdateIndexingConfiguration","UpdateJob","UpdateMitigationAction","UpdateProvisioningTemplate","UpdateRoleAlias","UpdateScheduledAudit","UpdateSecurityProfile","UpdateStream","UpdateThing","UpdateThingGroup","UpdateThingGroupsForThing","UpdateThingShadow","UpdateTopicRuleDestination","ValidateSecurityProfileBehaviors"]',
    ARNFormat: "arn:aws:iot:${Region}:${Account}:${Type}/${Name}",
    ARNRegex: "^arn:aws:iot:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","iot:Delete","iot:DomainName","iot:ThingGroupArn","iot:TunnelDestinationService"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiot.html",
  },
  {
    ServiceShortName: "iot1click",
    ServiceName: "AWS IoT 1-Click",
    Actions:
      '["AssociateDeviceWithPlacement","ClaimDevicesByClaimCode","CreatePlacement","CreateProject","DeletePlacement","DeleteProject","DescribeDevice","DescribePlacement","DescribeProject","DisassociateDeviceFromPlacement","FinalizeDeviceClaim","GetDeviceMethods","GetDevicesInPlacement","InitiateDeviceClaim","InvokeDeviceMethod","ListDeviceEvents","ListDevices","ListPlacements","ListProjects","ListTagsForResource","TagResource","UnclaimDevice","UntagResource","UpdateDeviceState","UpdatePlacement","UpdateProject"]',
    ARNFormat: "arn:aws:iot1click:${Region}:${Account}:${Type}/${Name}",
    ARNRegex: "^arn:aws:iot1click:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiot1-click.html",
  },
  {
    ServiceShortName: "iotanalytics",
    ServiceName: "AWS IoT Analytics",
    Actions:
      '["BatchPutMessage","CancelPipelineReprocessing","CreateChannel","CreateDataset","CreateDatasetContent","CreateDatastore","CreatePipeline","DeleteChannel","DeleteDataset","DeleteDatasetContent","DeleteDatastore","DeletePipeline","DescribeChannel","DescribeDataset","DescribeDatastore","DescribeLoggingOptions","DescribePipeline","GetDatasetContent","ListChannels","ListDatasetContents","ListDatasets","ListDatastores","ListPipelines","ListTagsForResource","PutLoggingOptions","RunPipelineActivity","SampleChannelData","StartPipelineReprocessing","TagResource","UntagResource","UpdateChannel","UpdateDataset","UpdateDatastore","UpdatePipeline"]',
    ARNFormat:
      "arn:${Partition}:iotanalytics:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:iotanalytics:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:TagKeys","iotanalytics:ResourceTag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotanalytics.html",
  },
  {
    ServiceShortName: "iotdeviceadvisor",
    ServiceName: "AWS IoT Core Device Advisor",
    Actions:
      '["CreateSuiteDefinition","DeleteSuiteDefinition","GetEndpoint","GetSuiteDefinition","GetSuiteRun","GetSuiteRunReport","ListSuiteDefinitions","ListSuiteRuns","ListTagsForResource","StartSuiteRun","StopSuiteRun","TagResource","UntagResource","UpdateSuiteDefinition"]',
    ARNFormat:
      "arn:${Partition}:iotdeviceadvisor:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:iotdeviceadvisor:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotcoredeviceadvisor.html",
  },
  {
    ServiceShortName: "iotwireless",
    ServiceName: "AWS IoT Core for LoRaWAN",
    Actions:
      '["AssociateAwsAccountWithPartnerAccount","AssociateMulticastGroupWithFuotaTask","AssociateWirelessDeviceWithFuotaTask","AssociateWirelessDeviceWithMulticastGroup","AssociateWirelessDeviceWithThing","AssociateWirelessGatewayWithCertificate","AssociateWirelessGatewayWithThing","CancelMulticastGroupSession","CreateDestination","CreateDeviceProfile","CreateFuotaTask","CreateMulticastGroup","CreateNetworkAnalyzerConfiguration","CreateServiceProfile","CreateWirelessDevice","CreateWirelessGateway","CreateWirelessGatewayTask","CreateWirelessGatewayTaskDefinition","DeleteDestination","DeleteDeviceProfile","DeleteFuotaTask","DeleteMulticastGroup","DeleteNetworkAnalyzerConfiguration","DeleteQueuedMessages","DeleteServiceProfile","DeleteWirelessDevice","DeleteWirelessGateway","DeleteWirelessGatewayTask","DeleteWirelessGatewayTaskDefinition","DisassociateAwsAccountFromPartnerAccount","DisassociateMulticastGroupFromFuotaTask","DisassociateWirelessDeviceFromFuotaTask","DisassociateWirelessDeviceFromMulticastGroup","DisassociateWirelessDeviceFromThing","DisassociateWirelessGatewayFromCertificate","DisassociateWirelessGatewayFromThing","GetDestination","GetDeviceProfile","GetEventConfigurationsByResourceTypes","GetFuotaTask","GetLogLevelsByResourceTypes","GetMulticastGroup","GetMulticastGroupSession","GetNetworkAnalyzerConfiguration","GetPartnerAccount","GetResourceEventConfiguration","GetResourceLogLevel","GetServiceEndpoint","GetServiceProfile","GetWirelessDevice","GetWirelessDeviceStatistics","GetWirelessGateway","GetWirelessGatewayCertificate","GetWirelessGatewayFirmwareInformation","GetWirelessGatewayStatistics","GetWirelessGatewayTask","GetWirelessGatewayTaskDefinition","ListDestinations","ListDeviceProfiles","ListEventConfigurations","ListFuotaTasks","ListMulticastGroups","ListMulticastGroupsByFuotaTask","ListNetworkAnalyzerConfigurations","ListPartnerAccounts","ListQueuedMessages","ListServiceProfiles","ListTagsForResource","ListWirelessDevices","ListWirelessGatewayTaskDefinitions","ListWirelessGateways","PutResourceLogLevel","ResetAllResourceLogLevels","ResetResourceLogLevel","SendDataToMulticastGroup","SendDataToWirelessDevice","StartBulkAssociateWirelessDeviceWithMulticastGroup","StartBulkDisassociateWirelessDeviceFromMulticastGroup","StartFuotaTask","StartMulticastGroupSession","StartNetworkAnalyzerStream","TagResource","TestWirelessDevice","UntagResource","UpdateDestination","UpdateEventConfigurationsByResourceTypes","UpdateFuotaTask","UpdateLogLevelsByResourceTypes","UpdateMulticastGroup","UpdateNetworkAnalyzerConfiguration","UpdatePartnerAccount","UpdateResourceEventConfiguration","UpdateWirelessDevice","UpdateWirelessGateway"]',
    ARNFormat:
      "arn:aws:iotwireless:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:iotwireless:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotcoreforlorawan.html",
  },
  {
    ServiceShortName: "iot-device-tester",
    ServiceName: "AWS IoT Device Tester",
    Actions:
      '["CheckVersion","DownloadTestSuite","LatestIdt","SendMetrics","SupportedVersion"]',
    ARNFormat:
      "arn:aws:iot-device-tester:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:iot-device-tester:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotdevicetester.html",
  },
  {
    ServiceShortName: "iotevents",
    ServiceName: "AWS IoT Events",
    Actions:
      '["BatchAcknowledgeAlarm","BatchDisableAlarm","BatchEnableAlarm","BatchPutMessage","BatchResetAlarm","BatchSnoozeAlarm","BatchUpdateDetector","CreateAlarmModel","CreateDetectorModel","CreateInput","DeleteAlarmModel","DeleteDetectorModel","DeleteInput","DescribeAlarm","DescribeAlarmModel","DescribeDetector","DescribeDetectorModel","DescribeDetectorModelAnalysis","DescribeInput","DescribeLoggingOptions","GetDetectorModelAnalysisResults","ListAlarmModelVersions","ListAlarmModels","ListAlarms","ListDetectorModelVersions","ListDetectorModels","ListDetectors","ListInputRoutings","ListInputs","ListTagsForResource","PutLoggingOptions","StartDetectorModelAnalysis","TagResource","UntagResource","UpdateAlarmModel","UpdateDetectorModel","UpdateInput","UpdateInputRouting"]',
    ARNFormat:
      "arn:${Partition}:iotevents:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:iotevents:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","iotevents:keyValue"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotevents.html",
  },
  {
    ServiceShortName: "iotfleethub",
    ServiceName: "AWS IoT Fleet Hub for Device Management",
    Actions:
      '["CreateApplication","DeleteApplication","DescribeApplication","ListApplications","ListTagsForResource","TagResource","UntagResource","UpdateApplication"]',
    ARNFormat:
      "arn:aws:iotfleethub:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:iotfleethub:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotfleethubfordevicemanagement.html",
  },
  {
    ServiceShortName: "iotfleetwise",
    ServiceName: "AWS IoT FleetWise",
    Actions:
      '["AssociateVehicle","CreateCampaign","CreateDecoderManifest","CreateFleet","CreateModelManifest","CreateSignalCatalog","CreateVehicle","DeleteCampaign","DeleteDecoderManifest","DeleteFleet","DeleteModelManifest","DeleteSignalCatalog","DeleteVehicle","DisassociateVehicle","GetCampaign","GetDecoderManifest","GetFleet","GetModelManifest","GetRegisterAccountStatus","GetSignalCatalog","GetVehicle","GetVehicleStatus","ImportDecoderManifest","ImportSignalCatalog","ListCampaigns","ListDecoderManifestNetworkInterfaces","ListDecoderManifestSignals","ListDecoderManifests","ListFleets","ListFleetsForVehicle","ListModelManifestNodes","ListModelManifests","ListSignalCatalogNodes","ListSignalCatalogs","ListVehicles","ListVehiclesInFleet","RegisterAccount","UpdateCampaign","UpdateDecoderManifest","UpdateFleet","UpdateModelManifest","UpdateSignalCatalog","UpdateVehicle"]',
    ARNFormat: "arn:aws:iotfleetwise:${Region}:${Account}:${Type}/${Name}",
    ARNRegex: "^arn:aws:iotfleetwise:.+:[0-9]+:.+",
    conditionKeys:
      '["iotfleetwise:UpdateToDecoderManifestArn","iotfleetwise:UpdateToModelManifestArn"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotfleetwise.html",
  },
  {
    ServiceShortName: "greengrass",
    ServiceName: "AWS IoT Greengrass",
    Actions:
      '["AssociateRoleToGroup","AssociateServiceRoleToAccount","CreateConnectorDefinition","CreateConnectorDefinitionVersion","CreateCoreDefinition","CreateCoreDefinitionVersion","CreateDeployment","CreateDeviceDefinition","CreateDeviceDefinitionVersion","CreateFunctionDefinition","CreateFunctionDefinitionVersion","CreateGroup","CreateGroupCertificateAuthority","CreateGroupVersion","CreateLoggerDefinition","CreateLoggerDefinitionVersion","CreateResourceDefinition","CreateResourceDefinitionVersion","CreateSoftwareUpdateJob","CreateSubscriptionDefinition","CreateSubscriptionDefinitionVersion","DeleteConnectorDefinition","DeleteCoreDefinition","DeleteDeviceDefinition","DeleteFunctionDefinition","DeleteGroup","DeleteLoggerDefinition","DeleteResourceDefinition","DeleteSubscriptionDefinition","DisassociateRoleFromGroup","DisassociateServiceRoleFromAccount","Discover","GetAssociatedRole","GetBulkDeploymentStatus","GetConnectivityInfo","GetConnectorDefinition","GetConnectorDefinitionVersion","GetCoreDefinition","GetCoreDefinitionVersion","GetDeploymentStatus","GetDeviceDefinition","GetDeviceDefinitionVersion","GetFunctionDefinition","GetFunctionDefinitionVersion","GetGroup","GetGroupCertificateAuthority","GetGroupCertificateConfiguration","GetGroupVersion","GetLoggerDefinition","GetLoggerDefinitionVersion","GetResourceDefinition","GetResourceDefinitionVersion","GetServiceRoleForAccount","GetSubscriptionDefinition","GetSubscriptionDefinitionVersion","GetThingRuntimeConfiguration","ListBulkDeploymentDetailedReports","ListBulkDeployments","ListConnectorDefinitionVersions","ListConnectorDefinitions","ListCoreDefinitionVersions","ListCoreDefinitions","ListDeployments","ListDeviceDefinitionVersions","ListDeviceDefinitions","ListFunctionDefinitionVersions","ListFunctionDefinitions","ListGroupCertificateAuthorities","ListGroupVersions","ListGroups","ListLoggerDefinitionVersions","ListLoggerDefinitions","ListResourceDefinitionVersions","ListResourceDefinitions","ListSubscriptionDefinitionVersions","ListSubscriptionDefinitions","ListTagsForResource","ResetDeployments","StartBulkDeployment","StopBulkDeployment","TagResource","UntagResource","UpdateConnectivityInfo","UpdateConnectorDefinition","UpdateCoreDefinition","UpdateDeviceDefinition","UpdateFunctionDefinition","UpdateGroup","UpdateGroupCertificateConfiguration","UpdateLoggerDefinition","UpdateResourceDefinition","UpdateSubscriptionDefinition","UpdateThingRuntimeConfiguration"]',
    ARNFormat:
      "arn:${Partition}:greengrass:${Region}:${Account}:/greengrass/${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:greengrass:.+:[0-9]+:.+",
    conditionKeys:
      '["aws:CurrentTime","aws:EpochTime","aws:MultiFactorAuthAge","aws:MultiFactorAuthPresent","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:SecureTransport","aws:TagKeys","aws:UserAgent"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotgreengrass.html",
  },
  {
    ServiceShortName: "greengrass",
    ServiceName: "AWS IoT Greengrass V2",
    Actions:
      '["AssociateServiceRoleToAccount","BatchAssociateClientDeviceWithCoreDevice","BatchDisassociateClientDeviceFromCoreDevice","CancelDeployment","CreateComponentVersion","CreateDeployment","DeleteComponent","DeleteCoreDevice","DescribeComponent","DisassociateServiceRoleFromAccount","GetComponent","GetComponentVersionArtifact","GetConnectivityInfo","GetCoreDevice","GetDeployment","GetServiceRoleForAccount","ListClientDevicesAssociatedWithCoreDevice","ListComponentVersions","ListComponents","ListCoreDevices","ListDeployments","ListEffectiveDeployments","ListInstalledComponents","ListTagsForResource","ResolveComponentCandidates","TagResource","UntagResource","UpdateConnectivityInfo"]',
    ARNFormat:
      "arn:${Partition}:greengrass:${Region}:${Account}:${ResourceType}:${ResourcePath}",
    ARNRegex: "^arn:${Partition}:greengrass:.+",
    conditionKeys:
      '["aws:CurrentTime","aws:EpochTime","aws:MultiFactorAuthAge","aws:MultiFactorAuthPresent","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:SecureTransport","aws:TagKeys","aws:UserAgent"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotgreengrassv2.html",
  },
  {
    ServiceShortName: "iotjobsdata",
    ServiceName: "AWS IoT Jobs DataPlane",
    Actions:
      '["DescribeJobExecution","GetPendingJobExecutions","StartNextPendingJobExecution","UpdateJobExecution"]',
    ARNFormat: "arn:aws:iot:${Region}:${Account}:${Type}/${Name}",
    ARNRegex: "^arn:aws:iot:.+:[0-9]+:.+",
    conditionKeys: '"iot:JobId"',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotjobsdataplane.html",
  },
  {
    ServiceShortName: "iotroborunner",
    ServiceName: "AWS IoT RoboRunner",
    Actions:
      '["CreateAction","CreateActionTemplate","CreateActionTemplateDependency","CreateActivity","CreateActivityDependency","CreateDestination","CreateDestinationRelationship","CreateSite","CreateTask","CreateTaskDependency","CreateWorker","CreateWorkerFleet","DeleteAction","DeleteActionTemplate","DeleteActionTemplateDependency","DeleteActivity","DeleteActivityDependency","DeleteDestination","DeleteDestinationRelationship","DeleteSite","DeleteTask","DeleteTaskDependency","DeleteWorker","DeleteWorkerFleet","GetAction","GetActionTemplate","GetActivity","GetDestination","GetDestinationRelationship","GetSite","GetTask","GetWorker","GetWorkerFleet","ListActionTemplates","ListActions","ListActivities","ListDestinationRelationships","ListDestinations","ListSites","ListTasks","ListWorkerFleets","ListWorkers","UpdateActionState","UpdateActivity","UpdateDestination","UpdateSite","UpdateTask","UpdateWorker","UpdateWorkerFleet"]',
    ARNFormat:
      "arn:${Partition}:iotroborunner:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:${Partition}:iotroborunner:.+:.+:.+",
    conditionKeys:
      '["iotroborunner:ActionResourceId","iotroborunner:ActionTemplateResourceId","iotroborunner:ActivityResourceId","iotroborunner:DestinationRelationshipResourceId","iotroborunner:DestinationResourceId","iotroborunner:SiteResourceId","iotroborunner:TaggingResourceTagKey","iotroborunner:TaskResourceId","iotroborunner:WorkerFleetResourceId","iotroborunner:WorkerResourceId"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotroborunner.html",
  },
  {
    ServiceShortName: "iotsitewise",
    ServiceName: "AWS IoT SiteWise",
    Actions:
      '["AssociateAssets","AssociateTimeSeriesToAssetProperty","BatchAssociateProjectAssets","BatchDisassociateProjectAssets","BatchGetAssetPropertyAggregates","BatchGetAssetPropertyValue","BatchGetAssetPropertyValueHistory","BatchPutAssetPropertyValue","CreateAccessPolicy","CreateAsset","CreateAssetModel","CreateDashboard","CreateGateway","CreatePortal","CreateProject","DeleteAccessPolicy","DeleteAsset","DeleteAssetModel","DeleteDashboard","DeleteGateway","DeletePortal","DeleteProject","DeleteTimeSeries","DescribeAccessPolicy","DescribeAsset","DescribeAssetModel","DescribeAssetProperty","DescribeDashboard","DescribeDefaultEncryptionConfiguration","DescribeGateway","DescribeGatewayCapabilityConfiguration","DescribeLoggingOptions","DescribePortal","DescribeProject","DescribeStorageConfiguration","DescribeTimeSeries","DisassociateAssets","DisassociateTimeSeriesFromAssetProperty","GetAssetPropertyAggregates","GetAssetPropertyValue","GetAssetPropertyValueHistory","GetInterpolatedAssetPropertyValues","ListAccessPolicies","ListAssetModels","ListAssetRelationships","ListAssets","ListAssociatedAssets","ListDashboards","ListGateways","ListPortals","ListProjectAssets","ListProjects","ListTagsForResource","ListTimeSeries","PutDefaultEncryptionConfiguration","PutLoggingOptions","PutStorageConfiguration","TagResource","UntagResource","UpdateAccessPolicy","UpdateAsset","UpdateAssetModel","UpdateAssetModelPropertyRouting","UpdateAssetProperty","UpdateDashboard","UpdateGateway","UpdateGatewayCapabilityConfiguration","UpdatePortal","UpdateProject"]',
    ARNFormat:
      "arn:${Partition}:iotsitewise:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:iotsitewise:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","iotsitewise:assetHierarchyPath","iotsitewise:childAssetId","iotsitewise:group","iotsitewise:iam","iotsitewise:isAssociatedWithAssetProperty","iotsitewise:portal","iotsitewise:project","iotsitewise:propertyAlias","iotsitewise:propertyId","iotsitewise:user"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotsitewise.html",
  },
  {
    ServiceShortName: "iotthingsgraph",
    ServiceName: "AWS IoT Things Graph",
    Actions:
      '["AssociateEntityToThing","CreateFlowTemplate","CreateSystemInstance","CreateSystemTemplate","DeleteFlowTemplate","DeleteNamespace","DeleteSystemInstance","DeleteSystemTemplate","DeploySystemInstance","DeprecateFlowTemplate","DeprecateSystemTemplate","DescribeNamespace","DissociateEntityFromThing","GetEntities","GetFlowTemplate","GetFlowTemplateRevisions","GetNamespaceDeletionStatus","GetSystemInstance","GetSystemTemplate","GetSystemTemplateRevisions","GetUploadStatus","ListFlowExecutionMessages","ListTagsForResource","SearchEntities","SearchFlowExecutions","SearchFlowTemplates","SearchSystemInstances","SearchSystemTemplates","SearchThings","TagResource","UndeploySystemInstance","UntagResource","UpdateFlowTemplate","UpdateSystemTemplate","UploadEntityDefinitions"]',
    ARNFormat: "arn:aws:iotthingsgraph:${Region}:${AccountId}:${Type}/${Name}",
    ARNRegex: "^arn:aws:iotthingsgraph:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiotthingsgraph.html",
  },
  {
    ServiceShortName: "iottwinmaker",
    ServiceName: "AWS IoT TwinMaker",
    Actions:
      '["BatchPutPropertyValues","CreateComponentType","CreateEntity","CreateScene","CreateWorkspace","DeleteComponentType","DeleteEntity","DeleteScene","DeleteWorkspace","GetComponentType","GetEntity","GetPropertyValue","GetPropertyValueHistory","GetScene","GetWorkspace","ListComponentTypes","ListEntities","ListScenes","ListTagsForResource","ListWorkspaces","TagResource","UntagResource","UpdateComponentType","UpdateEntity","UpdateScene","UpdateWorkspace"]',
    ARNFormat:
      "arn:${Partition}:iottwinmaker:${Region}:${Account}:${ResourceType}/${ResourceTypeId}",
    ARNRegex: "^arn:${Partition}:iottwinmaker:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiottwinmaker.html",
  },
  {
    ServiceShortName: "iq",
    ServiceName: "AWS IQ",
    Actions: '"CreateProject"',
    ARNFormat: "arn:aws:iq::<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:iq::.+",
    conditionKeys: "",
    HasResource: false,
    DocLink: "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiq.html",
  },
  {
    ServiceShortName: "iq-permission",
    ServiceName: "AWS IQ Permissions",
    Actions: '"ApproveAccessGrant"',
    ARNFormat:
      "arn:aws:iq-permission::<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:iq-permission::.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsiqpermissions.html",
  },
  {
    ServiceShortName: "kms",
    ServiceName: "AWS Key Management Service",
    Actions:
      '["CancelKeyDeletion","ConnectCustomKeyStore","CreateAlias","CreateCustomKeyStore","CreateGrant","CreateKey","Decrypt","DeleteAlias","DeleteCustomKeyStore","DeleteImportedKeyMaterial","DescribeCustomKeyStores","DescribeKey","DisableKey","DisableKeyRotation","DisconnectCustomKeyStore","EnableKey","EnableKeyRotation","Encrypt","GenerateDataKey","GenerateDataKeyPair","GenerateDataKeyPairWithoutPlaintext","GenerateDataKeyWithoutPlaintext","GenerateMac","GenerateRandom","GetKeyPolicy","GetKeyRotationStatus","GetParametersForImport","GetPublicKey","ImportKeyMaterial","ListAliases","ListGrants","ListKeyPolicies","ListKeys","ListResourceTags","ListRetirableGrants","PutKeyPolicy","ReEncryptFrom","ReEncryptTo","ReplicateKey","RetireGrant","RevokeGrant","ScheduleKeyDeletion","Sign","SynchronizeMultiRegionKey","TagResource","UntagResource","UpdateAlias","UpdateCustomKeyStore","UpdateKeyDescription","UpdatePrimaryRegion","Verify","VerifyMac"]',
    ARNFormat: "arn:aws:kms:${Region}:${AccountId}:${ResourceType}/${Id}",
    ARNRegex: "^arn:aws:kms:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","kms:BypassPolicyLockoutSafetyCheck","kms:CallerAccount","kms:CustomerMasterKeySpec","kms:CustomerMasterKeyUsage","kms:DataKeyPairSpec","kms:EncryptionAlgorithm","kms:EncryptionContext:${EncryptionContextKey}","kms:EncryptionContextKeys","kms:ExpirationModel","kms:GrantConstraintType","kms:GrantIsForAWSResource","kms:GrantOperations","kms:GranteePrincipal","kms:KeyOrigin","kms:KeySpec","kms:KeyUsage","kms:MacAlgorithm","kms:MessageType","kms:MultiRegion","kms:MultiRegionKeyType","kms:PrimaryRegion","kms:ReEncryptOnSameKey","kms:RecipientAttestation:ImageSha384","kms:ReplicaRegion","kms:RequestAlias","kms:ResourceAliases","kms:RetiringPrincipal","kms:SigningAlgorithm","kms:ValidTo","kms:ViaService","kms:WrappingAlgorithm","kms:WrappingKeySpec"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awskeymanagementservice.html",
  },
  {
    ServiceShortName: "lakeformation",
    ServiceName: "AWS Lake Formation",
    Actions:
      '["AddLFTagsToResource","BatchGrantPermissions","BatchRevokePermissions","CancelTransaction","CommitTransaction","CreateDataCellsFilter","CreateLFTag","DeleteDataCellsFilter","DeleteLFTag","DeleteObjectsOnCancel","DeregisterResource","DescribeResource","DescribeTransaction","ExtendTransaction","GetDataAccess","GetDataLakeSettings","GetEffectivePermissionsForPath","GetLFTag","GetQueryState","GetQueryStatistics","GetResourceLFTags","GetTableObjects","GetWorkUnitResults","GetWorkUnits","GrantPermissions","ListDataCellsFilter","ListLFTags","ListPermissions","ListResources","ListTableStorageOptimizers","ListTransactions","PutDataLakeSettings","RegisterResource","RemoveLFTagsFromResource","RevokePermissions","SearchDatabasesByLFTags","SearchTablesByLFTags","StartQueryPlanning","StartTransaction","UpdateLFTag","UpdateResource","UpdateTableObjects","UpdateTableStorageOptimizer"]',
    ARNFormat:
      "arn:${Partition}:lakeformation:${Region}:${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:aws:lakeformation:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslakeformation.html",
  },
  {
    ServiceShortName: "lambda",
    ServiceName: "AWS Lambda",
    Actions:
      '["AddLayerVersionPermission","AddPermission","CreateAlias","CreateCodeSigningConfig","CreateEventSourceMapping","CreateFunction","CreateFunctionUrlConfig","DeleteAlias","DeleteCodeSigningConfig","DeleteEventSourceMapping","DeleteFunction","DeleteFunctionCodeSigningConfig","DeleteFunctionConcurrency","DeleteFunctionEventInvokeConfig","DeleteFunctionUrlConfig","DeleteLayerVersion","DeleteProvisionedConcurrencyConfig","DisableReplication","EnableReplication","GetAccountSettings","GetAlias","GetCodeSigningConfig","GetEventSourceMapping","GetFunction","GetFunctionCodeSigningConfig","GetFunctionConcurrency","GetFunctionConfiguration","GetFunctionEventInvokeConfig","GetFunctionUrlConfig","GetLayerVersion","GetLayerVersionPolicy","GetPolicy","GetProvisionedConcurrencyConfig","InvokeAsync","InvokeFunction","InvokeFunctionUrl","ListAliases","ListCodeSigningConfigs","ListEventSourceMappings","ListFunctionEventInvokeConfigs","ListFunctionUrlConfigs","ListFunctions","ListFunctionsByCodeSigningConfig","ListLayerVersions","ListLayers","ListProvisionedConcurrencyConfigs","ListTags","ListVersionsByFunction","PublishLayerVersion","PublishVersion","PutFunctionCodeSigningConfig","PutFunctionConcurrency","PutFunctionEventInvokeConfig","PutProvisionedConcurrencyConfig","RemoveLayerVersionPermission","RemovePermission","TagResource","UntagResource","UpdateAlias","UpdateCodeSigningConfig","UpdateEventSourceMapping","UpdateFunctionCode","UpdateFunctionCodeSigningConfig","UpdateFunctionConfiguration","UpdateFunctionEventInvokeConfig","UpdateFunctionUrlConfig"]',
    ARNFormat:
      "arn:${Partition}:lambda:${Region}:${Account}:${ResourceType}:${ResourceId}",
    ARNRegex: "^arn:${Partition}:lambda:.+",
    conditionKeys:
      '["lambda:CodeSigningConfigArn","lambda:FunctionArn","lambda:FunctionUrlAuthType","lambda:Layer","lambda:Principal","lambda:SecurityGroupIds","lambda:SubnetIds","lambda:VpcIds"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslambda.html",
  },
  {
    ServiceShortName: "license-manager",
    ServiceName: "AWS License Manager",
    Actions:
      '["AcceptGrant","CheckInLicense","CheckoutBorrowLicense","CheckoutLicense","CreateGrant","CreateGrantVersion","CreateLicense","CreateLicenseConfiguration","CreateLicenseConversionTaskForResource","CreateLicenseManagerReportGenerator","CreateLicenseVersion","CreateToken","DeleteGrant","DeleteLicense","DeleteLicenseConfiguration","DeleteLicenseManagerReportGenerator","DeleteToken","ExtendLicenseConsumption","GetAccessToken","GetGrant","GetLicense","GetLicenseConfiguration","GetLicenseConversionTask","GetLicenseManagerReportGenerator","GetLicenseUsage","GetServiceSettings","ListAssociationsForLicenseConfiguration","ListDistributedGrants","ListFailuresForLicenseConfigurationOperations","ListLicenseConfigurations","ListLicenseConversionTasks","ListLicenseManagerReportGenerators","ListLicenseSpecificationsForResource","ListLicenseVersions","ListLicenses","ListReceivedGrants","ListReceivedLicenses","ListResourceInventory","ListTagsForResource","ListTokens","ListUsageForLicenseConfiguration","RejectGrant","TagResource","UntagResource","UpdateLicenseConfiguration","UpdateLicenseManagerReportGenerator","UpdateLicenseSpecificationsForResource","UpdateServiceSettings"]',
    ARNFormat:
      "arn:aws:license-manager:${Region}:${Account}:${ResourceType}:${ResourceId}",
    ARNRegex: "^arn:aws:license-manager:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:TagKeys","license-manager:ResourceTag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awslicensemanager.html",
  },
  {
    ServiceShortName: "aws-marketplace",
    ServiceName: "AWS Marketplace",
    Actions:
      '["AcceptAgreementApprovalRequest","CancelAgreementRequest","DescribeAgreement","GetAgreementApprovalRequest","GetAgreementRequest","GetAgreementTerms","ListAgreementApprovalRequests","ListAgreementRequests","RejectAgreementApprovalRequest","SearchAgreements","Subscribe","Unsubscribe","UpdateAgreementApprovalRequest","ViewSubscriptions"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys:
      '["aws-marketplace:AgreementType","aws-marketplace:PartyType","aws-marketplace:ProductId"]',
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplace.html",
  },
  {
    ServiceShortName: "aws-marketplace",
    ServiceName: "AWS Marketplace Catalog",
    Actions:
      '["CancelChangeSet","CompleteTask","DescribeChangeSet","DescribeEntity","DescribeTask","ListChangeSets","ListEntities","ListTasks","StartChangeSet","UpdateTask"]',
    ARNFormat:
      "arn:${Partition}:aws-marketplace:${Region}:${Account}:${Catalog}/${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:aws-marketplace:.+",
    conditionKeys: '"catalog:ChangeType"',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacecatalog.html",
  },
  {
    ServiceShortName: "marketplacecommerceanalytics",
    ServiceName: "AWS Marketplace Commerce Analytics Service",
    Actions: '["GenerateDataSet","StartSupportDataExport"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacecommerceanalyticsservice.html",
  },
  {
    ServiceShortName: "aws-marketplace",
    ServiceName: "AWS Marketplace Entitlement Service",
    Actions: '"GetEntitlements"',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceentitlementservice.html",
  },
  {
    ServiceShortName: "aws-marketplace",
    ServiceName: "AWS Marketplace Image Building Service",
    Actions: '["DescribeBuilds","ListBuilds","StartBuild"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceimagebuildingservice.html",
  },
  {
    ServiceShortName: "aws-marketplace-management",
    ServiceName: "AWS Marketplace Management Portal",
    Actions:
      '["uploadFiles","viewMarketing","viewReports","viewSettings","viewSupport"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemanagementportal.html",
  },
  {
    ServiceShortName: "aws-marketplace",
    ServiceName: "AWS Marketplace Metering Service",
    Actions:
      '["BatchMeterUsage","MeterUsage","RegisterUsage","ResolveCustomer"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplacemeteringservice.html",
  },
  {
    ServiceShortName: "aws-marketplace",
    ServiceName: "AWS Marketplace Private Marketplace",
    Actions:
      '["AssociateProductsWithPrivateMarketplace","CreatePrivateMarketplaceRequests","DescribePrivateMarketplaceRequests","DisassociateProductsFromPrivateMarketplace","ListPrivateMarketplaceRequests"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceprivatemarketplace.html",
  },
  {
    ServiceShortName: "aws-marketplace",
    ServiceName: "AWS Marketplace Procurement Systems Integration",
    Actions:
      '["DescribeProcurementSystemConfiguration","PutProcurementSystemConfiguration"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmarketplaceprocurementsystemsintegration.html",
  },
  {
    ServiceShortName: "serviceextract",
    ServiceName: "AWS Microservice Extractor for .NET",
    Actions: '"GetConfig"',
    ARNFormat:
      "arn:aws:serviceextract:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:serviceextract:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmicroserviceextractorfor.net.html",
  },
  {
    ServiceShortName: "mgh",
    ServiceName: "AWS Migration Hub",
    Actions:
      '["AssociateCreatedArtifact","AssociateDiscoveredResource","CreateHomeRegionControl","CreateProgressUpdateStream","DeleteProgressUpdateStream","DescribeApplicationState","DescribeHomeRegionControls","DescribeMigrationTask","DisassociateCreatedArtifact","DisassociateDiscoveredResource","GetHomeRegion","ImportMigrationTask","ListApplicationStates","ListCreatedArtifacts","ListDiscoveredResources","ListMigrationTasks","ListProgressUpdateStreams","NotifyApplicationState","NotifyMigrationTaskState","PutResourceAttributes"]',
    ARNFormat: "arn:aws:mgh:<region>:<namespace>:<relative-id>",
    ARNRegex: "^arn:aws:mgh:[a-z0-9-]+:[0-9]{12}:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmigrationhub.html",
  },
  {
    ServiceShortName: "migrationhub-orchestrator",
    ServiceName: "AWS Migration Hub Orchestrator",
    Actions:
      '["CreateWorkflow","CreateWorkflowStep","CreateWorkflowStepGroup","DeleteWorkflow","DeleteWorkflowStep","DeleteWorkflowStepGroup","GetMessage","GetTemplate","GetTemplateStep","GetTemplateStepGroup","GetWorkflow","GetWorkflowStep","GetWorkflowStepGroup","ListPlugins","ListTagsForResource","ListTemplateStepGroups","ListTemplateSteps","ListTemplates","ListWorkflowStepGroups","ListWorkflowSteps","ListWorkflows","RegisterPlugin","RetryWorkflowStep","SendMessage","StartWorkflow","StopWorkflow","TagResource","UntagResource","UpdateWorkflow","UpdateWorkflowStep","UpdateWorkflowStepGroup"]',
    ARNFormat:
      "arn:${Partition}:migrationhub-orchestrator:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:migrationhub-orchestrator:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmigrationhuborchestrator.html",
  },
  {
    ServiceShortName: "refactor-spaces",
    ServiceName: "AWS Migration Hub Refactor Spaces",
    Actions:
      '["CreateApplication","CreateEnvironment","CreateRoute","CreateService","DeleteApplication","DeleteEnvironment","DeleteResourcePolicy","DeleteRoute","DeleteService","GetApplication","GetEnvironment","GetResourcePolicy","GetRoute","GetService","ListApplications","ListEnvironmentVpcs","ListEnvironments","ListRoutes","ListServices","ListTagsForResource","PutResourcePolicy","TagResource","UntagResource"]',
    ARNFormat:
      "arn:aws:refactor-spaces:${Region}:${Account}:${ResourceType}/${RelativeId}",
    ARNRegex: "^arn:aws:refactor-spaces:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","refactor-spaces:ApplicationCreatedByAccount","refactor-spaces:CreatedByAccountIds","refactor-spaces:RouteCreatedByAccount","refactor-spaces:ServiceCreatedByAccount","refactor-spaces:SourcePath"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmigrationhubrefactorspaces.html",
  },
  {
    ServiceShortName: "migrationhub-strategy",
    ServiceName: "AWS Migration Hub Strategy Recommendations",
    Actions:
      '["GetAntiPattern","GetApplicationComponentDetails","GetApplicationComponentStrategies","GetAssessment","GetImportFileTask","GetMessage","GetPortfolioPreferences","GetPortfolioSummary","GetRecommendationReportDetails","GetServerDetails","GetServerStrategies","ListAntiPatterns","ListApplicationComponents","ListCollectors","ListImportFileTask","ListJarArtifacts","ListServers","PutPortfolioPreferences","RegisterCollector","SendMessage","StartAssessment","StartImportFileTask","StartRecommendationReportGeneration","StopAssessment","UpdateApplicationComponentConfig","UpdateServerConfig"]',
    ARNFormat:
      "arn:${Partition}:iam::${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:${ServiceName}:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmigrationhubstrategyrecommendations.html",
  },
  {
    ServiceShortName: "mobilehub",
    ServiceName: "AWS Mobile Hub",
    Actions:
      '["CreateProject","CreateServiceRole","DeleteProject","DeleteProjectSnapshot","DeployToStage","DescribeBundle","ExportBundle","ExportProject","GenerateProjectParameters","GetProject","GetProjectSnapshot","ImportProject","InstallBundle","ListAvailableConnectors","ListAvailableFeatures","ListAvailableRegions","ListBundles","ListProjectSnapshots","ListProjects","SynchronizeProject","UpdateProject","ValidateProject","VerifyServiceRole"]',
    ARNFormat:
      "arn:aws:mobilehub:<region>:<aws_account_ID>:project/<project_ID>",
    ARNRegex: "^arn:aws:mobilehub:.+:[0-9]+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsmobilehub.html",
  },
  {
    ServiceShortName: "network-firewall",
    ServiceName: "AWS Network Firewall",
    Actions:
      '["AssociateFirewallPolicy","AssociateSubnets","CreateFirewall","CreateFirewallPolicy","CreateRuleGroup","DeleteFirewall","DeleteFirewallPolicy","DeleteResourcePolicy","DeleteRuleGroup","DescribeFirewall","DescribeFirewallPolicy","DescribeLoggingConfiguration","DescribeResourcePolicy","DescribeRuleGroup","DescribeRuleGroupMetadata","DisassociateSubnets","ListFirewallPolicies","ListFirewalls","ListRuleGroups","ListTagsForResource","PutResourcePolicy","TagResource","UntagResource","UpdateFirewallDeleteProtection","UpdateFirewallDescription","UpdateFirewallPolicy","UpdateFirewallPolicyChangeProtection","UpdateLoggingConfiguration","UpdateRuleGroup","UpdateSubnetChangeProtection"]',
    ARNFormat:
      "arn:aws:network-firewall:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:network-firewall:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsnetworkfirewall.html",
  },
  {
    ServiceShortName: "opsworks",
    ServiceName: "AWS OpsWorks",
    Actions:
      '["AssignInstance","AssignVolume","AssociateElasticIp","AttachElasticLoadBalancer","CloneStack","CreateApp","CreateDeployment","CreateInstance","CreateLayer","CreateStack","CreateUserProfile","DeleteApp","DeleteInstance","DeleteLayer","DeleteStack","DeleteUserProfile","DeregisterEcsCluster","DeregisterElasticIp","DeregisterInstance","DeregisterRdsDbInstance","DeregisterVolume","DescribeAgentVersions","DescribeApps","DescribeCommands","DescribeDeployments","DescribeEcsClusters","DescribeElasticIps","DescribeElasticLoadBalancers","DescribeInstances","DescribeLayers","DescribeLoadBasedAutoScaling","DescribeMyUserProfile","DescribeOperatingSystems","DescribePermissions","DescribeRaidArrays","DescribeRdsDbInstances","DescribeServiceErrors","DescribeStackProvisioningParameters","DescribeStackSummary","DescribeStacks","DescribeTimeBasedAutoScaling","DescribeUserProfiles","DescribeVolumes","DetachElasticLoadBalancer","DisassociateElasticIp","GetHostnameSuggestion","GrantAccess","ListTags","RebootInstance","RegisterEcsCluster","RegisterElasticIp","RegisterInstance","RegisterRdsDbInstance","RegisterVolume","SetLoadBasedAutoScaling","SetPermission","SetTimeBasedAutoScaling","StartInstance","StartStack","StopInstance","StopStack","TagResource","UnassignInstance","UnassignVolume","UntagResource","UpdateApp","UpdateElasticIp","UpdateInstance","UpdateLayer","UpdateMyUserProfile","UpdateRdsDbInstance","UpdateStack","UpdateUserProfile","UpdateVolume"]',
    ARNFormat:
      "arn:aws:${ServiceName}:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:opsworks:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworks.html",
  },
  {
    ServiceShortName: "opsworks-cm",
    ServiceName: "AWS OpsWorks Configuration Management",
    Actions:
      '["AssociateNode","CreateBackup","CreateServer","DeleteBackup","DeleteServer","DescribeAccountAttributes","DescribeBackups","DescribeEvents","DescribeNodeAssociationStatus","DescribeServers","DisassociateNode","ExportServerEngineAttribute","ListTagsForResource","RestoreServer","StartMaintenance","TagResource","UntagResource","UpdateServer","UpdateServerEngineAttributes"]',
    ARNFormat: "arn:aws:opsworks-cm:<region>:<account>:<resourceType>/<id>",
    ARNRegex: "^arn:aws:opsworks-cm:.+:[0-9]+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsopsworksconfigurationmanagement.html",
  },
  {
    ServiceShortName: "organizations",
    ServiceName: "AWS Organizations",
    Actions:
      '["AcceptHandshake","AttachPolicy","CancelHandshake","CloseAccount","CreateAccount","CreateGovCloudAccount","CreateOrganization","CreateOrganizationalUnit","CreatePolicy","DeclineHandshake","DeleteOrganization","DeleteOrganizationalUnit","DeletePolicy","DeregisterDelegatedAdministrator","DescribeAccount","DescribeCreateAccountStatus","DescribeEffectivePolicy","DescribeHandshake","DescribeOrganization","DescribeOrganizationalUnit","DescribePolicy","DetachPolicy","DisableAWSServiceAccess","DisablePolicyType","EnableAWSServiceAccess","EnableAllFeatures","EnablePolicyType","InviteAccountToOrganization","LeaveOrganization","ListAWSServiceAccessForOrganization","ListAccounts","ListAccountsForParent","ListChildren","ListCreateAccountStatus","ListDelegatedAdministrators","ListDelegatedServicesForAccount","ListHandshakesForAccount","ListHandshakesForOrganization","ListOrganizationalUnitsForParent","ListParents","ListPolicies","ListPoliciesForTarget","ListRoots","ListTagsForResource","ListTargetsForPolicy","MoveAccount","RegisterDelegatedAdministrator","RemoveAccountFromOrganization","TagResource","UntagResource","UpdateOrganizationalUnit","UpdatePolicy"]',
    ARNFormat:
      "arn:${Partition}:organizations::${MasterAccountId}:${Resource}/o-${OrganizationId}(/${ResourceType}/${ResourceId})?",
    ARNRegex: "^arn:${Partition}:organizations::.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","organizations:PolicyType","organizations:ServicePrincipal"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsorganizations.html",
  },
  {
    ServiceShortName: "outposts",
    ServiceName: "AWS Outposts",
    Actions:
      '["CancelOrder","CreateOrder","CreateOutpost","CreatePrivateConnectivityConfig","CreateSite","DeleteOutpost","DeleteSite","GetCatalogItem","GetOrder","GetOutpost","GetOutpostInstanceTypes","GetPrivateConnectivityConfig","GetSite","GetSiteAddress","ListAssets","ListCatalogItems","ListOrders","ListOutposts","ListSites","ListTagsForResource","TagResource","UntagResource","UpdateOutpost","UpdateSite","UpdateSiteAddress","UpdateSiteRackPhysicalProperties"]',
    ARNFormat:
      "arn:aws:outposts:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:outposts:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsoutposts.html",
  },
  {
    ServiceShortName: "panorama",
    ServiceName: "AWS Panorama",
    Actions:
      '["CreateApp","CreateAppDeployment","CreateAppVersion","CreateApplicationInstance","CreateDataSource","CreateDeploymentConfiguration","CreateInputs","CreateJobForDevices","CreateModel","CreateNodeFromTemplateJob","CreatePackage","CreatePackageImportJob","CreateStreams","DeleteApp","DeleteAppVersion","DeleteDataSource","DeleteDevice","DeleteModel","DeletePackage","DeregisterPackageVersion","DescribeApp","DescribeAppDeployment","DescribeAppVersion","DescribeApplicationInstance","DescribeApplicationInstanceDetails","DescribeDataSource","DescribeDevice","DescribeDeviceJob","DescribeModel","DescribeNode","DescribeNodeFromTemplateJob","DescribePackage","DescribePackageImportJob","DescribePackageVersion","DescribeSoftware","GetDeploymentConfiguration","GetInputs","GetStreams","GetWebSocketURL","ListAppDeploymentOperations","ListAppVersions","ListApplicationInstanceDependencies","ListApplicationInstanceNodeInstances","ListApplicationInstances","ListApps","ListDataSources","ListDeploymentConfigurations","ListDevices","ListDevicesJobs","ListModels","ListNodeFromTemplateJobs","ListNodes","ListPackageImportJobs","ListPackages","ListTagsForResource","ProvisionDevice","RegisterPackageVersion","RemoveApplicationInstance","TagResource","UntagResource","UpdateApp","UpdateAppConfiguration","UpdateDataSource","UpdateDeviceMetadata"]',
    ARNFormat:
      "arn:${Partition}:panorama:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:panorama:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspanorama.html",
  },
  {
    ServiceShortName: "pi",
    ServiceName: "AWS Performance Insights",
    Actions:
      '["DescribeDimensionKeys","GetDimensionKeyDetails","GetResourceMetadata","GetResourceMetrics","ListAvailableResourceDimensions","ListAvailableResourceMetrics"]',
    ARNFormat: "arn:aws:pi:${Region}:${Account}:${ResourceType}/${RelativeId}",
    ARNRegex: "^arn:aws:pi:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsperformanceinsights.html",
  },
  {
    ServiceShortName: "pricing",
    ServiceName: "AWS Price List",
    Actions: '["DescribeServices","GetAttributeValues","GetProducts"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspricelist.html",
  },
  {
    ServiceShortName: "proton",
    ServiceName: "AWS Proton",
    Actions:
      '["AcceptEnvironmentAccountConnection","CancelEnvironmentDeployment","CancelServiceInstanceDeployment","CancelServicePipelineDeployment","CreateEnvironment","CreateEnvironmentAccountConnection","CreateEnvironmentTemplate","CreateEnvironmentTemplateMajorVersion","CreateEnvironmentTemplateMinorVersion","CreateEnvironmentTemplateVersion","CreateRepository","CreateService","CreateServiceTemplate","CreateServiceTemplateMajorVersion","CreateServiceTemplateMinorVersion","CreateServiceTemplateVersion","CreateTemplateSyncConfig","DeleteAccountRoles","DeleteEnvironment","DeleteEnvironmentAccountConnection","DeleteEnvironmentTemplate","DeleteEnvironmentTemplateMajorVersion","DeleteEnvironmentTemplateMinorVersion","DeleteEnvironmentTemplateVersion","DeleteRepository","DeleteService","DeleteServiceTemplate","DeleteServiceTemplateMajorVersion","DeleteServiceTemplateMinorVersion","DeleteServiceTemplateVersion","DeleteTemplateSyncConfig","GetAccountRoles","GetAccountSettings","GetEnvironment","GetEnvironmentAccountConnection","GetEnvironmentTemplate","GetEnvironmentTemplateMajorVersion","GetEnvironmentTemplateMinorVersion","GetEnvironmentTemplateVersion","GetRepository","GetRepositorySyncStatus","GetService","GetServiceInstance","GetServiceTemplate","GetServiceTemplateMajorVersion","GetServiceTemplateMinorVersion","GetServiceTemplateVersion","GetTemplateSyncConfig","GetTemplateSyncStatus","ListEnvironmentAccountConnections","ListEnvironmentOutputs","ListEnvironmentProvisionedResources","ListEnvironmentTemplateMajorVersions","ListEnvironmentTemplateMinorVersions","ListEnvironmentTemplateVersions","ListEnvironmentTemplates","ListEnvironments","ListRepositories","ListRepositorySyncDefinitions","ListServiceInstanceOutputs","ListServiceInstanceProvisionedResources","ListServiceInstances","ListServicePipelineOutputs","ListServicePipelineProvisionedResources","ListServiceTemplateMajorVersions","ListServiceTemplateMinorVersions","ListServiceTemplateVersions","ListServiceTemplates","ListServices","ListTagsForResource","NotifyResourceDeploymentStatusChange","RejectEnvironmentAccountConnection","TagResource","UntagResource","UpdateAccountRoles","UpdateAccountSettings","UpdateEnvironment","UpdateEnvironmentAccountConnection","UpdateEnvironmentTemplate","UpdateEnvironmentTemplateMajorVersion","UpdateEnvironmentTemplateMinorVersion","UpdateEnvironmentTemplateVersion","UpdateService","UpdateServiceInstance","UpdateServicePipeline","UpdateServiceTemplate","UpdateServiceTemplateMajorVersion","UpdateServiceTemplateMinorVersion","UpdateServiceTemplateVersion","UpdateTemplateSyncConfig"]',
    ARNFormat:
      "arn:${Partition}:proton:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:proton:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","proton:EnvironmentTemplate","proton:ServiceTemplate"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsproton.html",
  },
  {
    ServiceShortName: "purchase-orders",
    ServiceName: "AWS Purchase Orders Console",
    Actions: '["ModifyPurchaseOrders","ViewPurchaseOrders"]',
    ARNFormat:
      "arn:aws:purchase-orders:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:purchase-orders:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awspurchaseordersconsole.html",
  },
  {
    ServiceShortName: "resiliencehub",
    ServiceName: "AWS Resilience Hub Service",
    Actions:
      '["AddDraftAppVersionResourceMappings","CreateApp","CreateRecommendationTemplate","CreateResiliencyPolicy","DeleteApp","DeleteAppAssessment","DeleteRecommendationTemplate","DeleteResiliencyPolicy","DescribeApp","DescribeAppAssessment","DescribeAppVersionResourcesResolutionStatus","DescribeAppVersionTemplate","DescribeDraftAppVersionResourcesImportStatus","DescribeResiliencyPolicy","ImportResourcesToDraftAppVersion","ListAlarmRecommendations","ListAppAssessments","ListAppComponentCompliances","ListAppComponentRecommendations","ListAppVersionResourceMappings","ListAppVersionResources","ListAppVersions","ListApps","ListRecommendationTemplates","ListResiliencyPolicies","ListSopRecommendations","ListSuggestedResiliencyPolicies","ListTagsForResource","ListTestRecommendations","ListUnsupportedAppVersionResources","PublishAppVersion","PutDraftAppVersionTemplate","RemoveDraftAppVersionResourceMappings","ResolveAppVersionResources","StartAppAssessment","TagResource","UntagResource","UpdateApp","UpdateResiliencyPolicy"]',
    ARNFormat:
      "arn:aws:resiliencehub:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:resiliencehub:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresiliencehubservice.html",
  },
  {
    ServiceShortName: "ram",
    ServiceName: "AWS Resource Access Manager",
    Actions:
      '["AcceptResourceShareInvitation","AssociateResourceShare","AssociateResourceSharePermission","CreateResourceShare","DeleteResourceShare","DisassociateResourceShare","DisassociateResourceSharePermission","EnableSharingWithAwsOrganization","GetPermission","GetResourcePolicies","GetResourceShareAssociations","GetResourceShareInvitations","GetResourceShares","ListPendingInvitationResources","ListPermissionVersions","ListPermissions","ListPrincipals","ListResourceSharePermissions","ListResourceTypes","ListResources","PromoteResourceShareCreatedFromPolicy","RejectResourceShareInvitation","TagResource","UntagResource","UpdateResourceShare"]',
    ARNFormat:
      "arn:aws:ram:${Region}:${AccountId}:resource-share/${ResourceUUID}",
    ARNRegex: "^arn:aws:ram:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","ram:AllowsExternalPrincipals","ram:PermissionArn","ram:PermissionResourceType","ram:Principal","ram:RequestedAllowsExternalPrincipals","ram:RequestedResourceType","ram:ResourceArn","ram:ResourceShareName","ram:ShareOwnerAccountId"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourceaccessmanager.html",
  },
  {
    ServiceShortName: "resource-groups",
    ServiceName: "AWS Resource Groups",
    Actions:
      '["CreateGroup","DeleteGroup","GetGroup","GetGroupConfiguration","GetGroupQuery","GetTags","GroupResources","ListGroupResources","ListGroups","PutGroupConfiguration","PutGroupPolicy","SearchResources","Tag","UngroupResources","Untag","UpdateGroup","UpdateGroupQuery"]',
    ARNFormat:
      "arn:${Partition}:resource-groups:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:resource-groups:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsresourcegroups.html",
  },
  {
    ServiceShortName: "robomaker",
    ServiceName: "AWS RoboMaker",
    Actions:
      '["BatchDeleteWorlds","BatchDescribeSimulationJob","CancelDeploymentJob","CancelSimulationJob","CancelSimulationJobBatch","CancelWorldExportJob","CancelWorldGenerationJob","CreateDeploymentJob","CreateFleet","CreateRobot","CreateRobotApplication","CreateRobotApplicationVersion","CreateSimulationApplication","CreateSimulationApplicationVersion","CreateSimulationJob","CreateWorldExportJob","CreateWorldGenerationJob","CreateWorldTemplate","DeleteFleet","DeleteRobot","DeleteRobotApplication","DeleteSimulationApplication","DeleteWorldTemplate","DeregisterRobot","DescribeDeploymentJob","DescribeFleet","DescribeRobot","DescribeRobotApplication","DescribeSimulationApplication","DescribeSimulationJob","DescribeSimulationJobBatch","DescribeWorld","DescribeWorldExportJob","DescribeWorldGenerationJob","DescribeWorldTemplate","GetWorldTemplateBody","ListDeploymentJobs","ListFleets","ListRobotApplications","ListRobots","ListSimulationApplications","ListSimulationJobBatches","ListSimulationJobs","ListSupportedAvailabilityZones","ListTagsForResource","ListWorldExportJobs","ListWorldGenerationJobs","ListWorldTemplates","ListWorlds","RegisterRobot","RestartSimulationJob","StartSimulationJobBatch","SyncDeploymentJob","TagResource","UntagResource","UpdateRobotApplication","UpdateRobotDeployment","UpdateSimulationApplication","UpdateWorldTemplate"]',
    ARNFormat:
      "arn:${Partition}:robomaker:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:robomaker:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsrobomaker.html",
  },
  {
    ServiceShortName: "savingsplans",
    ServiceName: "AWS Savings Plans",
    Actions:
      '["CreateSavingsPlan","DeleteQueuedSavingsPlan","DescribeSavingsPlanRates","DescribeSavingsPlans","DescribeSavingsPlansOfferingRates","DescribeSavingsPlansOfferings","ListTagsForResource","TagResource","UntagResource"]',
    ARNFormat:
      "arn:aws:savingsplans::${Account}:${ResourceType}/${ResourcePath}",
    ARNRegex: "^arn:aws:savingsplans:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssavingsplans.html",
  },
  {
    ServiceShortName: "secretsmanager",
    ServiceName: "AWS Secrets Manager",
    Actions:
      '["CancelRotateSecret","CreateSecret","DeleteResourcePolicy","DeleteSecret","DescribeSecret","GetRandomPassword","GetResourcePolicy","GetSecretValue","ListSecretVersionIds","ListSecrets","PutResourcePolicy","PutSecretValue","RemoveRegionsFromReplication","ReplicateSecretToRegions","RestoreSecret","RotateSecret","StopReplicationToReplica","TagResource","UntagResource","UpdateSecret","UpdateSecretVersionStage","ValidateResourcePolicy"]',
    ARNFormat:
      "arn:${Partition}:secretsmanager:${Region}:${Account}:secret:${SecretId}",
    ARNRegex: "^arn:${Partition}:secretsmanager:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","secretsmanager:AddReplicaRegions","secretsmanager:BlockPublicPolicy","secretsmanager:Description","secretsmanager:ForceDeleteWithoutRecovery","secretsmanager:ForceOverwriteReplicaSecret","secretsmanager:KmsKeyId","secretsmanager:ModifyRotationRules","secretsmanager:Name","secretsmanager:RecoveryWindowInDays","secretsmanager:ResourceTag/tag-key","secretsmanager:RotateImmediately","secretsmanager:RotationLambdaARN","secretsmanager:SecretId","secretsmanager:SecretPrimaryRegion","secretsmanager:VersionId","secretsmanager:VersionStage","secretsmanager:resource/AllowRotationLambdaArn"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecretsmanager.html",
  },
  {
    ServiceShortName: "securityhub",
    ServiceName: "AWS Security Hub",
    Actions:
      '["AcceptAdministratorInvitation","AcceptInvitation","BatchDisableStandards","BatchEnableStandards","BatchGetStandardsControlAssociations","BatchImportFindings","BatchUpdateFindings","BatchUpdateStandardsControlAssociations","CreateActionTarget","CreateFindingAggregator","CreateInsight","CreateMembers","DeclineInvitations","DeleteActionTarget","DeleteFindingAggregator","DeleteInsight","DeleteInvitations","DeleteMembers","DescribeActionTargets","DescribeHub","DescribeOrganizationConfiguration","DescribeProducts","DescribeStandards","DescribeStandardsControls","DisableImportFindingsForProduct","DisableOrganizationAdminAccount","DisableSecurityHub","DisassociateFromAdministratorAccount","DisassociateFromMasterAccount","DisassociateMembers","EnableImportFindingsForProduct","EnableOrganizationAdminAccount","EnableSecurityHub","GetAdhocInsightResults","GetAdministratorAccount","GetControlFindingSummary","GetEnabledStandards","GetFindingAggregator","GetFindings","GetFreeTrialEndDate","GetFreeTrialUsage","GetInsightFindingTrend","GetInsightResults","GetInsights","GetInvitationsCount","GetMasterAccount","GetMembers","GetUsage","InviteMembers","ListControlEvaluationSummaries","ListEnabledProductsForImport","ListFindingAggregators","ListInvitations","ListMembers","ListOrganizationAdminAccounts","ListSecurityControlDefinitions","ListTagsForResource","SendFindingEvents","SendInsightEvents","TagResource","UntagResource","UpdateActionTarget","UpdateFindingAggregator","UpdateFindings","UpdateInsight","UpdateOrganizationConfiguration","UpdateSecurityHubConfiguration","UpdateStandardsControl"]',
    ARNFormat: "arn:${Partition}:securityhub:${Region}:${Account}:.+",
    ARNRegex: "^arn:${Partition}:securityhub:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","securityhub:ASFFSyntaxPath/${ASFFSyntaxPath}","securityhub:TargetAccount"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecurityhub.html",
  },
  {
    ServiceShortName: "sts",
    ServiceName: "AWS Security Token Service",
    Actions:
      '["AssumeRole","AssumeRoleWithSAML","AssumeRoleWithWebIdentity","DecodeAuthorizationMessage","GetAccessKeyInfo","GetCallerIdentity","GetFederationToken","GetServiceBearerToken","GetSessionToken","SetSourceIdentity","TagSession"]',
    ARNFormat: "arn:aws:iam::${Namespace}:${RelativeId}",
    ARNRegex: "^arn:aws:iam::.+",
    conditionKeys:
      '["accounts.google.com:aud","accounts.google.com:oaud","accounts.google.com:sub","aws:FederatedProvider","aws:PrincipalTag/${TagKey}","aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:SourceIdentity","aws:TagKeys","cognito-identity.amazonaws.com:amr","cognito-identity.amazonaws.com:aud","cognito-identity.amazonaws.com:sub","graph.facebook.com:app_id","graph.facebook.com:id","iam:ResourceTag/${TagKey}","saml:aud","saml:cn","saml:commonName","saml:doc","saml:eduorghomepageuri","saml:eduorgidentityauthnpolicyuri","saml:eduorglegalname","saml:eduorgsuperioruri","saml:eduorgwhitepagesuri","saml:edupersonaffiliation","saml:edupersonassurance","saml:edupersonentitlement","saml:edupersonnickname","saml:edupersonorgdn","saml:edupersonorgunitdn","saml:edupersonprimaryaffiliation","saml:edupersonprimaryorgunitdn","saml:edupersonprincipalname","saml:edupersonscopedaffiliation","saml:edupersontargetedid","saml:givenName","saml:iss","saml:mail","saml:name","saml:namequalifier","saml:organizationStatus","saml:primaryGroupSID","saml:sub","saml:sub_type","saml:surname","saml:uid","saml:x500UniqueIdentifier","sts:AWSServiceName","sts:ExternalId","sts:RoleSessionName","sts:SourceIdentity","sts:TransitiveTagKeys","www.amazon.com:app_id","www.amazon.com:user_id"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecuritytokenservice.html",
  },
  {
    ServiceShortName: "sms",
    ServiceName: "AWS Server Migration Service",
    Actions:
      '["CreateApp","CreateReplicationJob","DeleteApp","DeleteAppLaunchConfiguration","DeleteAppReplicationConfiguration","DeleteAppValidationConfiguration","DeleteReplicationJob","DeleteServerCatalog","DisassociateConnector","GenerateChangeSet","GenerateTemplate","GetApp","GetAppLaunchConfiguration","GetAppReplicationConfiguration","GetAppValidationConfiguration","GetAppValidationOutput","GetConnectors","GetMessages","GetReplicationJobs","GetReplicationRuns","GetServers","ImportAppCatalog","ImportServerCatalog","LaunchApp","ListApps","NotifyAppValidationOutput","PutAppLaunchConfiguration","PutAppReplicationConfiguration","PutAppValidationConfiguration","SendMessage","StartAppReplication","StartOnDemandAppReplication","StartOnDemandReplicationRun","StopAppReplication","TerminateApp","UpdateApp","UpdateReplicationJob"]',
    ARNFormat:
      "arn:aws:<serviceName>:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:<serviceName>:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservermigrationservice.html",
  },
  {
    ServiceShortName: "serverlessrepo",
    ServiceName: "AWS Serverless Application Repository",
    Actions:
      '["CreateApplication","CreateApplicationVersion","CreateCloudFormationChangeSet","CreateCloudFormationTemplate","DeleteApplication","GetApplication","GetApplicationPolicy","GetCloudFormationTemplate","ListApplicationDependencies","ListApplicationVersions","ListApplications","PutApplicationPolicy","SearchApplications","UnshareApplication","UpdateApplication"]',
    ARNFormat:
      "arn:aws:serverlessrepo:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:serverlessrepo:.+:.+:.+",
    conditionKeys: '"serverlessrepo:applicationType"',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsserverlessapplicationrepository.html",
  },
  {
    ServiceShortName: "servicecatalog",
    ServiceName: "AWS Service Catalog",
    Actions:
      '["AcceptPortfolioShare","AssociateAttributeGroup","AssociateBudgetWithResource","AssociatePrincipalWithPortfolio","AssociateProductWithPortfolio","AssociateResource","AssociateServiceActionWithProvisioningArtifact","AssociateTagOptionWithResource","BatchAssociateServiceActionWithProvisioningArtifact","BatchDisassociateServiceActionFromProvisioningArtifact","CopyProduct","CreateApplication","CreateAttributeGroup","CreateConstraint","CreatePortfolio","CreatePortfolioShare","CreateProduct","CreateProvisionedProductPlan","CreateProvisioningArtifact","CreateServiceAction","CreateTagOption","DeleteApplication","DeleteAttributeGroup","DeleteConstraint","DeletePortfolio","DeletePortfolioShare","DeleteProduct","DeleteProvisionedProductPlan","DeleteProvisioningArtifact","DeleteServiceAction","DeleteTagOption","DescribeConstraint","DescribeCopyProductStatus","DescribePortfolio","DescribePortfolioShareStatus","DescribePortfolioShares","DescribeProduct","DescribeProductAsAdmin","DescribeProductView","DescribeProvisionedProduct","DescribeProvisionedProductPlan","DescribeProvisioningArtifact","DescribeProvisioningParameters","DescribeRecord","DescribeServiceAction","DescribeServiceActionExecutionParameters","DescribeTagOption","DisableAWSOrganizationsAccess","DisassociateAttributeGroup","DisassociateBudgetFromResource","DisassociatePrincipalFromPortfolio","DisassociateProductFromPortfolio","DisassociateResource","DisassociateServiceActionFromProvisioningArtifact","DisassociateTagOptionFromResource","EnableAWSOrganizationsAccess","ExecuteProvisionedProductPlan","ExecuteProvisionedProductServiceAction","GetAWSOrganizationsAccessStatus","GetApplication","GetAssociatedResource","GetAttributeGroup","GetProvisionedProductOutputs","ImportAsProvisionedProduct","ListAcceptedPortfolioShares","ListApplications","ListAssociatedAttributeGroups","ListAssociatedResources","ListAttributeGroups","ListBudgetsForResource","ListConstraintsForPortfolio","ListLaunchPaths","ListOrganizationPortfolioAccess","ListPortfolioAccess","ListPortfolios","ListPortfoliosForProduct","ListPrincipalsForPortfolio","ListProvisionedProductPlans","ListProvisioningArtifacts","ListProvisioningArtifactsForServiceAction","ListRecordHistory","ListResourcesForTagOption","ListServiceActions","ListServiceActionsForProvisioningArtifact","ListStackInstancesForProvisionedProduct","ListTagOptions","ListTagsForResource","ProvisionProduct","RejectPortfolioShare","ScanProvisionedProducts","SearchProducts","SearchProductsAsAdmin","SearchProvisionedProducts","SyncResource","TagResource","TerminateProvisionedProduct","UntagResource","UpdateApplication","UpdateAttributeGroup","UpdateConstraint","UpdatePortfolio","UpdatePortfolioShare","UpdateProduct","UpdateProvisionedProduct","UpdateProvisionedProductProperties","UpdateProvisioningArtifact","UpdateServiceAction","UpdateTagOption"]',
    ARNFormat:
      "arn:aws:(catalog|servicecatalog):${Region}:${Account}:${ResourceType}/${Id}",
    ARNRegex: "^arn:aws:(catalog|servicecatalog):.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","servicecatalog:accountLevel","servicecatalog:roleLevel","servicecatalog:userLevel"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsservicecatalog.html",
  },
  {
    ServiceShortName: "shield",
    ServiceName: "AWS Shield",
    Actions:
      '["AssociateDRTLogBucket","AssociateDRTRole","AssociateHealthCheck","AssociateProactiveEngagementDetails","CreateProtection","CreateProtectionGroup","CreateSubscription","DeleteProtection","DeleteProtectionGroup","DeleteSubscription","DescribeAttack","DescribeAttackStatistics","DescribeDRTAccess","DescribeEmergencyContactSettings","DescribeProtection","DescribeProtectionGroup","DescribeSubscription","DisableApplicationLayerAutomaticResponse","DisableProactiveEngagement","DisassociateDRTLogBucket","DisassociateDRTRole","DisassociateHealthCheck","EnableApplicationLayerAutomaticResponse","EnableProactiveEngagement","GetSubscriptionState","ListAttacks","ListProtectionGroups","ListProtections","ListResourcesInProtectionGroup","ListTagsForResource","TagResource","UntagResource","UpdateApplicationLayerAutomaticResponse","UpdateEmergencyContactSettings","UpdateProtectionGroup","UpdateSubscription"]',
    ARNFormat: "arn:aws:shield::${Account}:${Resource}/${ResourceId}",
    ARNRegex: "^arn:aws:shield::[0-9]+:.+/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsshield.html",
  },
  {
    ServiceShortName: "signer",
    ServiceName: "AWS Signer",
    Actions:
      '["AddProfilePermission","CancelSigningProfile","DescribeSigningJob","GetSigningPlatform","GetSigningProfile","ListProfilePermissions","ListSigningJobs","ListSigningPlatforms","ListSigningProfiles","ListTagsForResource","PutSigningProfile","RemoveProfilePermission","RevokeSignature","RevokeSigningProfile","StartSigningJob","TagResource","UntagResource"]',
    ARNFormat:
      "arn:${Partition}:signer:${Region}:${Account}:/${ResourceType}/${ResourceIdentifier}",
    ARNRegex: "^arn:${Partition}:signer:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","signer:ProfileVersion"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssigner.html",
  },
  {
    ServiceShortName: "snow-device-management",
    ServiceName: "AWS Snow Device Management",
    Actions:
      '["CancelTask","CreateTask","DescribeDevice","DescribeDeviceEc2Instances","DescribeExecution","DescribeTask","ListDeviceResources","ListDevices","ListExecutions","ListTagsForResource","ListTasks","TagResource","UntagResource"]',
    ARNFormat:
      "arn:aws:snow-device-management:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:snow-device-management:.+:.+:.+/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssnowdevicemanagement.html",
  },
  {
    ServiceShortName: "snowball",
    ServiceName: "AWS Snowball",
    Actions:
      '["CancelCluster","CancelJob","CreateAddress","CreateCluster","CreateJob","CreateLongTermPricing","CreateReturnShippingLabel","DescribeAddress","DescribeAddresses","DescribeCluster","DescribeJob","DescribeReturnShippingLabel","GetJobManifest","GetJobUnlockCode","GetSnowballUsage","GetSoftwareUpdates","ListClusterJobs","ListClusters","ListCompatibleImages","ListJobs","ListLongTermPricing","UpdateCluster","UpdateJob","UpdateJobShipmentState","UpdateLongTermPricing"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssnowball.html",
  },
  {
    ServiceShortName: "sqlworkbench",
    ServiceName: "AWS SQL Workbench",
    Actions:
      '["AssociateConnectionWithChart","AssociateConnectionWithTab","AssociateQueryWithTab","BatchDeleteFolder","CreateAccount","CreateChart","CreateConnection","CreateFolder","CreateSavedQuery","DeleteChart","DeleteConnection","DeleteSavedQuery","DeleteTab","DriverExecute","GenerateSession","GetAccountInfo","GetChart","GetConnection","GetSavedQuery","GetUserInfo","GetUserWorkspaceSettings","ListConnections","ListDatabases","ListFiles","ListRedshiftClusters","ListSampleDatabases","ListSavedQueryVersions","ListTabs","ListTaggedResources","ListTagsForResource","PutTab","PutUserWorkspaceSettings","TagResource","UntagResource","UpdateChart","UpdateConnection","UpdateFileFolder","UpdateFolder","UpdateSavedQuery"]',
    ARNFormat:
      "arn:aws:sqlworkbench:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:sqlworkbench:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssqlworkbench.html",
  },
  {
    ServiceShortName: "sso",
    ServiceName: "AWS SSO",
    Actions:
      '["AssociateDirectory","AssociateProfile","AttachManagedPolicyToPermissionSet","CreateAccountAssignment","CreateApplicationInstance","CreateApplicationInstanceCertificate","CreateInstanceAccessControlAttributeConfiguration","CreateManagedApplicationInstance","CreatePermissionSet","CreateProfile","CreateTrust","DeleteAccountAssignment","DeleteApplicationInstance","DeleteApplicationInstanceCertificate","DeleteInlinePolicyFromPermissionSet","DeleteInstanceAccessControlAttributeConfiguration","DeleteManagedApplicationInstance","DeletePermissionSet","DeletePermissionsPolicy","DeleteProfile","DescribeAccountAssignmentCreationStatus","DescribeAccountAssignmentDeletionStatus","DescribeInstanceAccessControlAttributeConfiguration","DescribePermissionSet","DescribePermissionSetProvisioningStatus","DescribePermissionsPolicies","DescribeRegisteredRegions","DetachManagedPolicyFromPermissionSet","DisassociateDirectory","DisassociateProfile","GetApplicationInstance","GetApplicationTemplate","GetInlinePolicyForPermissionSet","GetManagedApplicationInstance","GetMfaDeviceManagementForDirectory","GetPermissionSet","GetPermissionsPolicy","GetProfile","GetSSOStatus","GetSharedSsoConfiguration","GetSsoConfiguration","GetTrust","ImportApplicationInstanceServiceProviderMetadata","ListAccountAssignmentCreationStatus","ListAccountAssignmentDeletionStatus","ListAccountAssignments","ListAccountsForProvisionedPermissionSet","ListApplicationInstanceCertificates","ListApplicationInstances","ListApplicationTemplates","ListApplications","ListDirectoryAssociations","ListInstances","ListManagedPoliciesInPermissionSet","ListPermissionSetProvisioningStatus","ListPermissionSets","ListPermissionSetsProvisionedToAccount","ListProfileAssociations","ListProfiles","ListTagsForResource","ProvisionPermissionSet","PutInlinePolicyToPermissionSet","PutMfaDeviceManagementForDirectory","PutPermissionsPolicy","SearchGroups","SearchUsers","StartSSO","TagResource","UntagResource","UpdateApplicationInstanceActiveCertificate","UpdateApplicationInstanceDisplayData","UpdateApplicationInstanceResponseConfiguration","UpdateApplicationInstanceResponseSchemaConfiguration","UpdateApplicationInstanceSecurityConfiguration","UpdateApplicationInstanceServiceProviderConfiguration","UpdateApplicationInstanceStatus","UpdateDirectoryAssociation","UpdateInstanceAccessControlAttributeConfiguration","UpdateManagedApplicationInstanceStatus","UpdatePermissionSet","UpdateProfile","UpdateSSOConfiguration","UpdateTrust"]',
    ARNFormat: "arn:${Partition}:sso:::${RelativeId}",
    ARNRegex: "^arn:${Partition}:sso:::.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssso.html",
  },
  {
    ServiceShortName: "sso-directory",
    ServiceName: "AWS SSO Directory",
    Actions:
      '["AddMemberToGroup","CompleteVirtualMfaDeviceRegistration","CompleteWebAuthnDeviceRegistration","CreateAlias","CreateBearerToken","CreateExternalIdPConfigurationForDirectory","CreateGroup","CreateProvisioningTenant","CreateUser","DeleteBearerToken","DeleteExternalIdPCertificate","DeleteExternalIdPConfigurationForDirectory","DeleteGroup","DeleteMfaDeviceForUser","DeleteProvisioningTenant","DeleteUser","DescribeDirectory","DescribeGroup","DescribeGroups","DescribeProvisioningTenant","DescribeUser","DescribeUserByUniqueAttribute","DescribeUsers","DisableExternalIdPConfigurationForDirectory","DisableUser","EnableExternalIdPConfigurationForDirectory","EnableUser","GetAWSSPConfigurationForDirectory","GetUserPoolInfo","ImportExternalIdPCertificate","IsMemberInGroup","ListBearerTokens","ListExternalIdPCertificates","ListExternalIdPConfigurationsForDirectory","ListGroupsForMember","ListGroupsForUser","ListMembersInGroup","ListMfaDevicesForUser","ListProvisioningTenants","RemoveMemberFromGroup","SearchGroups","SearchUsers","StartVirtualMfaDeviceRegistration","StartWebAuthnDeviceRegistration","UpdateExternalIdPConfigurationForDirectory","UpdateGroup","UpdateGroupDisplayName","UpdateMfaDeviceForUser","UpdatePassword","UpdateUser","UpdateUserName","VerifyEmail"]',
    ARNFormat:
      "arn:${Partition}:sso-directory:${Region}:${Account}:<relative-id>",
    ARNRegex: "^arn:${Partition}:sso-directory:${Region}:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsssodirectory.html",
  },
  {
    ServiceShortName: "states",
    ServiceName: "AWS Step Functions",
    Actions:
      '["CreateActivity","CreateStateMachine","DeleteActivity","DeleteStateMachine","DescribeActivity","DescribeExecution","DescribeStateMachine","DescribeStateMachineForExecution","GetActivityTask","GetExecutionHistory","ListActivities","ListExecutions","ListStateMachines","ListTagsForResource","SendTaskFailure","SendTaskHeartbeat","SendTaskSuccess","StartExecution","StartSyncExecution","StopExecution","TagResource","UntagResource","UpdateStateMachine"]',
    ARNFormat:
      "arn:aws:<serviceName>:<region>:<account>:<resourceType>:<resourceName>",
    ARNRegex: "^arn:aws:states:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsstepfunctions.html",
  },
  {
    ServiceShortName: "support",
    ServiceName: "AWS Support",
    Actions:
      '["AddAttachmentsToSet","AddCommunicationToCase","CreateCase","DescribeAttachment","DescribeCaseAttributes","DescribeCases","DescribeCommunications","DescribeIssueTypes","DescribeServices","DescribeSeverityLevels","DescribeSupportLevel","DescribeTrustedAdvisorCheckRefreshStatuses","DescribeTrustedAdvisorCheckResult","DescribeTrustedAdvisorCheckSummaries","DescribeTrustedAdvisorChecks","InitiateCallForCase","InitiateChatForCase","PutCaseAttributes","RateCaseCommunication","RefreshTrustedAdvisorCheck","ResolveCase","SearchForCases"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssupport.html",
  },
  {
    ServiceShortName: "sustainability",
    ServiceName: "AWS Sustainability",
    Actions: '"GetCarbonFootprintSummary"',
    ARNFormat:
      "arn:aws:sustainability:${Region}:${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:sustainability:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssustainability.html",
  },
  {
    ServiceShortName: "ssm",
    ServiceName: "AWS Systems Manager",
    Actions:
      '["AddTagsToResource","AssociateOpsItemRelatedItem","CancelCommand","CancelMaintenanceWindowExecution","CreateActivation","CreateAssociation","CreateAssociationBatch","CreateDocument","CreateMaintenanceWindow","CreateOpsItem","CreateOpsMetadata","CreatePatchBaseline","CreateResourceDataSync","DeleteActivation","DeleteAssociation","DeleteDocument","DeleteInventory","DeleteMaintenanceWindow","DeleteOpsMetadata","DeleteParameter","DeleteParameters","DeletePatchBaseline","DeleteResourceDataSync","DeregisterManagedInstance","DeregisterPatchBaselineForPatchGroup","DeregisterTargetFromMaintenanceWindow","DeregisterTaskFromMaintenanceWindow","DescribeActivations","DescribeAssociation","DescribeAssociationExecutionTargets","DescribeAssociationExecutions","DescribeAutomationExecutions","DescribeAutomationStepExecutions","DescribeAvailablePatches","DescribeDocument","DescribeDocumentParameters","DescribeDocumentPermission","DescribeEffectiveInstanceAssociations","DescribeEffectivePatchesForPatchBaseline","DescribeInstanceAssociationsStatus","DescribeInstanceInformation","DescribeInstancePatchStates","DescribeInstancePatchStatesForPatchGroup","DescribeInstancePatches","DescribeInstanceProperties","DescribeInventoryDeletions","DescribeMaintenanceWindowExecutionTaskInvocations","DescribeMaintenanceWindowExecutionTasks","DescribeMaintenanceWindowExecutions","DescribeMaintenanceWindowSchedule","DescribeMaintenanceWindowTargets","DescribeMaintenanceWindowTasks","DescribeMaintenanceWindows","DescribeMaintenanceWindowsForTarget","DescribeOpsItems","DescribeParameters","DescribePatchBaselines","DescribePatchGroupState","DescribePatchGroups","DescribePatchProperties","DescribeSessions","DisassociateOpsItemRelatedItem","GetAutomationExecution","GetCalendarState","GetCommandInvocation","GetConnectionStatus","GetDefaultPatchBaseline","GetDeployablePatchSnapshotForInstance","GetDocument","GetInventory","GetInventorySchema","GetMaintenanceWindow","GetMaintenanceWindowExecution","GetMaintenanceWindowExecutionTask","GetMaintenanceWindowExecutionTaskInvocation","GetMaintenanceWindowTask","GetManifest","GetOpsItem","GetOpsMetadata","GetOpsSummary","GetParameter","GetParameterHistory","GetParameters","GetParametersByPath","GetPatchBaseline","GetPatchBaselineForPatchGroup","GetServiceSetting","LabelParameterVersion","ListAssociationVersions","ListAssociations","ListCommandInvocations","ListCommands","ListComplianceItems","ListComplianceSummaries","ListDocumentMetadataHistory","ListDocumentVersions","ListDocuments","ListInstanceAssociations","ListInventoryEntries","ListOpsItemEvents","ListOpsItemRelatedItems","ListOpsMetadata","ListResourceComplianceSummaries","ListResourceDataSync","ListTagsForResource","ModifyDocumentPermission","PutComplianceItems","PutConfigurePackageResult","PutInventory","PutParameter","RegisterDefaultPatchBaseline","RegisterManagedInstance","RegisterPatchBaselineForPatchGroup","RegisterTargetWithMaintenanceWindow","RegisterTaskWithMaintenanceWindow","RemoveTagsFromResource","ResetServiceSetting","ResumeSession","SendAutomationSignal","SendCommand","StartAssociationsOnce","StartAutomationExecution","StartChangeRequestExecution","StartSession","StopAutomationExecution","TerminateSession","UnlabelParameterVersion","UpdateAssociation","UpdateAssociationStatus","UpdateDocument","UpdateDocumentDefaultVersion","UpdateDocumentMetadata","UpdateInstanceAssociationStatus","UpdateInstanceInformation","UpdateMaintenanceWindow","UpdateMaintenanceWindowTarget","UpdateMaintenanceWindowTask","UpdateManagedInstanceRole","UpdateOpsItem","UpdateOpsMetadata","UpdatePatchBaseline","UpdateResourceDataSync","UpdateServiceSetting"]',
    ARNFormat: "arn:${Partition}:ssm:${Region}:${Account}:${RelativeId}",
    ARNRegex: "^arn:${Partition}:(ssm|ec2):.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","ssm:DocumentCategories","ssm:Overwrite","ssm:Recursive","ssm:SessionDocumentAccessCheck","ssm:SyncType","ssm:resourceTag/tag-key"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssystemsmanager.html",
  },
  {
    ServiceShortName: "ssm-guiconnect",
    ServiceName: "AWS Systems Manager GUI Connect",
    Actions: '["CancelConnection","GetConnection","StartConnection"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssystemsmanagerguiconnect.html",
  },
  {
    ServiceShortName: "ssm-incidents",
    ServiceName: "AWS Systems Manager Incident Manager",
    Actions:
      '["CreateReplicationSet","CreateResponsePlan","CreateTimelineEvent","DeleteIncidentRecord","DeleteReplicationSet","DeleteResourcePolicy","DeleteResponsePlan","DeleteTimelineEvent","GetIncidentRecord","GetReplicationSet","GetResourcePolicies","GetResponsePlan","GetTimelineEvent","ListIncidentRecords","ListRelatedItems","ListReplicationSets","ListResponsePlans","ListTagsForResource","ListTimelineEvents","PutResourcePolicy","StartIncident","TagResource","UntagResource","UpdateDeletionProtection","UpdateIncidentRecord","UpdateRelatedItems","UpdateReplicationSet","UpdateResponsePlan","UpdateTimelineEvent"]',
    ARNFormat:
      "arn:${Partition}:ssm-incidents::${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:ssm-incidents::.+:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssystemsmanagerincidentmanager.html",
  },
  {
    ServiceShortName: "ssm-contacts",
    ServiceName: "AWS Systems Manager Incident Manager Contacts",
    Actions:
      '["AcceptPage","ActivateContactChannel","AssociateContact","CreateContact","CreateContactChannel","DeactivateContactChannel","DeleteContact","DeleteContactChannel","DeleteContactPolicy","DescribeEngagement","DescribePage","GetContact","GetContactChannel","GetContactPolicy","ListContactChannels","ListContacts","ListEngagements","ListPageReceipts","ListPagesByContact","ListPagesByEngagement","ListTagsForResource","PutContactPolicy","SendActivationCode","StartEngagement","StopEngagement","TagResource","UntagResource","UpdateContact","UpdateContactChannel","UpdateContactPolicy"]',
    ARNFormat:
      "arn:aws:ssm-contacts:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:ssm-contacts:.+",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssystemsmanagerincidentmanagercontacts.html",
  },
  {
    ServiceShortName: "resource-explorer",
    ServiceName: "AWS Tag Editor",
    Actions: '["ListResourceTypes","ListResources","ListTags"]',
    ARNFormat:
      "arn:aws:resource-explorer:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:resource-explorer:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstageditor.html",
  },
  {
    ServiceShortName: "tax",
    ServiceName: "AWS Tax Settings",
    Actions: '["GetExemptions","UpdateExemptions"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstaxsettings.html",
  },
  {
    ServiceShortName: "tiros",
    ServiceName: "AWS Tiros",
    Actions: '["CreateQuery","GetQueryAnswer","GetQueryExplanation"]',
    ARNFormat: "arn:aws:tiros::<namespace>:<relative-id>",
    ARNRegex: "^arn:aws:tiros::.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstiros.html",
  },
  {
    ServiceShortName: "transfer",
    ServiceName: "AWS Transfer Family",
    Actions:
      '["CreateAccess","CreateServer","CreateUser","CreateWorkflow","DeleteAccess","DeleteServer","DeleteSshPublicKey","DeleteUser","DeleteWorkflow","DescribeAccess","DescribeExecution","DescribeSecurityPolicy","DescribeServer","DescribeUser","DescribeWorkflow","ImportSshPublicKey","ListAccesses","ListExecutions","ListSecurityPolicies","ListServers","ListTagsForResource","ListUsers","ListWorkflows","SendWorkflowStepState","StartServer","StopServer","TagResource","TestIdentityProvider","UntagResource","UpdateAccess","UpdateServer","UpdateUser"]',
    ARNFormat:
      "arn:aws:transfer:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:transfer:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstransferfamily.html",
  },
  {
    ServiceShortName: "trustedadvisor",
    ServiceName: "AWS Trusted Advisor",
    Actions:
      '["DescribeAccount","DescribeAccountAccess","DescribeCheckItems","DescribeCheckRefreshStatuses","DescribeCheckSummaries","DescribeChecks","DescribeNotificationPreferences","DescribeOrganization","DescribeOrganizationAccounts","DescribeReports","DescribeRisk","DescribeRiskResources","DescribeRisks","DescribeServiceMetadata","DownloadRisk","ExcludeCheckItems","GenerateReport","IncludeCheckItems","ListAccountsForParent","ListOrganizationalUnitsForParent","ListRoots","RefreshCheck","SetAccountAccess","SetOrganizationAccess","UpdateNotificationPreferences","UpdateRiskStatus"]',
    ARNFormat:
      "arn:${Partition}:trustedadvisor:*:${Account}:checks/${Category}/${CheckId}",
    ARNRegex: "^arn:${Partition}:trustedadvisor:*",
    conditionKeys: "",
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awstrustedadvisor.html",
  },
  {
    ServiceShortName: "waf",
    ServiceName: "AWS WAF",
    Actions:
      '["CreateByteMatchSet","CreateGeoMatchSet","CreateIPSet","CreateRateBasedRule","CreateRegexMatchSet","CreateRegexPatternSet","CreateRule","CreateRuleGroup","CreateSizeConstraintSet","CreateSqlInjectionMatchSet","CreateWebACL","CreateWebACLMigrationStack","CreateXssMatchSet","DeleteByteMatchSet","DeleteGeoMatchSet","DeleteIPSet","DeleteLoggingConfiguration","DeletePermissionPolicy","DeleteRateBasedRule","DeleteRegexMatchSet","DeleteRegexPatternSet","DeleteRule","DeleteRuleGroup","DeleteSizeConstraintSet","DeleteSqlInjectionMatchSet","DeleteWebACL","DeleteXssMatchSet","GetByteMatchSet","GetChangeToken","GetChangeTokenStatus","GetGeoMatchSet","GetIPSet","GetLoggingConfiguration","GetPermissionPolicy","GetRateBasedRule","GetRateBasedRuleManagedKeys","GetRegexMatchSet","GetRegexPatternSet","GetRule","GetRuleGroup","GetSampledRequests","GetSizeConstraintSet","GetSqlInjectionMatchSet","GetWebACL","GetXssMatchSet","ListActivatedRulesInRuleGroup","ListByteMatchSets","ListGeoMatchSets","ListIPSets","ListLoggingConfigurations","ListRateBasedRules","ListRegexMatchSets","ListRegexPatternSets","ListRuleGroups","ListRules","ListSizeConstraintSets","ListSqlInjectionMatchSets","ListSubscribedRuleGroups","ListTagsForResource","ListWebACLs","ListXssMatchSets","PutLoggingConfiguration","PutPermissionPolicy","TagResource","UntagResource","UpdateByteMatchSet","UpdateGeoMatchSet","UpdateIPSet","UpdateRateBasedRule","UpdateRegexMatchSet","UpdateRegexPatternSet","UpdateRule","UpdateRuleGroup","UpdateSizeConstraintSet","UpdateSqlInjectionMatchSet","UpdateWebACL","UpdateXssMatchSet"]',
    ARNFormat: "arn:aws:waf::<account_ID>:<resource>/<resource_id>",
    ARNRegex: "^arn:aws:waf::[0-9]+:.+/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswaf.html",
  },
  {
    ServiceShortName: "waf-regional",
    ServiceName: "AWS WAF Regional",
    Actions:
      '["AssociateWebACL","CreateByteMatchSet","CreateGeoMatchSet","CreateIPSet","CreateRateBasedRule","CreateRegexMatchSet","CreateRegexPatternSet","CreateRule","CreateRuleGroup","CreateSizeConstraintSet","CreateSqlInjectionMatchSet","CreateWebACL","CreateWebACLMigrationStack","CreateXssMatchSet","DeleteByteMatchSet","DeleteGeoMatchSet","DeleteIPSet","DeleteLoggingConfiguration","DeletePermissionPolicy","DeleteRateBasedRule","DeleteRegexMatchSet","DeleteRegexPatternSet","DeleteRule","DeleteRuleGroup","DeleteSizeConstraintSet","DeleteSqlInjectionMatchSet","DeleteWebACL","DeleteXssMatchSet","DisassociateWebACL","GetByteMatchSet","GetChangeToken","GetChangeTokenStatus","GetGeoMatchSet","GetIPSet","GetLoggingConfiguration","GetPermissionPolicy","GetRateBasedRule","GetRateBasedRuleManagedKeys","GetRegexMatchSet","GetRegexPatternSet","GetRule","GetRuleGroup","GetSampledRequests","GetSizeConstraintSet","GetSqlInjectionMatchSet","GetWebACL","GetWebACLForResource","GetXssMatchSet","ListActivatedRulesInRuleGroup","ListByteMatchSets","ListGeoMatchSets","ListIPSets","ListLoggingConfigurations","ListRateBasedRules","ListRegexMatchSets","ListRegexPatternSets","ListResourcesForWebACL","ListRuleGroups","ListRules","ListSizeConstraintSets","ListSqlInjectionMatchSets","ListSubscribedRuleGroups","ListTagsForResource","ListWebACLs","ListXssMatchSets","PutLoggingConfiguration","PutPermissionPolicy","TagResource","UntagResource","UpdateByteMatchSet","UpdateGeoMatchSet","UpdateIPSet","UpdateRateBasedRule","UpdateRegexMatchSet","UpdateRegexPatternSet","UpdateRule","UpdateRuleGroup","UpdateSizeConstraintSet","UpdateSqlInjectionMatchSet","UpdateWebACL","UpdateXssMatchSet"]',
    ARNFormat:
      "arn:aws:waf-regional:<region>:<account_ID>:<resource>/<resource_id>",
    ARNRegex: "^arn:aws:waf-regional:.+:[0-9]+:.+/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswafregional.html",
  },
  {
    ServiceShortName: "wafv2",
    ServiceName: "AWS WAF V2",
    Actions:
      '["AssociateWebACL","CheckCapacity","CreateIPSet","CreateRegexPatternSet","CreateRuleGroup","CreateWebACL","DeleteFirewallManagerRuleGroups","DeleteIPSet","DeleteLoggingConfiguration","DeletePermissionPolicy","DeleteRegexPatternSet","DeleteRuleGroup","DeleteWebACL","DescribeManagedRuleGroup","DisassociateFirewallManager","DisassociateWebACL","GenerateMobileSdkReleaseUrl","GetIPSet","GetLoggingConfiguration","GetManagedRuleSet","GetMobileSdkRelease","GetPermissionPolicy","GetRateBasedStatementManagedKeys","GetRegexPatternSet","GetRuleGroup","GetSampledRequests","GetWebACL","GetWebACLForResource","ListAvailableManagedRuleGroupVersions","ListAvailableManagedRuleGroups","ListIPSets","ListLoggingConfigurations","ListManagedRuleSets","ListMobileSdkReleases","ListRegexPatternSets","ListResourcesForWebACL","ListRuleGroups","ListTagsForResource","ListWebACLs","PutFirewallManagerRuleGroups","PutLoggingConfiguration","PutManagedRuleSetVersions","PutPermissionPolicy","TagResource","UntagResource","UpdateIPSet","UpdateManagedRuleSetVersionExpiryDate","UpdateRegexPatternSet","UpdateRuleGroup","UpdateWebACL"]',
    ARNFormat:
      "arn:aws:wafv2:${Region}:${Account}:${Scope}/${ResourceType}/${ResourceName}/${ResourceId}",
    ARNRegex: "^arn:aws:wafv2:.+:.+:.+/.+/.+/.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswafv2.html",
  },
  {
    ServiceShortName: "wellarchitected",
    ServiceName: "AWS Well-Architected Tool",
    Actions:
      '["AssociateLenses","CreateLensShare","CreateLensVersion","CreateMilestone","CreateWorkload","CreateWorkloadShare","DeleteLens","DeleteLensShare","DeleteWorkload","DeleteWorkloadShare","DisassociateLenses","ExportLens","GetAnswer","GetLens","GetLensReview","GetLensReviewReport","GetLensVersionDifference","GetMilestone","GetWorkload","ImportLens","ListAnswers","ListLensReviewImprovements","ListLensReviews","ListLensShares","ListLenses","ListMilestones","ListNotifications","ListShareInvitations","ListTagsForResource","ListWorkloadShares","ListWorkloads","TagResource","UntagResource","UpdateAnswer","UpdateLensReview","UpdateShareInvitation","UpdateWorkload","UpdateWorkloadShare","UpgradeLensReview"]',
    ARNFormat:
      "arn:aws:wellarchitected:${Region}:${Account}:${ResourceName}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:wellarchitected:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswell-architectedtool.html",
  },
  {
    ServiceShortName: "xray",
    ServiceName: "AWS X-Ray",
    Actions:
      '["BatchGetTraces","CreateGroup","CreateSamplingRule","DeleteGroup","DeleteSamplingRule","GetEncryptionConfig","GetGroup","GetGroups","GetInsight","GetInsightEvents","GetInsightImpactGraph","GetInsightSummaries","GetSamplingRules","GetSamplingStatisticSummaries","GetSamplingTargets","GetServiceGraph","GetTimeSeriesServiceStatistics","GetTraceGraph","GetTraceSummaries","ListTagsForResource","PutEncryptionConfig","PutTelemetryRecords","PutTraceSegments","TagResource","UntagResource","UpdateGroup","UpdateSamplingRule"]',
    ARNFormat:
      "arn:${Partition}:xray:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:${Partition}:xray:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsx-ray.html",
  },
  {
    ServiceShortName: "applicationinsights",
    ServiceName: "CloudWatch Application Insights",
    Actions:
      '["CreateApplication","CreateComponent","CreateLogPattern","DeleteApplication","DeleteComponent","DeleteLogPattern","DescribeApplication","DescribeComponent","DescribeComponentConfiguration","DescribeComponentConfigurationRecommendation","DescribeLogPattern","DescribeObservation","DescribeProblem","DescribeProblemObservations","ListApplications","ListComponents","ListConfigurationHistory","ListLogPatternSets","ListLogPatterns","ListProblems","ListTagsForResource","TagResource","UntagResource","UpdateApplication","UpdateComponent","UpdateComponentConfiguration","UpdateLogPattern"]',
    ARNFormat: "",
    ARNRegex: "",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_cloudwatchapplicationinsights.html",
  },
  {
    ServiceShortName: "dbqms",
    ServiceName: "Database Query Metadata Service",
    Actions:
      '["CreateFavoriteQuery","CreateQueryHistory","CreateTab","DeleteFavoriteQueries","DeleteQueryHistory","DeleteTab","DescribeFavoriteQueries","DescribeQueryHistory","DescribeTabs","GetQueryString","UpdateFavoriteQuery","UpdateQueryHistory","UpdateTab"]',
    ARNFormat: "arn:${Partition}:dbqms::",
    ARNRegex: "^arn:${Partition}:dbqms::.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_databasequerymetadataservice.html",
  },
  {
    ServiceShortName: "elasticloadbalancing",
    ServiceName: "Elastic Load Balancing",
    Actions:
      '["AddTags","ApplySecurityGroupsToLoadBalancer","AttachLoadBalancerToSubnets","ConfigureHealthCheck","CreateAppCookieStickinessPolicy","CreateLBCookieStickinessPolicy","CreateLoadBalancer","CreateLoadBalancerListeners","CreateLoadBalancerPolicy","DeleteLoadBalancer","DeleteLoadBalancerListeners","DeleteLoadBalancerPolicy","DeregisterInstancesFromLoadBalancer","DescribeInstanceHealth","DescribeLoadBalancerAttributes","DescribeLoadBalancerPolicies","DescribeLoadBalancerPolicyTypes","DescribeLoadBalancers","DescribeTags","DetachLoadBalancerFromSubnets","DisableAvailabilityZonesForLoadBalancer","EnableAvailabilityZonesForLoadBalancer","ModifyLoadBalancerAttributes","RegisterInstancesWithLoadBalancer","RemoveTags","SetLoadBalancerListenerSSLCertificate","SetLoadBalancerPoliciesForBackendServer","SetLoadBalancerPoliciesOfListener"]',
    ARNFormat:
      "arn:aws:elasticloadbalancing:<region>:<account>:<resourceType>/<resourceid>",
    ARNRegex: "^arn:aws:elasticloadbalancing:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","elasticloadbalancing:ResourceTag/","elasticloadbalancing:ResourceTag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancing.html",
  },
  {
    ServiceShortName: "elasticloadbalancing",
    ServiceName: "Elastic Load Balancing V2",
    Actions:
      '["AddListenerCertificates","AddTags","CreateListener","CreateLoadBalancer","CreateRule","CreateTargetGroup","DeleteListener","DeleteLoadBalancer","DeleteRule","DeleteTargetGroup","DeregisterTargets","DescribeAccountLimits","DescribeListenerCertificates","DescribeListeners","DescribeLoadBalancerAttributes","DescribeLoadBalancers","DescribeRules","DescribeSSLPolicies","DescribeTags","DescribeTargetGroupAttributes","DescribeTargetGroups","DescribeTargetHealth","ModifyListener","ModifyLoadBalancerAttributes","ModifyRule","ModifyTargetGroup","ModifyTargetGroupAttributes","RegisterTargets","RemoveListenerCertificates","RemoveTags","SetIpAddressType","SetRulePriorities","SetSecurityGroups","SetSubnets","SetWebAcl"]',
    ARNFormat:
      "arn:aws:elasticloadbalancing:${Region}:${Account}:${ResourceType}/${ResourceId}",
    ARNRegex: "^arn:aws:elasticloadbalancing:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","elasticloadbalancing:ResourceTag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elasticloadbalancingv2.html",
    ConsoleLink:
      "https://console.aws.amazon.com/ec2/v2/home?region=${Region}#LoadBalancers:sort=loadBalancerName",
  },
  {
    ServiceShortName: "elemental-support-cases",
    ServiceName: "Elemental Support Cases",
    Actions:
      '["CheckCasePermission","CreateCase","GetCase","GetCases","UpdateCase"]',
    ARNFormat:
      "arn:aws:elemental-support-cases:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:elemental-support-cases:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elementalsupportcases.html",
  },
  {
    ServiceShortName: "elemental-support-content",
    ServiceName: "Elemental Support Content",
    Actions: '"Query"',
    ARNFormat:
      "arn:aws:elemental-support-content:<region>:<account-id>:<resource-type>/<resource_name>",
    ARNRegex: "^arn:aws:elemental-support-content:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_elementalsupportcontent.html",
  },
  {
    ServiceShortName: "connect-campaigns",
    ServiceName: "High-volume outbound communications",
    Actions:
      '["CreateCampaign","DeleteCampaign","DescribeCampaign","GetCampaignState","GetCampaignStateBatch","ListCampaigns","ListTagsForResource","PauseCampaign","PutConnectInstanceConfig","PutDialRequestBatch","ResumeCampaign","StartCampaign","StopCampaign","TagResource","UntagResource","UpdateCampaignDialerConfig","UpdateCampaignName","UpdateCampaignOutboundCallConfig"]',
    ARNFormat:
      "arn:${Partition}:connect-campaigns:${Region}:${Account}:campaign/${CampaignId}",
    ARNRegex: "^arn:${Partition}:connect-campaigns:.+:.*:campaign/.*",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_high-volumeoutboundcommunications.html",
  },
  {
    ServiceShortName: "iam",
    ServiceName: "Identity And Access Management",
    Actions:
      '["AddClientIDToOpenIDConnectProvider","AddRoleToInstanceProfile","AddUserToGroup","AttachGroupPolicy","AttachRolePolicy","AttachUserPolicy","ChangePassword","CreateAccessKey","CreateAccountAlias","CreateGroup","CreateInstanceProfile","CreateLoginProfile","CreateOpenIDConnectProvider","CreatePolicy","CreatePolicyVersion","CreateRole","CreateSAMLProvider","CreateServiceLinkedRole","CreateServiceSpecificCredential","CreateUser","CreateVirtualMFADevice","DeactivateMFADevice","DeleteAccessKey","DeleteAccountAlias","DeleteAccountPasswordPolicy","DeleteGroup","DeleteGroupPolicy","DeleteInstanceProfile","DeleteLoginProfile","DeleteOpenIDConnectProvider","DeletePolicy","DeletePolicyVersion","DeleteRole","DeleteRolePermissionsBoundary","DeleteRolePolicy","DeleteSAMLProvider","DeleteSSHPublicKey","DeleteServerCertificate","DeleteServiceLinkedRole","DeleteServiceSpecificCredential","DeleteSigningCertificate","DeleteUser","DeleteUserPermissionsBoundary","DeleteUserPolicy","DeleteVirtualMFADevice","DetachGroupPolicy","DetachRolePolicy","DetachUserPolicy","EnableMFADevice","GenerateCredentialReport","GenerateOrganizationsAccessReport","GenerateServiceLastAccessedDetails","GetAccessKeyLastUsed","GetAccountAuthorizationDetails","GetAccountPasswordPolicy","GetAccountSummary","GetContextKeysForCustomPolicy","GetContextKeysForPrincipalPolicy","GetCredentialReport","GetGroup","GetGroupPolicy","GetInstanceProfile","GetLoginProfile","GetOpenIDConnectProvider","GetOrganizationsAccessReport","GetPolicy","GetPolicyVersion","GetRole","GetRolePolicy","GetSAMLProvider","GetSSHPublicKey","GetServerCertificate","GetServiceLastAccessedDetails","GetServiceLastAccessedDetailsWithEntities","GetServiceLinkedRoleDeletionStatus","GetUser","GetUserPolicy","ListAccessKeys","ListAccountAliases","ListAttachedGroupPolicies","ListAttachedRolePolicies","ListAttachedUserPolicies","ListEntitiesForPolicy","ListGroupPolicies","ListGroups","ListGroupsForUser","ListInstanceProfileTags","ListInstanceProfiles","ListInstanceProfilesForRole","ListMFADeviceTags","ListMFADevices","ListOpenIDConnectProviderTags","ListOpenIDConnectProviders","ListPolicies","ListPoliciesGrantingServiceAccess","ListPolicyTags","ListPolicyVersions","ListRolePolicies","ListRoleTags","ListRoles","ListSAMLProviderTags","ListSAMLProviders","ListSSHPublicKeys","ListServerCertificateTags","ListServerCertificates","ListServiceSpecificCredentials","ListSigningCertificates","ListUserPolicies","ListUserTags","ListUsers","ListVirtualMFADevices","PassRole","PutGroupPolicy","PutRolePermissionsBoundary","PutRolePolicy","PutUserPermissionsBoundary","PutUserPolicy","RemoveClientIDFromOpenIDConnectProvider","RemoveRoleFromInstanceProfile","RemoveUserFromGroup","ResetServiceSpecificCredential","ResyncMFADevice","SetDefaultPolicyVersion","SetSecurityTokenServicePreferences","SimulateCustomPolicy","SimulatePrincipalPolicy","TagInstanceProfile","TagMFADevice","TagOpenIDConnectProvider","TagPolicy","TagRole","TagSAMLProvider","TagServerCertificate","TagUser","UntagInstanceProfile","UntagMFADevice","UntagOpenIDConnectProvider","UntagPolicy","UntagRole","UntagSAMLProvider","UntagServerCertificate","UntagUser","UpdateAccessKey","UpdateAccountPasswordPolicy","UpdateAssumeRolePolicy","UpdateGroup","UpdateLoginProfile","UpdateOpenIDConnectProviderThumbprint","UpdateRole","UpdateRoleDescription","UpdateSAMLProvider","UpdateSSHPublicKey","UpdateServerCertificate","UpdateServiceSpecificCredential","UpdateSigningCertificate","UpdateUser","UploadSSHPublicKey","UploadServerCertificate","UploadSigningCertificate"]',
    ARNFormat: "arn:aws:iam::${Namespace}:${RelativeId}",
    ARNRegex: "^arn:aws:iam::.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","iam:AWSServiceName","iam:AssociatedResourceArn","iam:OrganizationsPolicyId","iam:PassedToService","iam:PermissionsBoundary","iam:PolicyARN","iam:ResourceTag/${TagKey}"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_identityandaccessmanagement.html",
  },
  {
    ServiceShortName: "launchwizard",
    ServiceName: "Launch Wizard",
    Actions:
      '["DeleteApp","DescribeProvisionedApp","DescribeProvisioningEvents","GetInfrastructureSuggestion","GetIpAddress","GetResourceCostEstimate","ListProvisionedApps","StartProvisioning"]',
    ARNFormat: "",
    ARNRegex: "^arn:aws:launchwizard:.+:.+:.+",
    conditionKeys: "",
    HasResource: false,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_launchwizard.html",
  },
  {
    ServiceShortName: "networkmanager",
    ServiceName: "Network Manager",
    Actions:
      '["AcceptAttachment","AssociateConnectPeer","AssociateCustomerGateway","AssociateLink","AssociateTransitGatewayConnectPeer","CreateConnectAttachment","CreateConnectPeer","CreateConnection","CreateCoreNetwork","CreateDevice","CreateGlobalNetwork","CreateLink","CreateSite","CreateSiteToSiteVpnAttachment","CreateVpcAttachment","DeleteAttachment","DeleteConnectPeer","DeleteConnection","DeleteCoreNetwork","DeleteCoreNetworkPolicyVersion","DeleteDevice","DeleteGlobalNetwork","DeleteLink","DeleteResourcePolicy","DeleteSite","DeregisterTransitGateway","DescribeGlobalNetworks","DisassociateConnectPeer","DisassociateCustomerGateway","DisassociateLink","DisassociateTransitGatewayConnectPeer","ExecuteCoreNetworkChangeSet","GetConnectAttachment","GetConnectPeer","GetConnectPeerAssociations","GetConnections","GetCoreNetwork","GetCoreNetworkChangeSet","GetCoreNetworkPolicy","GetCustomerGatewayAssociations","GetDevices","GetLinkAssociations","GetLinks","GetNetworkResourceCounts","GetNetworkResourceRelationships","GetNetworkResources","GetNetworkRoutes","GetNetworkTelemetry","GetResourcePolicy","GetRouteAnalysis","GetSiteToSiteVpnAttachment","GetSites","GetTransitGatewayConnectPeerAssociations","GetTransitGatewayRegistrations","GetVpcAttachment","ListAttachments","ListConnectPeers","ListCoreNetworkPolicyVersions","ListCoreNetworks","ListTagsForResource","PutCoreNetworkPolicy","PutResourcePolicy","RegisterTransitGateway","RejectAttachment","RestoreCoreNetworkPolicyVersion","StartRouteAnalysis","TagResource","UntagResource","UpdateConnection","UpdateCoreNetwork","UpdateDevice","UpdateGlobalNetwork","UpdateLink","UpdateNetworkResourceMetadata","UpdateSite","UpdateVpcAttachment"]',
    ARNFormat:
      "arn:${Partition}:networkmanager::${AccountId}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:${Partition}:networkmanager::.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","networkmanager:cgwArn","networkmanager:subnetArns","networkmanager:tgwArn","networkmanager:tgwConnectPeerArn","networkmanager:vpcArn","networkmanager:vpnConnectionArn"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_networkmanager.html",
  },
  {
    ServiceShortName: "rbin",
    ServiceName: "Recycle Bin",
    Actions:
      '["CreateRule","DeleteRule","GetRule","ListRules","ListTagsForResource","TagResource","UntagResource","UpdateRule"]',
    ARNFormat:
      "arn:${Partition}:rbin:${Region}:${Account}:rule/${ResourceName}",
    ARNRegex: "^arn:.+:rbin:.+:.+:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_recyclebin.html",
  },
  {
    ServiceShortName: "servicequotas",
    ServiceName: "Service Quotas",
    Actions:
      '["AssociateServiceQuotaTemplate","DeleteServiceQuotaIncreaseRequestFromTemplate","DisassociateServiceQuotaTemplate","GetAWSDefaultServiceQuota","GetAssociationForServiceQuotaTemplate","GetRequestedServiceQuotaChange","GetServiceQuota","GetServiceQuotaIncreaseRequestFromTemplate","ListAWSDefaultServiceQuotas","ListRequestedServiceQuotaChangeHistory","ListRequestedServiceQuotaChangeHistoryByQuota","ListServiceQuotaIncreaseRequestsInTemplate","ListServiceQuotas","ListServices","ListTagsForResource","PutServiceQuotaIncreaseRequestIntoTemplate","RequestServiceQuotaIncrease","TagResource","UntagResource"]',
    ARNFormat:
      "arn:aws:servicequotas:${Region}:${Account}:${ResourceType}/${ResourceName}",
    ARNRegex: "^arn:aws:servicequotas:.+",
    conditionKeys:
      '["aws:RequestTag/${TagKey}","aws:ResourceTag/${TagKey}","aws:TagKeys","servicequotas:service"]',
    HasResource: true,
    DocLink:
      "https://docs.aws.amazon.com/IAM/latest/UserGuide/list_servicequotas.html",
  },
];
