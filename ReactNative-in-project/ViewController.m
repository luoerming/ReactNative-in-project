//
//  ViewController.m
//  ReactNative-in-project
//
//  Created by Carroll on 2017/3/23.
//  Copyright © 2017年 Carroll. All rights reserved.
//

#import "ViewController.h"
#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    //    NSString *urlString = @"index.ios.jsbundle";
    NSString *urlString = @"http://localhost:8081/index.ios.bundle";
    NSURL *jsCodeLocation = [NSURL URLWithString:urlString];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"ReactNativeInProject"
                                                 initialProperties:nil
                                                     launchOptions:nil];
    self.view = rootView;
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
