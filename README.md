[![](https://img.shields.io/badge/Community%20Extension-An%20open%20source%20community%20maintained%20project-FF4700)](https://github.com/camunda-community-hub/community) [![](https://img.shields.io/badge/Lifecycle-Proof%20of%20Concept-blueviolet)](https://github.com/Camunda-Community-Hub/community/blob/main/extension-lifecycle.md#proof-of-concept-)

# Welcome to the Camunda Community Hub Community Summit Plugins Project!

## This contest will take place during [Camunda Community Summit](https://summit.camunda.com/) and will be orchestrated by [@SebastianStamm](https://github.com/SebastianStamm)!

The goal of the Plugin Contest is for you to write your own Cockpit plugin and make it available to the Camunda Community!

## How to participate

### 1. Write a Plugin

First, you have to come up with a funny, original, or maybe even useful idea for a Cockpit plugin. If you are new to Cockpit plugins, check out the [Camunda Docs](https://docs.camunda.org/manual/7.15/webapps/cockpit/extend/plugins/#plugin-points) or have a look at a [very simple demo plugin](https://github.com/camunda/camunda-bpm-examples/tree/master/cockpit/cockpit-cats).

### 2. Submit your Plugin with a Pull Request

After you have finished your plugin, fork this repository and create a Pull Request. The pull request should contain a directory with a name that accurately describes your plugin (e.g. "translations" or "nightmode"). Inside the directory, you should have the following files and directories:

- `setup.json`: A JSON file containing information about how to install and uninstall your plugin.
- `screenshot.png`: A representative screenshot that will be displayed in the store. The screenshot should have a height of 218px.
- `src/`: The actual plugin. The files in this directory will be copied to the server. The concrete structure for this directory depends on the plugin type.

#### The `setup.json` file

This file contains information about how to install and uninstall your plugin. Please have a look at this example to see how this file should be structured:

```json
{
  "title": "My Awesome Plugin",
  "description": "A short description of the Plugin. It should not contain more than 250 characters",
  "app": "Cockpit",
  "type": "Custom Script"
}
```

The `app` property indicates which webapp is augmented by the plugin. Right now, we only support `"Cockpit"` for this property.

The `type` property indicates what type of plugin this is. Right now, we only support `"Custom Script"` and `"Translation"` for this property.

##### `"Custom Script"` Config

For custom scripts, the src directory of the plugin must contain an index.js file that serves as entry point for the plugin.

##### `"Translation"` Config

For translations, the src directory of the plugin must contain a .json file with the appropriate language code (e.g. `en.json`).

### 3. Wait for the Pull Request Review

After you created the Pull Request, we will have a look at it and merge it if everything is okay. After your plugin is merged, you can see it in the [Camunda Community Plugin Store](https://github.com/camunda-community-hub/camunda-community-pluginstore).

If you submit your Pull Request before the end of the Camunda Community Summit 2021, your Plugin is also considered for the competition and you might win a Camunda goodie bag for the best plugin!

---

For more information on how to get started in the Camunda Community Hub, please visit our [community repository](https://github.com/Camunda-Community-Hub/community)!
