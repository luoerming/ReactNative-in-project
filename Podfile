# Uncomment the next line to define a global platform for your project
platform :ios, '8.0'

target 'ReactNative-in-project' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
    use_frameworks!

   # 取决于你的工程如何组织，你的node_modules文件夹可能会在别的地方。
   # 请将:path后面的内容修改为正确的路径。
    pod 'React', :path => './react-component/node_modules/react-native', :subspecs => [
        'Core',
        'RCTImage',
        'RCTNetwork',
        'RCTText',
        'RCTWebSocket',
    # 添加其他你想在工程中使用的依赖。
    ]


    target 'ReactNative-in-projectTests' do
        inherit! :search_paths
    # Pods for testing
    end

    target 'ReactNative-in-projectUITests' do
        inherit! :search_paths
        # Pods for testing
    end

end
