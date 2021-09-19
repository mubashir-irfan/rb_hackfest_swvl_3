import 'package:flutter/material.dart';
import 'package:safe_ride/models/user_info.dart';
import 'package:safe_ride/profile/profile_view.dart';
import 'package:safe_ride/services/data_repository.dart';
import 'package:stacked/stacked.dart';

class AppbarViewModel extends BaseViewModel {
  DataRepository dataRepository = DataRepository();

  UserInfo _userInfo =
      UserInfo(fullName: '', flags: [], imageUrl: '', phoneNumber: '');
  UserInfo get userInfo => _userInfo;
  set userInfo(UserInfo val) {
    _userInfo = val;
    notifyListeners();
  }

  Future<void> init() async {
    setBusy(true);
    userInfo = await dataRepository.fetchUser('0324-2262067');
    setBusy(false);
  }

  void navigateToProfileView(BuildContext context) => Navigator.push(
          context, MaterialPageRoute(builder: (c) => const ProfileView()))
      .then((value) async =>
          userInfo = await dataRepository.fetchUser('0324-2262067'));
}
