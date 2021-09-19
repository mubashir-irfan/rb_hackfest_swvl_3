import 'dart:convert';
import 'dart:io';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:safe_ride/models/user_info.dart';
import 'package:safe_ride/profile/profile_view.dart';
import 'package:safe_ride/report_incidents/post_trip_incident/post_trip_incident_view.dart';
import 'package:safe_ride/services/data_repository.dart';
import 'package:stacked/stacked.dart';
import 'package:webview_flutter/webview_flutter.dart';

class ReportIncidentsViewModel extends BaseViewModel {
  DataRepository dataRepository = DataRepository();

  UserInfo _userInfo =
      UserInfo(flags: [], fullName: '', imageUrl: '', phoneNumber: '');
  UserInfo get userInfo => _userInfo;
  set userInfo(UserInfo val) {
    _userInfo = val;
    notifyListeners();
  }

  Future<void> init() async {
    setBusy(true);
    if (Platform.isAndroid) {
      WebView.platform = SurfaceAndroidWebView();
    }
    userInfo = await dataRepository.fetchUser('0324-2262067');
    setBusy(false);
  }

  void navigateToPostTripIncidentView(BuildContext context) => Navigator.push(
          context,
          MaterialPageRoute(builder: (c) => const PostTripIncidentView()))
      .then((value) async =>
          userInfo = await dataRepository.fetchUser('0324-2262067'));

  void navigateToProfileView(BuildContext context) => Navigator.push(
          context, MaterialPageRoute(builder: (c) => const ProfileView()))
      .then((value) async =>
          userInfo = await dataRepository.fetchUser('0324-2262067'));
}
