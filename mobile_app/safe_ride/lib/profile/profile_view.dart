import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:lottie/lottie.dart';
import 'package:safe_ride/profile/profile_viewmodel.dart';
import 'package:stacked/stacked.dart';

class ProfileView extends StatelessWidget {
  const ProfileView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;
    return ViewModelBuilder<ProfileViewModel>.reactive(
        viewModelBuilder: () => ProfileViewModel(),
        onModelReady: (m) async => await m.init(),
        builder: (context, model, _) {
          return Scaffold(
            appBar: AppBar(),
            body: SafeArea(
              child: Padding(
                padding: const EdgeInsets.all(12.0),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Hero(
                          tag: 'profile',
                          child: GestureDetector(
                            onTap: model.pickPhoto,
                            child: model.userInfo.imageUrl.isNotEmpty
                                ? CircleAvatar(
                                    radius: screenSize.width * 0.2,
                                    backgroundImage: FileImage(
                                        File(model.userInfo.imageUrl)),
                                  )
                                : CircleAvatar(
                                    radius: screenSize.width * 0.2,
                                    child: const Text('Pick a photo'),
                                  ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(
                      height: 16,
                    ),
                    Text(
                      model.userInfo.fullName,
                      style: Theme.of(context).textTheme.headline6,
                    ),
                    const SizedBox(
                      height: 8,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Chip(
                          label: Text(
                            'Customer',
                            style: Theme.of(context)
                                .textTheme
                                .subtitle2!
                                .copyWith(fontWeight: FontWeight.bold),
                          ),
                          backgroundColor: Colors.transparent,
                          side: BorderSide(
                              color: Theme.of(context).primaryColor, width: 2),
                        ),
                        model.userInfo.flags.isNotEmpty
                            ? const SizedBox(
                                width: 8,
                              )
                            : Container(),
                        model.userInfo.flags.isNotEmpty
                            ? PopupMenuButton<int>(
                                onSelected: (int val) {
                                  model.navigateToFlagsView(context);
                                },
                                tooltip: 'There are violations against you',
                                itemBuilder: (context) {
                                  var list = [
                                    PopupMenuItem(
                                        value: 1,
                                        child: Text(
                                            'You are involved in:${model.involvedString}\n\nTap for details')),
                                  ];
                                  return list;
                                },
                                child: Lottie.asset('assets/flags.json',
                                    width: 60, height: 60))
                            : Container(),
                      ],
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 16.0),
                      child: TextFormField(
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(
                            hintText: model.userInfo.phoneNumber,
                            enabled: false,
                            icon: const Icon(Icons.phone_android)),
                      ),
                    ),
                    const SizedBox(
                      height: 16,
                    ),
                  ],
                ),
              ),
            ),
          );
        });
  }
}
