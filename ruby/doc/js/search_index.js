var search_data = {"index":{"searchIndex":["watson","command","config","fs","parser","printer","remote","bitbucket","github","check_conf()","check_dir()","check_file()","check_less()","cprint()","cprint()","create_conf()","debug_print()","execute()","get_comment_type()","get_issues()","get_issues()","help()","http_call()","new()","new()","new()","parse_dir()","parse_file()","post_issue()","post_issue()","print_entry()","print_header()","print_header()","print_status()","print_status()","print_structure()","read_conf()","run()","run()","run()","set_context()","set_dirs()","set_files()","set_ignores()","set_parse_depth()","set_tags()","setup()","setup()","setup_remote()","update_conf()","version()"],"longSearchIndex":["watson","watson::command","watson::config","watson::fs","watson::parser","watson::printer","watson::remote","watson::remote::bitbucket","watson::remote::github","watson::config#check_conf()","watson::fs::check_dir()","watson::fs::check_file()","watson#check_less()","watson::printer#cprint()","watson::printer::cprint()","watson::config#create_conf()","watson#debug_print()","watson::command::execute()","watson::parser#get_comment_type()","watson::remote::bitbucket::get_issues()","watson::remote::github::get_issues()","watson::command::help()","watson::remote::http_call()","watson::config::new()","watson::parser::new()","watson::printer::new()","watson::parser#parse_dir()","watson::parser#parse_file()","watson::remote::bitbucket::post_issue()","watson::remote::github::post_issue()","watson::printer#print_entry()","watson::printer::print_header()","watson::printer#print_header()","watson::printer::print_status()","watson::printer#print_status()","watson::printer#print_structure()","watson::config#read_conf()","watson::config#run()","watson::parser#run()","watson::printer#run()","watson::command::set_context()","watson::command::set_dirs()","watson::command::set_files()","watson::command::set_ignores()","watson::command::set_parse_depth()","watson::command::set_tags()","watson::remote::bitbucket::setup()","watson::remote::github::setup()","watson::command::setup_remote()","watson::config#update_conf()","watson::command::version()"],"info":[["Watson","","Watson.html","",""],["Watson::Command","","Watson/Command.html","","<p>Command line parser class Controls program flow and parses options given by\ncommand line\n"],["Watson::Config","","Watson/Config.html","","<p>Configuration container class Contains all configuration options and state\nvariables that are accessed …\n"],["Watson::FS","","Watson/FS.html","","<p>File system utility function class  Contains all methods for file access in\nwatson\n"],["Watson::Parser","","Watson/Parser.html","","<p>Dir/File parser class Contains all necessary methods to parse through files\nand directories  for specified …\n"],["Watson::Printer","","Watson/Printer.html","","<p>Printer class that handles all formatting and printing of parsed dir/file\nstructure\n"],["Watson::Remote","","Watson/Remote.html","","<p>Remote class that handles all remote HTTP calls to Bitbucket and GitHub\n"],["Watson::Remote::Bitbucket","","Watson/Remote/Bitbucket.html","","<p>Bitbucket remote access class Contains all necessary methods to obtain\naccess to, get issue list, and …\n"],["Watson::Remote::GitHub","","Watson/Remote/GitHub.html","","<p>GitHub remote access class Contains all necessary methods to obtain access\nto, get issue list, and post …\n"],["check_conf","Watson::Config","Watson/Config.html#method-i-check_conf","()","<p>Check for config file in directory of execution Should have individual .rc\nfor each dir that watson is …\n"],["check_dir","Watson::FS","Watson/FS.html#method-c-check_dir","(dir)","<p>Check if directory exists and can be opened\n"],["check_file","Watson::FS","Watson/FS.html#method-c-check_file","(file)","<p>Check if file exists and can be opened\n"],["check_less","Watson","Watson.html#method-i-check_less","()","<p>Perform system check to see if we are able to use unix less for printing\n"],["cprint","Watson::Printer","Watson/Printer.html#method-i-cprint","(msg = \"\", color = \"\")","<p>Custom color print for member call Allows not only for custom color\nprinting but writing to file vs  …\n"],["cprint","Watson::Printer","Watson/Printer.html#method-c-cprint","(msg = \"\", color = \"\")","<p>Custom color print for static call (only writes to STDOUT)\n"],["create_conf","Watson::Config","Watson/Config.html#method-i-create_conf","()","<p>Watson config creater Copies default config from /assets/defaultConf to the\ncurrent directory\n"],["debug_print","Watson","Watson.html#method-i-debug_print","(msg)","<p>Global debug print that prints based on local file DEBUG flag as well as\nGLOBAL debug flag\n"],["execute","Watson::Command","Watson/Command.html#method-c-execute","(*args)","<p>Command line controller Manages program flow from given command line\narguments\n"],["get_comment_type","Watson::Parser","Watson/Parser.html#method-i-get_comment_type","(filename)","<p>Get comment syntax for given file\n"],["get_issues","Watson::Remote::Bitbucket","Watson/Remote/Bitbucket.html#method-c-get_issues","(config)","<p>Get all remote Bitbucket issues and store into Config container class\n"],["get_issues","Watson::Remote::GitHub","Watson/Remote/GitHub.html#method-c-get_issues","(config)","<p>Get all remote GitHub issues and store into Config container class\n"],["help","Watson::Command","Watson/Command.html#method-c-help","()","<p>Print help for watson\n"],["http_call","Watson::Remote","Watson/Remote.html#method-c-http_call","( opts )","<p>Generic HTTP call method Accepts input hash of options that dictate how the\nHTTP call is to be made\n"],["new","Watson::Config","Watson/Config.html#method-c-new","()","<p>Config initialization method to setup necessary parameters, states, and\nvars\n"],["new","Watson::Parser","Watson/Parser.html#method-c-new","(config)","<p>Initialize the parser with the current watson config\n"],["new","Watson::Printer","Watson/Printer.html#method-c-new","(config)","<p>Printer initialization method to setup necessary parameters, states, and\nvars\n"],["parse_dir","Watson::Parser","Watson/Parser.html#method-i-parse_dir","(dir, depth)","<p>Parse through specified directory and find all subdirs and files\n"],["parse_file","Watson::Parser","Watson/Parser.html#method-i-parse_file","(filename)","<p>Parse through individual files looking for issue tags, then generate\nformatted issue hash\n"],["post_issue","Watson::Remote::Bitbucket","Watson/Remote/Bitbucket.html#method-c-post_issue","(issue, config)","<p>Post given issue to remote Bitbucket repo\n"],["post_issue","Watson::Remote::GitHub","Watson/Remote/GitHub.html#method-c-post_issue","(issue, config)","<p>Post given issue to remote GitHub repo\n"],["print_entry","Watson::Printer","Watson/Printer.html#method-i-print_entry","(entry)","<p>Individual entry printer Uses issue hash to format printed output\n"],["print_header","Watson::Printer","Watson/Printer.html#method-c-print_header","()","<p>Standard header print for static call (uses static cprint)\n"],["print_header","Watson::Printer","Watson/Printer.html#method-i-print_header","()","<p>Standard header print for class call (uses member cprint)\n"],["print_status","Watson::Printer","Watson/Printer.html#method-c-print_status","(msg, color)","<p>Status printer for static call (uses static cprint)  Print status block in\nstandard format\n"],["print_status","Watson::Printer","Watson/Printer.html#method-i-print_status","(msg, color)","<p>Status printer for member call (uses member cprint) Print status block in\nstandard format\n"],["print_structure","Watson::Printer","Watson/Printer.html#method-i-print_structure","(structure)","<p>Go through all files and directories and call necessary printing methods\nPrint all individual entries, …\n"],["read_conf","Watson::Config","Watson/Config.html#method-i-read_conf","()","<p>Read configuration file and populate Config container class\n"],["run","Watson::Config","Watson/Config.html#method-i-run","()","<p>Parse through configuration and obtain remote info if necessary\n"],["run","Watson::Parser","Watson/Parser.html#method-i-run","()","<p>Begins parsing of files / dirs specified in the initial dir/file lists\n"],["run","Watson::Printer","Watson/Printer.html#method-i-run","(structure)","<p>Take parsed structure and print out in specified formatting\n"],["set_context","Watson::Command","Watson/Command.html#method-c-set_context","(args)","<p>set_context Set context_depth parameter in config\n"],["set_dirs","Watson::Command","Watson/Command.html#method-c-set_dirs","(args)","<p>set_dirs\n<p>Set directories to be parsed by watson\n"],["set_files","Watson::Command","Watson/Command.html#method-c-set_files","(args)","<p>set_files\n<p>Set files to be parsed by watson\n"],["set_ignores","Watson::Command","Watson/Command.html#method-c-set_ignores","(args)","<p>set_ignores Set files and dirs to be ignored when parsing by watson\n"],["set_parse_depth","Watson::Command","Watson/Command.html#method-c-set_parse_depth","(args)","<p>set_parse_depth  Set how deep to recursively parse directories\n"],["set_tags","Watson::Command","Watson/Command.html#method-c-set_tags","(args)","<p>set_tags Set tags to look for when parsing files and folders\n"],["setup","Watson::Remote::Bitbucket","Watson/Remote/Bitbucket.html#method-c-setup","(config)","<p>Setup remote access to Bitbucket Get Username, Repo, and PW and perform\nnecessary HTTP calls to check …\n"],["setup","Watson::Remote::GitHub","Watson/Remote/GitHub.html#method-c-setup","(config)","<p>Setup remote access to GitHub  Get Username, Repo, and PW and perform\nnecessary HTTP calls to check validity …\n"],["setup_remote","Watson::Command","Watson/Command.html#method-c-setup_remote","(args)","<p>setup_remote Handle setup of remote issue posting for GitHub and Bitbucket\n"],["update_conf","Watson::Config","Watson/Config.html#method-i-update_conf","(*params)","<p>Update config file with specified parameters Accepts input parameters that\nshould be updated and writes …\n"],["version","Watson::Command","Watson/Command.html#method-c-version","()","<p>Print version information about watson\n"]]}}