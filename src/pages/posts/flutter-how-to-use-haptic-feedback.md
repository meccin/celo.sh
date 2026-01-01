---
layout: '../../layouts/MarkdownPostLayout.astro'
title: 'Flutter: How to Use Haptic Feedback'
date: 2020-07-24
excerpt: 'Quick guide to adding Haptic Feedback in Flutter for tactile app responses without extra packages.'
---
Hello my dear ones, how are you? Today we are going to see how to use **Haptic Feedback** in Flutter in an easy and practical way that will save us time whenever we need to use it.

## What is Haptic Feedback

Without too much explanation, Haptic Feedback is the response our phone gives to a touch. The response can be sound, vibration, or sensations. Haptic Feedback often goes unnoticed in our daily routine because it is so integrated — we only notice it when an interaction doesn’t give any response.

Haptic Feedback works with vibration intensities to respond to the user’s touch. By using Flutter’s `SystemChannels`, we can create a class that will help us whenever we need a response in our app.

## Utility: Haptic Feedback

We will create a file called `haptic.dart` in our application. I usually put it in a folder called `utils` so I can easily use and find my code helpers. You can create it in your preferred folder structure.

We use the `SystemChannel`, which communicates with native code in Flutter, to create the functions for Haptic Feedback responses. This way, we can use it in any project without relying on external packages.

We make our functions `static` so that we don’t need to initialize our class whenever we want to use them, making it even more practical and easy.

```dart haptic.dart
import 'package:flutter/services.dart';

class HapticFeedback {
  static Future<void> lightImpact() async {
    await SystemChannels.platform.invokeMethod<void>(
      'HapticFeedback.vibrate',
      'HapticFeedbackType.lightImpact',
    );
  }

  static Future<void> mediumImpact() async {
    await SystemChannels.platform.invokeMethod<void>(
      'HapticFeedback.vibrate',
      'HapticFeedbackType.mediumImpact',
    );
  }

  static Future<void> heavyImpact() async {
    await SystemChannels.platform.invokeMethod<void>(
      'HapticFeedback.vibrate',
      'HapticFeedbackType.heavyImpact',
    );
  }

  static Future<void> selectionClick() async {
    await SystemChannels.platform.invokeMethod<void>(
      'HapticFeedback.vibrate',
      'HapticFeedbackType.selectionClick',
    );
  }

  static Future<void> vibrate() async {
    await SystemChannels.platform.invokeMethod<void>('HapticFeedback.vibrate');
  }
}
```

## Using Haptic Feedback

For this example, I will use a sample project I have that is available on GitHub.  

It is a simple Flutter counter where we added a Haptic Feedback response when incrementing the counter.

```dart haptic_home.dart
import 'package:flutter/material.dart';

import 'package:flutter_raw/src/utils/haptic.dart'; // Add line of importation of util
import 'package:flutter_raw/src/controllers/home.dart';

class HomeView extends StatelessWidget {
  final HomeController _homeController = HomeController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            ValueListenableBuilder(
              valueListenable: this._homeController.counter,
              builder: (_, counter, ___) {
                return Text(
                  '$counter',
                  style: Theme.of(context).textTheme.headline4,
                );
              },
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          HapticFeedback.heavyImpact(); // I call the HapticFeedback with the desired intensity of the response.

          this._homeController.incrementCounter();
        },
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
```

In the code above, the lines we should pay attention to are **lines 3 and 36**, where we use our newly created utility.  

- **Line 3**: Here we have a standard import of the utility we just created.  
- **Line 36**: We call our utility, specifying the intensity of the feedback response for the user.  

Well everyone, now we have a response when clicking something in our application. We can make calls to our `HapticFeedback` utility anywhere, making our app smarter and responsive to the user.  

I hope you enjoyed my first article. I will always strive to improve in future posts to make things clear and useful for you.  

I also leave here the **Flutter Raw** repository, which is a project where I try to build what is generally needed in a Flutter application without relying on external packages, so it can be easily reused from one project to another.

[meccin/flutter-raw](https://github.com/meccin/flutter-raw)

Thank you, my dear ones, and see you next time.
