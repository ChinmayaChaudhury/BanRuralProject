sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "Maintenance_Request_APPROVER_SIX.Maintenance_Request_APPROVER_SIX.view.",
		autoWait: true
	});
});