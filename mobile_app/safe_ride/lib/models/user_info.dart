class UserInfo {
  late String fullName;
  late String phoneNumber;
  late List<Flags> flags;
  late String imageUrl;

  UserInfo({required this.fullName, required this.phoneNumber, required this.flags, required this.imageUrl});

  UserInfo.fromJson(Map<String, dynamic> json) {
    fullName = json['fullName'];
    imageUrl = json['imageUrl'] ?? '';
    phoneNumber = json['phoneNumber'];
    if (json['flags'] != null) {
      flags = [];
      json['flags'].forEach((v) {
        flags.add(new Flags.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['fullName'] = this.fullName;
    data['phoneNumber'] = this.phoneNumber;
    data['imageUrl'] = imageUrl;
    if (this.flags != null) {
      data['flags'] = this.flags.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class Flags {
  late String type;
  late String severity;
  late String title;
  late String description;
  late String date;

  Flags({required this.type, required this.severity, required this.title, required this.description, required this.date});

  Flags.fromJson(Map<String, dynamic> json) {
    type = json['type'];
    severity = json['severity'];
    title = json['title'];
    description = json['description'];
    date = json['date'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = {};
    data['type'] = type;
    data['severity'] = this.severity;
    data['title'] = this.title;
    data['description'] = this.description;
    data['date'] = this.date;
    return data;
  }
}
