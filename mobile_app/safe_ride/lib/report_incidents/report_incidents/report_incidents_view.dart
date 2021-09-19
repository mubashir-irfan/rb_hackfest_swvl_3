import 'dart:io';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:safe_ride/report_incidents/report_incidents/report_incidents_viewmodel.dart';
import 'package:stacked/stacked.dart';

class ReportIncidentsView extends StatelessWidget {
  const ReportIncidentsView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var _headerText = Theme.of(context)
        .textTheme
        .headline6!
        .copyWith(fontWeight: FontWeight.w700);
    Size screenSize = MediaQuery.of(context).size;
    return ViewModelBuilder<ReportIncidentsViewModel>.reactive(
      onModelReady: (m) async => await m.init(),
      viewModelBuilder: () => ReportIncidentsViewModel(),
      builder: (context, model, _) => Scaffold(
        body: model.isBusy
            ? const Center(
                child: CircularProgressIndicator(),
              )
            : SafeArea(
                child: Padding(
                  padding: const EdgeInsets.all(12.0),
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          GestureDetector(
                              onTap: () => model.navigateToProfileView(context),
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
                                        ),
                                ),
                              )),
                        ],
                      ),
                      Expanded(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            SizedBox(height: screenSize.height * 0.22,child: Image.asset('assets/logo_red.png', scale: 1.3,)),
                            const SizedBox(
                              height: 16,
                            ),
                            Text(
                              'Report an incident',
                              style: _headerText,
                            ),
                            const SizedBox(
                              height: 16,
                            ),
                            Card(
                              elevation: 5,
                              child: InkWell(
                                onTap: ()=>model.navigateToPostTripIncidentView(
                                              context),
                                child: SizedBox(
                                  width: screenSize.width,
                                  child: Padding(
                                    padding: const EdgeInsets.all(8.0),
                                    child: Column(
                                      children: [
                                        Image.asset('assets/post_trip_action_icon.png', scale: 4,),
                                        const SizedBox(height: 16,),
                                        const Text('Report Incident'),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          SizedBox(height: 16,),
                           Card(
                              elevation: 5,
                              child: InkWell(
                                onTap: ()=>model.navigateToPostTripIncidentView(
                                              context),
                                child: SizedBox(
                                  width: screenSize.width,
                                  child: Padding(
                                    padding: const EdgeInsets.all(8.0),
                                    child: Column(
                                      children: [
                                        Image.asset('assets/immediate_action_icon.png', scale: 4,),
                                        const SizedBox(height: 16,),
                                        const Text('Immediate Incident'),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      )
                    ],
                  ),
                ),
              ),
      ),
    );
  }
}
