# Pig Latin Translator WebPage
### Independent Project for Epicodus, 03.08.2017
### By **Jessica Robertson** & **Jasun Feddema**
## Description
This is a HTML document created for an independent project used as practice under the guidance of Epicodus.  It serves as a Pig Latin Translator page that takes English entries and transform them into Pig Latin.  No Spanish, please.  
## Setup
Clone the repository from GitHub, then open the index.html file in your browser.
## Ulesray Otay Ivelay Ybay
The program does nothing to non-alphabetical character since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3

The program will lowercase all alphabetical characters entered.
Example Input: Red
Example Output: red

The program does not nothing to entries with more than one consonant but zero vowels and alert to check spelling/ or "does not accept abbreviations."
Example: Dr
Example: Dr

The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay

The program recognizes Y as a consonant when it is the first letter of a word, and drops that letter, prepends it to "ay" and appends it to the end.
Example Input:   Yo
Example Output: Oyay

The program adds "ay" to the end of a multiple-character word beginning with a vowel.
Example Input:  or
Example Output:  oray

The program drops the consonant(x) on a multiple character word that only has one consonant before a vowel, and prepends it to the front of "ay" and appends the combination of "x+ay" to the end.
Example Input: Cat
Example Output:  Atcay

The program drops the consonants(xx) on a multiple character word that has more than one consonants before a vowel, and prepends it to the front of "ay" then appends the combination "xx+ay" to the end.
Example Input:  That, Crate, Ship
Example Output: Atthay, Atecray, Ipshay

The program recognizes that when a multi-char word begins with a Q consonant, followed by a U, the Q and U drop together, and are prepended to "ay" and the combo is appended to the end.
Example Input: Quit
Example Output: Itquay

The program recognizes that when a multi-char word begins with multiple consonants that include Q, followed by a U, the string of consecutive consonants plus the U are dropped from word, prepended to "ay", then the combo is appended to the end.
Example Input:  Squeal
Example Output:  Ealsquay


## Technology
HTML, CSS, Bootstrap, JavaScript, & JQuery
## Legal
Copyright (c) 2017 Jessica Robertson
This software is licensed under the GPL license.
