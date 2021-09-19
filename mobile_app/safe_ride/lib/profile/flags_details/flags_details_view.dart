import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:safe_ride/globals/widgets/appbar/appbar_widget.dart';
import 'package:safe_ride/models/user_info.dart';
import 'package:safe_ride/profile/flags_details/flags_details_viewmodel.dart';
import 'package:stacked/stacked.dart';

class FlagsDetailsView extends StatelessWidget {
  FlagsDetailsView({Key? key, required this.userInfo}) : super(key: key);
  late UserInfo userInfo;

  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;
    return ViewModelBuilder<FlagsDetailsViewModel>.reactive(
        viewModelBuilder: () => FlagsDetailsViewModel(),
        builder: (context, model, _) {
          return Scaffold(
              body: SafeArea(
            child: Padding(
              padding: const EdgeInsets.all(12.0),
              child: Column(
                children: [
                  AppbarWidget(hasProfileIcon: false, hasBackArrow: true),
                  ListView.builder(
                    shrinkWrap: true,
                    itemCount: userInfo.flags.length,
                    itemBuilder: (context, i) => Card(
                        elevation: 3,
                        child: ListTile(
                          isThreeLine: true,
                          minLeadingWidth: screenSize.width * 0.07,
                          leading: Tooltip(
                            message: userInfo.flags[i].severity,
                            child: Icon(
                              Icons.description,
                              color: userInfo.flags[i].severity == 'MILD'
                                  ? Colors.orange
                                  : userInfo.flags[i].severity == 'TRIVIAL'
                                      ? Colors.yellow
                                      : userInfo.flags[i].severity == 'SEVERE'
                                          ? Colors.red
                                          : Colors.red,
                            ),
                          ),
                          title: Text(
                            userInfo.flags[i].title,
                            style: Theme.of(context)
                                .textTheme
                                .subtitle1!
                                .copyWith(fontWeight: FontWeight.bold),
                          ),
                          subtitle: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(userInfo.flags[i].description),
                            ],
                          ),
                        )),
                  ),
                ],
              ),
            ),
          ));
        });
  }
}
