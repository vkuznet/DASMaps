{"keys": ["block"], "urn": "blockReplicas", "system": "phedex", "members": ["block.nfiles", "block.replica.subscribed", "block.size", "block.replica.node_id", "block.block_id", "block.modification_time", "block.replica.group", "block.replica.nfiles", "block.modified_by", "block.open_for_writing", "block.replica.complete", "block.replica.creation_time", "block.replica.site", "block.is_open", "block.name", "block.creation_time", "block.dataset_id", "block.id", "block.origin_site_name", "block.replica.size", "block.replica.se", "block.dataset", "block.created_by", "block.replica.modification_time", "block.replica.custodial"]}
{"keys": ["dataset", "file", "lumi"], "urn": "file_lumi4dataset", "system": "dbs3", "members": ["file.name", "lumi.number"]}
{"keys": ["dataset", "run", "block", "lumi"], "urn": "block_run_lumi4dataset", "system": "dbs3", "members": ["run.run_number", "block.name", "lumi.number"]}
{"keys": ["dataset", "run", "file", "lumi"], "urn": "file_run_lumi4dataset", "system": "dbs3", "members": ["run.run_number", "file.name", "lumi.number"]}
{"keys": ["dataset", "run", "lumi"], "urn": "run_lumi4dataset", "system": "dbs3", "members": ["run.run_number", "lumi.number"]}
{"keys": ["dataset", "run", "summary"], "urn": "summary4dataset_run", "system": "dbs3", "members": ["summary.nevents", "summary.nblocks", "summary.file_size", "summary.nlumis", "summary.nfiles"]}
{"keys": ["dataset"], "urn": "dataset_info", "system": "dbs3", "members": ["dataset.nblocks", "dataset.creation_time", "dataset.name", "dataset.prep_id", "dataset.status", "dataset.data_tier_name", "dataset.dataset_id", "dataset.modified_by", "dataset.created_by", "dataset.nevents", "dataset.modification_time", "dataset.datatype", "dataset.nfiles", "dataset.processing_version", "dataset.physics_group_name", "dataset.processed_ds_name", "dataset.nlumis", "dataset.primary_dataset.name", "dataset.xtcrosssection", "dataset.acquisition_era_name", "dataset.size"]}
{"keys": ["date", "jobsummary"], "urn": "jobsummary-plot-or-table", "system": "dashboard", "members": ["jobsummary.activity", "jobsummary.submissiontool", "jobsummary.rb", "jobsummary.application", "jobsummary.terminated", "jobsummary.date1", "jobsummary.date2", "jobsummary.grid", "jobsummary.user", "jobsummary.site-calc-failed", "jobsummary.ce", "jobsummary.app-unknown", "jobsummary.user-failed", "jobsummary.check", "jobsummary.cpu", "jobsummary.wc", "jobsummary.events", "jobsummary.cancelled", "jobsummary.jobtype", "jobsummary.app-succeeded", "jobsummary.application-failed", "jobsummary.unk-failed", "jobsummary.tier", "jobsummary.running", "jobsummary.site", "jobsummary.app-failed", "jobsummary.grid-unknown", "jobsummary.dataset", "jobsummary.allunk", "jobsummary.unsuccess", "jobsummary.pending", "jobsummary.submitted", "jobsummary.site-failed", "jobsummary.unknown", "jobsummary.aborted", "jobsummary.name", "jobsummary.done", "jobsummary.applic-failed"]}
{"keys": ["file"], "urn": "fileReplicas4file", "system": "phedex", "members": ["file.id", "file.replica.node_id", "file.auto_cross_section", "file.dataset_id", "file.size", "file.replica.creation_time", "file.block.name", "file.name", "file.nevents", "file.modification_time", "file.block_id", "file.creation_time", "file.md5", "file.branch_hash_id", "file.replica.site", "file.checksum", "file.type", "file.modified_by", "file.replica.subscribed", "file.replica.custodial", "file.created_by", "file.check_sum", "file.file_id", "file.adler32", "file.is_file_valid", "file.replica.group", "file.file_type_id", "file.dataset", "file.replica.se", "file.original_node"]}
{"keys": ["group"], "urn": "groups", "system": "sitedb2", "members": ["group.username", "group.physics_group_name", "group.role", "group.name"]}
{"keys": ["primary_dataset"], "urn": "primarydatasets", "system": "dbs3", "members": ["primary_dataset.created_by", "primary_dataset.id", "primary_dataset.creation_time", "primary_dataset.name", "primary_dataset.datatype"]}
{"keys": ["release"], "urn": "releaseversions", "system": "dbs3", "members": ["release.name"]}
{"keys": ["run", "dataset"], "urn": "runs_via_dataset", "system": "dbs3", "members": ["run.run_number"]}
{"keys": ["run", "lumi"], "urn": "runsummaries", "system": "dbs3", "members": ["lumi.max_lumi"]}
{"keys": ["run"], "urn": "get_run_info", "system": "conddb", "members": ["run.end_time", "run.modification_time", "run.lumi_section_ranges", "run.stop_reason", "run.triggers", "run.start_time", "run.group_name", "run.nlumis", "run.hltkey", "run.creation_time", "run.delivered_lumi", "run.beam_e", "run.lhcFill", "run.duration", "run.run_number", "run.l1key", "run.bfield", "run.gtkey"]}
{"keys": ["site", "dataset"], "urn": "site4dataset", "system": "combined", "members": ["site.block_completion", "site.dataset_fraction", "site.se", "site.replica_fraction", "site.block_fraction", "site.name"]}
{"keys": ["site"], "urn": "site_names", "system": "sitedb2", "members": ["site.resources.is_primary", "site.info.tier", "site.resources.type", "site.info.manual_install", "site.site_name", "site.resources.site_name", "site.resources.fqdn", "site.info.usage", "site.admin.email", "site.type", "site.name", "site.info.logo_url", "site.admin.surname", "site.info.country", "site.info.url", "site.info.tier_level", "site.info.id", "site.admin.phone1", "site.info.site_name", "site.admin.phone2", "site.info.devel_release", "site.admin.username", "site.admin.im_handle", "site.admin.forename", "site.admin.dn"]}
{"keys": ["user"], "urn": "people_via_name", "system": "sitedb2", "members": ["user.im_handle", "user.role", "user.phone2", "user.email", "user.forename", "user.dn", "user.username", "user.name", "user.user_group", "user.surname", "user.phone1"]}
{"member": "block.block_id", "stems": ["block", "block_id"]}
{"member": "block.created_by", "stems": ["block", "created_by"]}
{"member": "block.creation_time", "stems": ["block", "creation_time"]}
{"member": "block.dataset", "stems": ["block", "dataset"]}
{"member": "block.dataset_id", "stems": ["block", "dataset_id"]}
{"member": "block.id", "stems": ["block", "id"]}
{"member": "block.is_open", "stems": ["block", "is_open"]}
{"member": "block.modification_time", "stems": ["block", "modification_time"]}
{"member": "block.modified_by", "stems": ["block", "modified_by"]}
{"member": "block.name", "stems": ["block", "name"]}
{"member": "block.nfiles", "stems": ["block", "nfiles"]}
{"member": "block.open_for_writing", "stems": ["block", "open_for_writing"]}
{"member": "block.origin_site_name", "stems": ["block", "origin_site_name"]}
{"member": "block.replica.complete", "stems": ["block", "replica", "complete"]}
{"member": "block.replica.creation_time", "stems": ["block", "replica", "creation_time"]}
{"member": "block.replica.custodial", "stems": ["block", "replica", "custodial"]}
{"member": "block.replica.group", "stems": ["block", "replica", "group"]}
{"member": "block.replica.modification_time", "stems": ["block", "replica", "modification_time"]}
{"member": "block.replica.nfiles", "stems": ["block", "replica", "nfiles"]}
{"member": "block.replica.node_id", "stems": ["block", "replica", "node_id"]}
{"member": "block.replica.se", "stems": ["block", "replica", "se"]}
{"member": "block.replica.site", "stems": ["block", "replica", "site"]}
{"member": "block.replica.size", "stems": ["block", "replica", "size"]}
{"member": "block.replica.subscribed", "stems": ["block", "replica", "subscribed"]}
{"member": "block.size", "stems": ["block", "size"]}
{"member": "dataset.acquisition_era_name", "stems": ["dataset", "acquisition_era_name"]}
{"member": "dataset.created_by", "stems": ["dataset", "created_by"]}
{"member": "dataset.creation_time", "stems": ["dataset", "creation_time"]}
{"member": "dataset.data_tier_name", "stems": ["dataset", "data_tier_name"]}
{"member": "dataset.dataset_id", "stems": ["dataset", "dataset_id"]}
{"member": "dataset.datatype", "stems": ["dataset", "datatype"]}
{"member": "dataset.modification_time", "stems": ["dataset", "modification_time"]}
{"member": "dataset.modified_by", "stems": ["dataset", "modified_by"]}
{"member": "dataset.name", "stems": ["dataset", "name"]}
{"member": "dataset.nblocks", "stems": ["dataset", "nblocks"]}
{"member": "dataset.nevents", "stems": ["dataset", "nevents"]}
{"member": "dataset.nfiles", "stems": ["dataset", "nfiles"]}
{"member": "dataset.nlumis", "stems": ["dataset", "nlumis"]}
{"member": "dataset.physics_group_name", "stems": ["dataset", "physics_group_name"]}
{"member": "dataset.prep_id", "stems": ["dataset", "prep_id"]}
{"member": "dataset.primary_dataset.name", "stems": ["dataset", "primary_dataset", "name"]}
{"member": "dataset.processed_ds_name", "stems": ["dataset", "processed_ds_name"]}
{"member": "dataset.processing_version", "stems": ["dataset", "processing_version"]}
{"member": "dataset.size", "stems": ["dataset", "size"]}
{"member": "dataset.status", "stems": ["dataset", "status"]}
{"member": "dataset.xtcrosssection", "stems": ["dataset", "xtcrosssection"]}
{"member": "file.adler32", "stems": ["file", "adler32"]}
{"member": "file.auto_cross_section", "stems": ["file", "auto_cross_section"]}
{"member": "file.block.name", "stems": ["file", "block", "name"]}
{"member": "file.block_id", "stems": ["file", "block_id"]}
{"member": "file.branch_hash_id", "stems": ["file", "branch_hash_id"]}
{"member": "file.check_sum", "stems": ["file", "check_sum"]}
{"member": "file.checksum", "stems": ["file", "checksum"]}
{"member": "file.created_by", "stems": ["file", "created_by"]}
{"member": "file.creation_time", "stems": ["file", "creation_time"]}
{"member": "file.dataset", "stems": ["file", "dataset"]}
{"member": "file.dataset_id", "stems": ["file", "dataset_id"]}
{"member": "file.file_id", "stems": ["file", "file_id"]}
{"member": "file.file_type_id", "stems": ["file", "file_type_id"]}
{"member": "file.id", "stems": ["file", "id"]}
{"member": "file.is_file_valid", "stems": ["file", "is_file_valid"]}
{"member": "file.md5", "stems": ["file", "md5"]}
{"member": "file.modification_time", "stems": ["file", "modification_time"]}
{"member": "file.modified_by", "stems": ["file", "modified_by"]}
{"member": "file.name", "stems": ["file", "name"]}
{"member": "file.nevents", "stems": ["file", "nevents"]}
{"member": "file.original_node", "stems": ["file", "original_node"]}
{"member": "file.replica.creation_time", "stems": ["file", "replica", "creation_time"]}
{"member": "file.replica.custodial", "stems": ["file", "replica", "custodial"]}
{"member": "file.replica.group", "stems": ["file", "replica", "group"]}
{"member": "file.replica.node_id", "stems": ["file", "replica", "node_id"]}
{"member": "file.replica.se", "stems": ["file", "replica", "se"]}
{"member": "file.replica.site", "stems": ["file", "replica", "site"]}
{"member": "file.replica.subscribed", "stems": ["file", "replica", "subscribed"]}
{"member": "file.size", "stems": ["file", "size"]}
{"member": "file.type", "stems": ["file", "type"]}
{"member": "group.name", "stems": ["group", "name"]}
{"member": "group.physics_group_name", "stems": ["group", "physics_group_name"]}
{"member": "group.role", "stems": ["group", "role"]}
{"member": "group.username", "stems": ["group", "username"]}
{"member": "jobsummary.aborted", "stems": ["jobsummary", "aborted"]}
{"member": "jobsummary.activity", "stems": ["jobsummary", "activity"]}
{"member": "jobsummary.allunk", "stems": ["jobsummary", "allunk"]}
{"member": "jobsummary.app-failed", "stems": ["jobsummary", "app-failed"]}
{"member": "jobsummary.app-succeeded", "stems": ["jobsummary", "app-succeeded"]}
{"member": "jobsummary.app-unknown", "stems": ["jobsummary", "app-unknown"]}
{"member": "jobsummary.applic-failed", "stems": ["jobsummary", "applic-failed"]}
{"member": "jobsummary.application", "stems": ["jobsummary", "application"]}
{"member": "jobsummary.application-failed", "stems": ["jobsummary", "application-failed"]}
{"member": "jobsummary.cancelled", "stems": ["jobsummary", "cancelled"]}
{"member": "jobsummary.ce", "stems": ["jobsummary", "ce"]}
{"member": "jobsummary.check", "stems": ["jobsummary", "check"]}
{"member": "jobsummary.cpu", "stems": ["jobsummary", "cpu"]}
{"member": "jobsummary.dataset", "stems": ["jobsummary", "dataset"]}
{"member": "jobsummary.date1", "stems": ["jobsummary", "date1"]}
{"member": "jobsummary.date2", "stems": ["jobsummary", "date2"]}
{"member": "jobsummary.done", "stems": ["jobsummary", "done"]}
{"member": "jobsummary.events", "stems": ["jobsummary", "events"]}
{"member": "jobsummary.grid", "stems": ["jobsummary", "grid"]}
{"member": "jobsummary.grid-unknown", "stems": ["jobsummary", "grid-unknown"]}
{"member": "jobsummary.jobtype", "stems": ["jobsummary", "jobtype"]}
{"member": "jobsummary.name", "stems": ["jobsummary", "name"]}
{"member": "jobsummary.pending", "stems": ["jobsummary", "pending"]}
{"member": "jobsummary.rb", "stems": ["jobsummary", "rb"]}
{"member": "jobsummary.running", "stems": ["jobsummary", "running"]}
{"member": "jobsummary.site", "stems": ["jobsummary", "site"]}
{"member": "jobsummary.site-calc-failed", "stems": ["jobsummary", "site-calc-failed"]}
{"member": "jobsummary.site-failed", "stems": ["jobsummary", "site-failed"]}
{"member": "jobsummary.submissiontool", "stems": ["jobsummary", "submissiontool"]}
{"member": "jobsummary.submitted", "stems": ["jobsummary", "submitted"]}
{"member": "jobsummary.terminated", "stems": ["jobsummary", "terminated"]}
{"member": "jobsummary.tier", "stems": ["jobsummary", "tier"]}
{"member": "jobsummary.unk-failed", "stems": ["jobsummary", "unk-failed"]}
{"member": "jobsummary.unknown", "stems": ["jobsummary", "unknown"]}
{"member": "jobsummary.unsuccess", "stems": ["jobsummary", "unsuccess"]}
{"member": "jobsummary.user", "stems": ["jobsummary", "user"]}
{"member": "jobsummary.user-failed", "stems": ["jobsummary", "user-failed"]}
{"member": "jobsummary.wc", "stems": ["jobsummary", "wc"]}
{"member": "lumi.max_lumi", "stems": ["lumi", "max_lumi"]}
{"member": "lumi.number", "stems": ["lumi", "number"]}
{"member": "primary_dataset.created_by", "stems": ["primary_dataset", "created_by"]}
{"member": "primary_dataset.creation_time", "stems": ["primary_dataset", "creation_time"]}
{"member": "primary_dataset.datatype", "stems": ["primary_dataset", "datatype"]}
{"member": "primary_dataset.id", "stems": ["primary_dataset", "id"]}
{"member": "primary_dataset.name", "stems": ["primary_dataset", "name"]}
{"member": "release.name", "stems": ["release", "name"]}
{"member": "run.beam_e", "stems": ["run", "beam_e"]}
{"member": "run.bfield", "stems": ["run", "bfield"]}
{"member": "run.creation_time", "stems": ["run", "creation_time"]}
{"member": "run.delivered_lumi", "stems": ["run", "delivered_lumi"]}
{"member": "run.duration", "stems": ["run", "duration"]}
{"member": "run.end_time", "stems": ["run", "end_time"]}
{"member": "run.group_name", "stems": ["run", "group_name"]}
{"member": "run.gtkey", "stems": ["run", "gtkey"]}
{"member": "run.hltkey", "stems": ["run", "hltkey"]}
{"member": "run.l1key", "stems": ["run", "l1key"]}
{"member": "run.lhcFill", "stems": ["run", "lhcFill"]}
{"member": "run.lumi_section_ranges", "stems": ["run", "lumi_section_ranges"]}
{"member": "run.modification_time", "stems": ["run", "modification_time"]}
{"member": "run.nlumis", "stems": ["run", "nlumis"]}
{"member": "run.run_number", "stems": ["run", "run_number"]}
{"member": "run.start_time", "stems": ["run", "start_time"]}
{"member": "run.stop_reason", "stems": ["run", "stop_reason"]}
{"member": "run.triggers", "stems": ["run", "triggers"]}
{"member": "site.admin.dn", "stems": ["site", "admin", "dn"]}
{"member": "site.admin.email", "stems": ["site", "admin", "email"]}
{"member": "site.admin.forename", "stems": ["site", "admin", "forename"]}
{"member": "site.admin.im_handle", "stems": ["site", "admin", "im_handle"]}
{"member": "site.admin.phone1", "stems": ["site", "admin", "phone1"]}
{"member": "site.admin.phone2", "stems": ["site", "admin", "phone2"]}
{"member": "site.admin.surname", "stems": ["site", "admin", "surname"]}
{"member": "site.admin.username", "stems": ["site", "admin", "username"]}
{"member": "site.block_completion", "stems": ["site", "block_completion"]}
{"member": "site.block_fraction", "stems": ["site", "block_fraction"]}
{"member": "site.dataset_fraction", "stems": ["site", "dataset_fraction"]}
{"member": "site.info.country", "stems": ["site", "info", "country"]}
{"member": "site.info.devel_release", "stems": ["site", "info", "devel_release"]}
{"member": "site.info.id", "stems": ["site", "info", "id"]}
{"member": "site.info.logo_url", "stems": ["site", "info", "logo_url"]}
{"member": "site.info.manual_install", "stems": ["site", "info", "manual_install"]}
{"member": "site.info.site_name", "stems": ["site", "info", "site_name"]}
{"member": "site.info.tier", "stems": ["site", "info", "tier"]}
{"member": "site.info.tier_level", "stems": ["site", "info", "tier_level"]}
{"member": "site.info.url", "stems": ["site", "info", "url"]}
{"member": "site.info.usage", "stems": ["site", "info", "usage"]}
{"member": "site.name", "stems": ["site", "name"]}
{"member": "site.replica_fraction", "stems": ["site", "replica_fraction"]}
{"member": "site.resources.fqdn", "stems": ["site", "resources", "fqdn"]}
{"member": "site.resources.is_primary", "stems": ["site", "resources", "is_primary"]}
{"member": "site.resources.site_name", "stems": ["site", "resources", "site_name"]}
{"member": "site.resources.type", "stems": ["site", "resources", "type"]}
{"member": "site.se", "stems": ["site", "se"]}
{"member": "site.site_name", "stems": ["site", "site_name"]}
{"member": "site.type", "stems": ["site", "type"]}
{"member": "summary.file_size", "stems": ["summary", "file_size"]}
{"member": "summary.nblocks", "stems": ["summary", "nblocks"]}
{"member": "summary.nevents", "stems": ["summary", "nevents"]}
{"member": "summary.nfiles", "stems": ["summary", "nfiles"]}
{"member": "summary.nlumis", "stems": ["summary", "nlumis"]}
{"member": "user.dn", "stems": ["user", "dn"]}
{"member": "user.email", "stems": ["user", "email"]}
{"member": "user.forename", "stems": ["user", "forename"]}
{"member": "user.im_handle", "stems": ["user", "im_handle"]}
{"member": "user.name", "stems": ["user", "name"]}
{"member": "user.phone1", "stems": ["user", "phone1"]}
{"member": "user.phone2", "stems": ["user", "phone2"]}
{"member": "user.role", "stems": ["user", "role"]}
{"member": "user.surname", "stems": ["user", "surname"]}
{"member": "user.user_group", "stems": ["user", "user_group"]}
{"member": "user.username", "stems": ["user", "username"]}
