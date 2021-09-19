import 'dart:convert';

import 'package:safe_ride/models/user_info.dart';
import 'package:shared_preferences/shared_preferences.dart';

class UserPrefsManager {
  String userInfoKey = 'userInfoKey';
  Future<void> saveUser(UserInfo userInfo) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setString(userInfoKey, json.encode(userInfo.toJson()));
  }

  Future<bool> hasUser() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    return prefs.containsKey(userInfoKey);
  }

  Future<UserInfo> fetchUser() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String user = prefs.getString(userInfoKey) ?? '';
    UserInfo userInfo = UserInfo.fromJson(json.decode(user));
    return userInfo;
  }
}
