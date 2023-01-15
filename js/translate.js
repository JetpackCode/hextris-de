// Translations
//var language = 'en';
var language = 'de';

var strings = {
    'beginning_left_right_mobile': {
        'en': 'Tap the screen\'s left and right',
        'de': 'Tippe links und rechts aufs Display,'
    },
    'beginning_rotate_mobile': {
        'en': 'sides to rotate the hexagon',
        'de': 'um das Sechseck zu drehen'
    },
    'beginning_left_right_pc': {
        'en': 'Use the right and left arrow keys',
        'de': 'Verwende die rechte und linke Pfeiltaste,'
    },
    'beginning_rotate_pc': {
        'en': 'to rotate the hexagon',
        'de': 'um das Sechseck zu drehen'
    },
    'beginning_score': {
        'en': 'Match 3+ blocks to score!',
        'de': '3+ gleichfarbige Blöcke bringen Punkte!'
    },
    'game_over': {
        'en': 'GAME OVER',
        'de': 'SPIEL BEENDET'
    },
    'game_paused': {
        'en': 'Game Paused',
        'de': 'Spiel angehalten'
    },
    'high_score': {
        'en': 'HIGH SCORE',
        'de': 'REKORD'
    },
    'high_scores': {
        'en': 'HIGH SCORES',
        'de': 'REKORDE'
    },
    'instructions_title': {
        'en': 'HOW TO PLAY',
        'de': 'SO WIRD GESPIELT'
    },
    'instructions_goal': {
        'en': 'The goal of Hextris is to stop blocks from leaving the inside of the outer gray hexagon.',
        'de': 'Ziel von Hextris: Die gestapelten Blöcke dürfen nicht über das graue Sechseck hinausragen.'
    },
    'instructions_right_left_pc': {
        'en': 'Press the right and left arrow keys',
        'de': 'Drücke die rechte oder linke Pfeiltaste,'
    },
    'instructions_right_left_mobile': {
        'en': 'Tap the left and right sides of the screen',
        'de': 'Tippe auf die linke oder rechte Seite des Bildschirms,'
    },
    'instructions_rotate': {
        'en': 'to rotate the Hexagon.',
        'de': 'um das Sechseck zu drehen.'
    },
    'instructions_speedup_pc': {
        'en': 'Press the down arrow to speed up the block falling.',
        'de': 'Drücke die untere Pfeiltaste, damit der Block schneller fällt.'
    },
    'instructions_speedup_mobile': {
        'en': '', // speed up not possible on mobile devices
        'de': ''
    },
    'instructions_clear_blocks': {
        'en': 'Clear blocks and get points by making 3 or more blocks of the same color touch.',
        'de': 'Wenn sich mindestens drei Blöcke derselben Farbe berühren, werden diese entfernt und dein Punktestand steigt.'
    },
    'instructions_combo_streak': {
        'en': 'Time left before your combo streak disappears is indicated by',
        'de': 'Die verbleibende Zeit für die wiederholte Entfernung von Blöcken (Glückssträhne) wird von'
    },
    'instructions_the': {
        'en': 'the',
        'de': 'der'
    },
    'instructions_colored': {
        'en': 'colored',
        'de': 'farbigen'
    },
    'instructions_lines': {
        'en': 'lines',
        'de': 'Linie'
    },
    'instructions_on': {
        'en': 'on',
        'de': 'um'
    },
    'instructions_outer_hexagon': {
        'en': 'the outer hexagon.',
        'de': 'das Sechseck dargestellt.'
    },
    'info_playing': {
        'en': 'You are playing',
        'de': 'Du spielst gerade'
    },
    'info_by': {
        'en': 'by',
        'de': 'von'
    },
    'info_translated': {
        'en': 'The translation into German was made by',
        'de': 'Die Übersetzung ins Deutsche wurde durchgeführt von'
    },
    'info_license': {
        'en': 'License: GNU General Public License v3',
        'de': 'Lizenz: GNU General Public License v3'
    },
    'play_now': {
        'en': 'Play!',
        'de': 'Jetzt spielen!'
    },
    'press_enter': {
        'en': 'Press enter to start',
        'de': 'Zum Starten die Eingabetaste drücken'
    },
    'game_paused': {
        'en': 'Game Paused',
        'de': 'Spiel pausiert'
    }
};

function insert(string) {
    return strings[string][language];
}