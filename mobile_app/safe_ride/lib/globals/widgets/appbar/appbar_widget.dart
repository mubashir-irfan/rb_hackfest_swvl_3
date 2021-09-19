import 'dart:io';

import 'package:flutter/material.dart';
import 'package:safe_ride/globals/widgets/appbar/appbar_viewmodel.dart';
import 'package:stacked/stacked.dart';

class AppbarWidget extends StatelessWidget {
  AppbarWidget(
      {Key? key, this.hasBackArrow = false, this.hasProfileIcon = true})
      : super(key: key);

  bool hasBackArrow;
  bool hasProfileIcon;

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<AppbarViewModel>.reactive(
        viewModelBuilder: () => AppbarViewModel(),
        onModelReady: (m) async => await m.init(),
        builder: (context, model, _) {
          return model.isBusy
              ? Container()
              : Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    hasBackArrow
                        ? Padding(
                            padding: const EdgeInsets.only(right: 8.0),
                            child: IconButton(
                                onPressed: () => Navigator.pop(context),
                                icon: Icon(
                                  Icons.arrow_back,
                                  color: Theme.of(context).primaryColor,
                                )),
                          )
                        : Container(),
                    Container(
                      decoration: BoxDecoration(
                          color: Theme.of(context).primaryColor,
                          borderRadius: BorderRadius.circular(8)),
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Image.asset(
                          'assets/logo.png',
                          scale: 3,
                        ),
                      ),
                    ),
                    hasProfileIcon ? const Spacer() : Container(),
                    hasProfileIcon
                        ? GestureDetector(
                            onTap: () {
                              model.navigateToProfileView(context);
                            },
                            child: Padding(
                              padding:
                                  const EdgeInsets.symmetric(horizontal: 8.0),
                              child: Hero(
                                  tag: 'profile',
                                  child: model.userInfo.imageUrl.isEmpty
                                      ? CircleAvatar(
                                          child:
                                              Text(model.userInfo.fullName[0]),
                                        )
                                      : CircleAvatar(
                                          backgroundImage: FileImage(
                                              File(model.userInfo.imageUrl)),
                                        )),
                            ))
                        : Container(),
                  ],
                );
        });
  }
}
