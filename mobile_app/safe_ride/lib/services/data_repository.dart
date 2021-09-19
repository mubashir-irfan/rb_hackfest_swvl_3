import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:safe_ride/models/user_info.dart';
import 'package:safe_ride/services/user_prefs_manager.dart';

class DataRepository {
  UserPrefsManager userPrefsManager = UserPrefsManager();
  Future<UserInfo> fetchUser(String id) async {
    bool hasUser = await userPrefsManager.hasUser();
    if (!hasUser) {
      CollectionReference users =
          FirebaseFirestore.instance.collection('users');
      DocumentSnapshot snap = await users.doc(id).get();
      Map<String, dynamic> data = snap.data() as Map<String, dynamic>;
      UserInfo userInfo = UserInfo.fromJson(data);
      await userPrefsManager.saveUser(userInfo);
      return userInfo;
    } else {
      return userPrefsManager.fetchUser();
    }
  }

  Future<void> setUserPhoto(String path, String id) async{
    CollectionReference users =
          FirebaseFirestore.instance.collection('users');
    UserInfo userInfo = await fetchUser(id);
    userInfo.imageUrl = path;
    await users.doc(id).set(userInfo.toJson());
    await userPrefsManager.saveUser(userInfo);
    
  }
}
