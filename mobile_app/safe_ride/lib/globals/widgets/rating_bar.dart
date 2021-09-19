import 'package:flutter/material.dart';

class RatingBar extends StatefulWidget {
  const RatingBar({Key? key}) : super(key: key);

  @override
  State<RatingBar> createState() => _RatingBarState();
}

class _RatingBarState extends State<RatingBar> {
   int index = -1;

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        IconButton(
          onPressed: (){
            setState(() {
              index = 1;
            });
          },
          icon: Icon(
            Icons.sentiment_very_dissatisfied,
            color: index == 0 ? Colors.red : Colors.grey,
            // size: screenSize.width * 0.15,
          ),
        ),
        Icon(
          Icons.sentiment_dissatisfied,
          color: index == 1 ? Colors.redAccent : Colors.grey,
          size: screenSize.width * 0.15,
        ),
        Icon(
          Icons.sentiment_neutral,
          color: index == 2 ? Colors.amber : Colors.grey,
          size: screenSize.width * 0.15,
        ),
        Icon(
          Icons.sentiment_satisfied,
          color: index == 3 ? Colors.lightGreen : Colors.grey,
          size: screenSize.width * 0.15,
        ),
        Icon(
          Icons.sentiment_very_satisfied,
          color: index == 4 ? Colors.green : Colors.grey,
          size: screenSize.width * 0.15,
        )
      ],
    );
  }
}
