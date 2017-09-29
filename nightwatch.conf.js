module.exports = {
  src_folders: ["tests"],

  selenium: {
    start_process: true,
    server_path: "bin/selenium-standalone.jar",
    port: 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "/usr/loca/bin/chromedriver"
    },
  },

  test_settings: {
    default: {
      launch_url: "http://localhost",
      selenium_port: 4444,
      selenium_host: "localhost",
      silent: true,
      screenshots: {
        enabled: false,
        path: "",
      },
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
}
