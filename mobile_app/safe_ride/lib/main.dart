import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:safe_ride/report_incidents/report_incidents/report_incidents_view.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  final Color primaryColor = const Color(0xfffc153b);
  final MaterialColor primarySwatch =
      const MaterialColor(0xffed3d47, <int, Color>{
    50: Color(0xfffc153b),
    100: Color(0xfffc153b),
    200: Color(0xfffc153b),
    300: Color(0xfffc153b),
    400: Color(0xfffc153b),
    500: Color(0xfffc153b),
    600: Color(0xfffc153b),
    700: Color(0xfffc153b),
    800: Color(0xfffc153b),
    900: Color(0xfffc153b),
  });

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        outlinedButtonTheme: OutlinedButtonThemeData(
            style: OutlinedButton.styleFrom(
          side: BorderSide(color: primaryColor),
        )),
        elevatedButtonTheme: ElevatedButtonThemeData(
            style: ElevatedButton.styleFrom(
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
        )),
        appBarTheme: AppBarTheme(
            iconTheme: IconThemeData(color: primaryColor),
            shadowColor: Colors.transparent,
            backgroundColor: Colors.transparent),
        primaryColor: primaryColor,
        fontFamily: 'Montserrat',
        primarySwatch: primarySwatch,
      ),
      home: const ReportIncidentsView(),
    );
  }
}
