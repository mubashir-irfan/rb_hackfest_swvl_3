import 'package:flutter/material.dart';
import 'package:safe_ride/profile/profile_view.dart';
import 'package:stacked/stacked.dart';

class PostTripIncidentViewModel extends BaseViewModel {
  void navigateToProfileView(BuildContext context) => Navigator.push(
      context, MaterialPageRoute(builder: (c) => const ProfileView()));
}
