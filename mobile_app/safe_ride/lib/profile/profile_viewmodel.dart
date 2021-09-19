import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:safe_ride/models/user_info.dart';
import 'package:safe_ride/profile/flags_details/flags_details_view.dart';
import 'package:safe_ride/services/data_repository.dart';
import 'package:stacked/stacked.dart';

class ProfileViewModel extends BaseViewModel {
  final ImagePicker _picker = ImagePicker();
  DataRepository dataRepository = DataRepository();

  String _pickedPhoto = '';
  String get pickedPhoto => _pickedPhoto;
  set pickedPhoto(String val) {
    _pickedPhoto = val;
    notifyListeners();
  }

  UserInfo _userInfo =
      UserInfo(flags: [], fullName: '', phoneNumber: '', imageUrl: '');
  UserInfo get userInfo => _userInfo;
  set userInfo(UserInfo val) {
    _userInfo = val;
    notifyListeners();
  }

  String involvedString = '';

  Future<void> init() async {
    setBusy(true);
    userInfo = await dataRepository.fetchUser('0324-2262067');
    involvedString = _getFlagString(userInfo);
    setBusy(false);
  }

  void navigateToFlagsView(BuildContext context) => Navigator.push(
      context,
      MaterialPageRoute(
          builder: (c) => FlagsDetailsView(
                userInfo: userInfo,
              )));

  Future<void> pickPhoto() async {
    XFile? image = await _picker.pickImage(source: ImageSource.gallery);
    if (image != null) {
      pickedPhoto = image.path;
      String id = '0324-2262067';
      await dataRepository.setUserPhoto(image.path, id);
      userInfo = await dataRepository.fetchUser(id);
    }
  }

  String _getFlagString(UserInfo userInfo) {
    int severeCount =
        userInfo.flags.where((element) => element.severity == "SEVERE").length;
    int mildCount =
        userInfo.flags.where((element) => element.severity == "MILD").length;
    int trivialCount =
        userInfo.flags.where((element) => element.severity == "TRIVIAL").length;
    String involvedString = '';
    if (severeCount > 0) {
      involvedString += '\n$severeCount Severe Incident(s)';
    }
    if (mildCount > 0) {
      involvedString += '\n$mildCount Mild Incident(s)';
    }
    if (trivialCount > 0) {
      involvedString += '\n$trivialCount Trivial Incident(s)';
    }
    return involvedString;
  }
}
