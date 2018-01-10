## React Native Tutorial: Integrating in an Existing App

## Perview
![Alt Text](http://source.luoerming.com/images/ReactNativeInProject_Demo.gif)


## Step1:
If you dont'have cocoaPods installed, execute the following command in Terminal;

`gem install cocoapods`

Next, install nodeJs

`brew install node`

Finally, use the following command to instruct Homebrew to install watchman;

`brew install watchman`

You now have the basic React-Native scaffolding in palce, Now you can install the modules you project will use.

## Step2:
Create a file named Podfile. Add the following to the file:

```ruby
platform :ios, '8.0'
target 'ReactNative-in-project' do
    use_frameworks!
    pod 'React', :path => './react-component/node_modules/react-native', :subspecs => [
        'Core',
        'RCTImage',
        'RCTNetwork',
        'RCTText',
        'RCTWebSocket',

    target 'ReactNative-in-projectTests' do
        inherit! :search_paths
    end

    target 'ReactNative-in-projectUITests' do
        inherit! :search_paths
    end
end
```
Then, Run the following command to install the dependencies:

`pod install`

## Step3:
Create a folder named react-component in the project root directory. And Create a file named package.json in the react-component folder root directory. Add the following to the file;

```ruby
{
  "name": "ReactNative-in-project",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest"
  },
  "dependencies": {
    "react": "15.3.2",
    "react-native": "0.35.0"
  },
  "jest": {
    "preset": "jest-react-native"
  },
  "devDependencies": {
    "babel-jest": "16.0.0",
    "babel-preset-react-native": "1.9.0",
    "jest": "16.0.1",
    "jest-react-native": "16.0.0",
    "react-test-renderer": "15.3.2"
  }
}
```

Next, Run the command to install the required Node.js modules;

## Step4
Go to react-component folder. And run the following command to starting NodeJs servers;

`npm start`

## Step5

For security reasons, Apple by default blocks HTTP access to URLs. You’ll have to make an exception so you can load your bundle from the development server running on http://localhost.
In Xcode, open Info.plist and perform the following:

```ruby
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSExceptionDomains</key>
    <dict>
        <key>localhost</key>
        <dict>
            <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
    </dict>
</dict>
```
