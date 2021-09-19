import 'package:flutter/material.dart';
import 'package:safe_ride/globals/widgets/appbar/appbar_widget.dart';
import 'package:safe_ride/report_incidents/post_trip_incident/post_trip_incident_viewmodel.dart';
import 'package:stacked/stacked.dart';
import 'package:webview_flutter/webview_flutter.dart';

class PostTripIncidentView extends StatelessWidget {
  const PostTripIncidentView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ViewModelBuilder<PostTripIncidentViewModel>.reactive(
        viewModelBuilder: () => PostTripIncidentViewModel(),
        builder: (context, model, _) {
          return Scaffold(
            body: SafeArea(
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(12.0),
                    child: AppbarWidget(hasBackArrow: true),
                  ),
                  const Expanded(
                    child: WebView(
                      initialUrl: 'https://google.com',
                    ),
                  ),
                ],
              ),
            ),
          );
        });
  }
}
