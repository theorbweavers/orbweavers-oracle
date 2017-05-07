/* global require, module, console */
const dotenv = require('dotenv');
const watson = require('watson-developer-cloud');
const songData = {
  "songs": [
    {
      "title": "Last Dance",
      "recordingId": "590d63e29023bb7ae02a43c2",
      "tones": {
        "anger": {
          "score": 0.141984
        },
        "disgust": {
          "score": 0.137486
        },
        "fear": {
          "score": 0.174567
        },
        "joy": {
          "score": 0.196802
        },
        "sadness": {
          "score": 0.272066
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "tones": {
        "anger": {
          "score": 0.594815
        },
        "disgust": {
          "score": 0.192604
        },
        "fear": {
          "score": 0.111002
        },
        "joy": {
          "score": 0.177522
        },
        "sadness": {
          "score": 0.530082
        }
      }
    },
    {
      "title": "Rise Above",
      "recordingId": "590d63e29023bb7ae02a43cf",
      "tones": {
        "anger": {
          "score": 0.044335
        },
        "disgust": {
          "score": 0.287513
        },
        "fear": {
          "score": 0.415824
        },
        "joy": {
          "score": 0.014258
        },
        "sadness": {
          "score": 0.349381
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "tones": {
        "anger": {
          "score": 0.027822
        },
        "disgust": {
          "score": 0.103936
        },
        "fear": {
          "score": 0.076911
        },
        "joy": {
          "score": 0.356096
        },
        "sadness": {
          "score": 0.276766
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "tones": {
        "anger": {
          "score": 0.157761
        },
        "disgust": {
          "score": 0.166233
        },
        "fear": {
          "score": 0.271821
        },
        "joy": {
          "score": 0.000621
        },
        "sadness": {
          "score": 0.513016
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "tones": {
        "anger": {
          "score": 0.137384
        },
        "disgust": {
          "score": 0.12878
        },
        "fear": {
          "score": 0.206223
        },
        "joy": {
          "score": 0.443983
        },
        "sadness": {
          "score": 0.628393
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "tones": {
        "anger": {
          "score": 0.122141
        },
        "disgust": {
          "score": 0.497677
        },
        "fear": {
          "score": 0.16149
        },
        "joy": {
          "score": 0.157922
        },
        "sadness": {
          "score": 0.509293
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "tones": {
        "anger": {
          "score": 0.214692
        },
        "disgust": {
          "score": 0.427533
        },
        "fear": {
          "score": 0.048569
        },
        "joy": {
          "score": 0.066132
        },
        "sadness": {
          "score": 0.301558
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "tones": {
        "anger": {
          "score": 0.152659
        },
        "disgust": {
          "score": 0.301851
        },
        "fear": {
          "score": 0.256821
        },
        "joy": {
          "score": 0.016987
        },
        "sadness": {
          "score": 0.387244
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "tones": {
        "anger": {
          "score": 0.380673
        },
        "disgust": {
          "score": 0.134416
        },
        "fear": {
          "score": 0.338934
        },
        "joy": {
          "score": 0.014078
        },
        "sadness": {
          "score": 0.242439
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "tones": {
        "anger": {
          "score": 0.072221
        },
        "disgust": {
          "score": 0.205734
        },
        "fear": {
          "score": 0.072979
        },
        "joy": {
          "score": 0.425057
        },
        "sadness": {
          "score": 0.097961
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "tones": {
        "anger": {
          "score": 0.477329
        },
        "disgust": {
          "score": 0.140679
        },
        "fear": {
          "score": 0.159456
        },
        "joy": {
          "score": 0.129876
        },
        "sadness": {
          "score": 0.557145
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "tones": {
        "anger": {
          "score": 0.077593
        },
        "disgust": {
          "score": 0.113296
        },
        "fear": {
          "score": 0.130361
        },
        "joy": {
          "score": 0.567138
        },
        "sadness": {
          "score": 0.679074
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "tones": {
        "anger": {
          "score": 0.240079
        },
        "disgust": {
          "score": 0.401665
        },
        "fear": {
          "score": 0.176431
        },
        "joy": {
          "score": 0.003107
        },
        "sadness": {
          "score": 0.327716
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "tones": {
        "anger": {
          "score": 0.076133
        },
        "disgust": {
          "score": 0.118273
        },
        "fear": {
          "score": 0.177852
        },
        "joy": {
          "score": 0.177712
        },
        "sadness": {
          "score": 0.615487
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "tones": {
        "anger": {
          "score": 0.09211
        },
        "disgust": {
          "score": 0.016509
        },
        "fear": {
          "score": 0.160626
        },
        "joy": {
          "score": 0.006104
        },
        "sadness": {
          "score": 0.761421
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "tones": {
        "anger": {
          "score": 0.100373
        },
        "disgust": {
          "score": 0.13276
        },
        "fear": {
          "score": 0.240699
        },
        "joy": {
          "score": 0.171675
        },
        "sadness": {
          "score": 0.552498
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "tones": {
        "anger": {
          "score": 0.126743
        },
        "disgust": {
          "score": 0.159345
        },
        "fear": {
          "score": 0.57904
        },
        "joy": {
          "score": 0.089296
        },
        "sadness": {
          "score": 0.56857
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "tones": {
        "anger": {
          "score": 0.130968
        },
        "disgust": {
          "score": 0.122189
        },
        "fear": {
          "score": 0.236668
        },
        "joy": {
          "score": 0.502028
        },
        "sadness": {
          "score": 0.486751
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "tones": {
        "anger": {
          "score": 0.137608
        },
        "disgust": {
          "score": 0.135213
        },
        "fear": {
          "score": 0.165822
        },
        "joy": {
          "score": 0.211291
        },
        "sadness": {
          "score": 0.272503
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "tones": {
        "anger": {
          "score": 0.182492
        },
        "disgust": {
          "score": 0.155078
        },
        "fear": {
          "score": 0.264546
        },
        "joy": {
          "score": 0.058208
        },
        "sadness": {
          "score": 0.503028
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "tones": {
        "anger": {
          "score": 0.258269
        },
        "disgust": {
          "score": 0.056176
        },
        "fear": {
          "score": 0.373326
        },
        "joy": {
          "score": 0.010649
        },
        "sadness": {
          "score": 0.386559
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "tones": {
        "anger": {
          "score": 0.118676
        },
        "disgust": {
          "score": 0.469894
        },
        "fear": {
          "score": 0.540329
        },
        "joy": {
          "score": 0.489436
        },
        "sadness": {
          "score": 0.651058
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "tones": {
        "anger": {
          "score": 0.197247
        },
        "disgust": {
          "score": 0.180892
        },
        "fear": {
          "score": 0.224541
        },
        "joy": {
          "score": 0.131565
        },
        "sadness": {
          "score": 0.264445
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "tones": {
        "anger": {
          "score": 0.153491
        },
        "disgust": {
          "score": 0.093687
        },
        "fear": {
          "score": 0.548129
        },
        "joy": {
          "score": 0.151256
        },
        "sadness": {
          "score": 0.497942
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "tones": {
        "anger": {
          "score": 0.576113
        },
        "disgust": {
          "score": 0.003868
        },
        "fear": {
          "score": 0.145473
        },
        "joy": {
          "score": 0.060194
        },
        "sadness": {
          "score": 0.217264
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "tones": {
        "anger": {
          "score": 0.01138
        },
        "disgust": {
          "score": 0.299232
        },
        "fear": {
          "score": 0.144542
        },
        "joy": {
          "score": 0.005225
        },
        "sadness": {
          "score": 0.634154
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "tones": {
        "anger": {
          "score": 0.137931
        },
        "disgust": {
          "score": 0.183686
        },
        "fear": {
          "score": 0.205109
        },
        "joy": {
          "score": 0.162076
        },
        "sadness": {
          "score": 0.51292
        }
      }
    }
  ],
  "sentences": [
    {
      "title": "Last Dance",
      "recordingId": "590d63e29023bb7ae02a43c2",
      "text": "Get your bodies on the dance floor; ",
      "tones": {
        "anger": {
          "score": 0.095761
        },
        "disgust": {
          "score": 0.159186
        },
        "fear": {
          "score": 0.08369
        },
        "joy": {
          "score": 0.479288
        },
        "sadness": {
          "score": 0.054987
        }
      }
    },
    {
      "title": "Last Dance",
      "recordingId": "590d63e29023bb7ae02a43c2",
      "text": "Bodies on the floor.",
      "tones": {
        "anger": {
          "score": 0.268473
        },
        "disgust": {
          "score": 0.502036
        },
        "fear": {
          "score": 0.139252
        },
        "joy": {
          "score": 0.062669
        },
        "sadness": {
          "score": 0.113905
        }
      }
    },
    {
      "title": "Last Dance",
      "recordingId": "590d63e29023bb7ae02a43c2",
      "text": "Get your bodies on the dance floor.",
      "tones": {
        "anger": {
          "score": 0.095761
        },
        "disgust": {
          "score": 0.159186
        },
        "fear": {
          "score": 0.08369
        },
        "joy": {
          "score": 0.479288
        },
        "sadness": {
          "score": 0.054987
        }
      }
    },
    {
      "title": "Last Dance",
      "recordingId": "590d63e29023bb7ae02a43c2",
      "text": "Down on the floor, ",
      "tones": {
        "anger": {
          "score": 0.46614
        },
        "disgust": {
          "score": 0.281087
        },
        "fear": {
          "score": 0.107323
        },
        "joy": {
          "score": 0.051898
        },
        "sadness": {
          "score": 0.172352
        }
      }
    },
    {
      "title": "Last Dance",
      "recordingId": "590d63e29023bb7ae02a43c2",
      "text": "Say a prayer for the ones who've fallen before.",
      "tones": {
        "anger": {
          "score": 0.061483
        },
        "disgust": {
          "score": 0.024283
        },
        "fear": {
          "score": 0.301897
        },
        "joy": {
          "score": 0.008515
        },
        "sadness": {
          "score": 0.650445
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "They're taking her down tonight.",
      "tones": {
        "anger": {
          "score": 0.054978
        },
        "disgust": {
          "score": 0.11886
        },
        "fear": {
          "score": 0.112493
        },
        "joy": {
          "score": 0.32539
        },
        "sadness": {
          "score": 0.247218
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "Each star has lost its light, ",
      "tones": {
        "anger": {
          "score": 0.025796
        },
        "disgust": {
          "score": 0.103293
        },
        "fear": {
          "score": 0.157079
        },
        "joy": {
          "score": 0.051571
        },
        "sadness": {
          "score": 0.661227
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "You wouldn't believe the sight.",
      "tones": {
        "anger": {
          "score": 0.101543
        },
        "disgust": {
          "score": 0.412902
        },
        "fear": {
          "score": 0.11959
        },
        "joy": {
          "score": 0.044523
        },
        "sadness": {
          "score": 0.396707
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "All hands on deck tonight.",
      "tones": {
        "anger": {
          "score": 0.011947
        },
        "disgust": {
          "score": 0.175546
        },
        "fear": {
          "score": 0.186405
        },
        "joy": {
          "score": 0.381367
        },
        "sadness": {
          "score": 0.116774
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "The squall is rolling in, ",
      "tones": {
        "anger": {
          "score": 0.143193
        },
        "disgust": {
          "score": 0.127121
        },
        "fear": {
          "score": 0.29137
        },
        "joy": {
          "score": 0.051434
        },
        "sadness": {
          "score": 0.42581
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "Southern skies growing dim.",
      "tones": {
        "anger": {
          "score": 0.061328
        },
        "disgust": {
          "score": 0.137241
        },
        "fear": {
          "score": 0.051508
        },
        "joy": {
          "score": 0.479349
        },
        "sadness": {
          "score": 0.127111
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "One stands against the prow, ",
      "tones": {
        "anger": {
          "score": 0.244716
        },
        "disgust": {
          "score": 0.291692
        },
        "fear": {
          "score": 0.078014
        },
        "joy": {
          "score": 0.14481
        },
        "sadness": {
          "score": 0.22573
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "All can be questioned now.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0.9
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "Is this all you stowed away - ",
      "tones": {
        "anger": {
          "score": 0.104133
        },
        "disgust": {
          "score": 0.237626
        },
        "fear": {
          "score": 0.220406
        },
        "joy": {
          "score": 0.014022
        },
        "sadness": {
          "score": 0.519771
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "The fury and the fray, ",
      "tones": {
        "anger": {
          "score": 0.713686
        },
        "disgust": {
          "score": 0.023592
        },
        "fear": {
          "score": 0.05841
        },
        "joy": {
          "score": 0.093067
        },
        "sadness": {
          "score": 0.070304
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "Is that all the sea can say?",
      "tones": {
        "anger": {
          "score": 0.264958
        },
        "disgust": {
          "score": 0.22976
        },
        "fear": {
          "score": 0.08625
        },
        "joy": {
          "score": 0.090123
        },
        "sadness": {
          "score": 0.345584
        }
      }
    },
    {
      "title": "Admira",
      "recordingId": "590d63e29023bb7ae02a43bd",
      "text": "Is that all the sea can say.",
      "tones": {
        "anger": {
          "score": 0.237848
        },
        "disgust": {
          "score": 0.20671
        },
        "fear": {
          "score": 0.080279
        },
        "joy": {
          "score": 0.127439
        },
        "sadness": {
          "score": 0.326407
        }
      }
    },
    {
      "title": "Rise Above",
      "recordingId": "590d63e29023bb7ae02a43cf",
      "text": "On all but for the highest peaks",
      "tones": {
        "anger": {
          "score": 0.152026
        },
        "disgust": {
          "score": 0.12651
        },
        "fear": {
          "score": 0.224709
        },
        "joy": {
          "score": 0.122168
        },
        "sadness": {
          "score": 0.345849
        }
      }
    },
    {
      "title": "Rise Above",
      "recordingId": "590d63e29023bb7ae02a43cf",
      "text": "The snow will melt, the ice will speak,",
      "tones": {
        "anger": {
          "score": 0.151176
        },
        "disgust": {
          "score": 0.172642
        },
        "fear": {
          "score": 0.138991
        },
        "joy": {
          "score": 0.158777
        },
        "sadness": {
          "score": 0.326911
        }
      }
    },
    {
      "title": "Rise Above",
      "recordingId": "590d63e29023bb7ae02a43cf",
      "text": "Fractured face, tears and rain,",
      "tones": {
        "anger": {
          "score": 0.007714
        },
        "disgust": {
          "score": 0.067388
        },
        "fear": {
          "score": 0.226462
        },
        "joy": {
          "score": 0.001538
        },
        "sadness": {
          "score": 0.749534
        }
      }
    },
    {
      "title": "Rise Above",
      "recordingId": "590d63e29023bb7ae02a43cf",
      "text": "As white begins to show the stain.",
      "tones": {
        "anger": {
          "score": 0.071624
        },
        "disgust": {
          "score": 0.42828
        },
        "fear": {
          "score": 0.202592
        },
        "joy": {
          "score": 0.132595
        },
        "sadness": {
          "score": 0.171189
        }
      }
    },
    {
      "title": "Rise Above",
      "recordingId": "590d63e29023bb7ae02a43cf",
      "text": "On all but for the highest peaks,",
      "tones": {
        "anger": {
          "score": 0.152266
        },
        "disgust": {
          "score": 0.124525
        },
        "fear": {
          "score": 0.22745
        },
        "joy": {
          "score": 0.120941
        },
        "sadness": {
          "score": 0.346763
        }
      }
    },
    {
      "title": "Rise Above",
      "recordingId": "590d63e29023bb7ae02a43cf",
      "text": "The tide will blanket cliffs to sleep,",
      "tones": {
        "anger": {
          "score": 0.040288
        },
        "disgust": {
          "score": 0.097153
        },
        "fear": {
          "score": 0.27849
        },
        "joy": {
          "score": 0.202487
        },
        "sadness": {
          "score": 0.286458
        }
      }
    },
    {
      "title": "Rise Above",
      "recordingId": "590d63e29023bb7ae02a43cf",
      "text": "Beacons call to warn ahead,",
      "tones": {
        "anger": {
          "score": 0.465121
        },
        "disgust": {
          "score": 0.163519
        },
        "fear": {
          "score": 0.171431
        },
        "joy": {
          "score": 0.056876
        },
        "sadness": {
          "score": 0.1995
        }
      }
    },
    {
      "title": "Rise Above",
      "recordingId": "590d63e29023bb7ae02a43cf",
      "text": "Sirens take you to the end.",
      "tones": {
        "anger": {
          "score": 0.174274
        },
        "disgust": {
          "score": 0.183863
        },
        "fear": {
          "score": 0.320469
        },
        "joy": {
          "score": 0.029453
        },
        "sadness": {
          "score": 0.376252
        }
      }
    },
    {
      "title": "Rise Above",
      "recordingId": "590d63e29023bb7ae02a43cf",
      "text": "Rise above.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0.9
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "Merri, your water flows into the quarry",
      "tones": {
        "anger": {
          "score": 0.096707
        },
        "disgust": {
          "score": 0.475754
        },
        "fear": {
          "score": 0.182904
        },
        "joy": {
          "score": 0.169463
        },
        "sadness": {
          "score": 0.063816
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "Where bluestone once lay below,",
      "tones": {
        "anger": {
          "score": 0.057738
        },
        "disgust": {
          "score": 0.007854
        },
        "fear": {
          "score": 0.390231
        },
        "joy": {
          "score": 0.221392
        },
        "sadness": {
          "score": 0.203137
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "But now the gutters are paved with your heart,",
      "tones": {
        "anger": {
          "score": 0.01961
        },
        "disgust": {
          "score": 0.074469
        },
        "fear": {
          "score": 0.081668
        },
        "joy": {
          "score": 0.283198
        },
        "sadness": {
          "score": 0.384127
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "And the hole is filled with clay",
      "tones": {
        "anger": {
          "score": 0.179014
        },
        "disgust": {
          "score": 0.187733
        },
        "fear": {
          "score": 0.124381
        },
        "joy": {
          "score": 0.023561
        },
        "sadness": {
          "score": 0.556312
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "And fallen homes.",
      "tones": {
        "anger": {
          "score": 0.104722
        },
        "disgust": {
          "score": 0.09982
        },
        "fear": {
          "score": 0.193484
        },
        "joy": {
          "score": 0.194982
        },
        "sadness": {
          "score": 0.317292
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "Evening, when we ride into the valley,",
      "tones": {
        "anger": {
          "score": 0.088761
        },
        "disgust": {
          "score": 0.059312
        },
        "fear": {
          "score": 0.082745
        },
        "joy": {
          "score": 0.298233
        },
        "sadness": {
          "score": 0.317857
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "Cool air and tannin sighs,",
      "tones": {
        "anger": {
          "score": 0.075656
        },
        "disgust": {
          "score": 0.076241
        },
        "fear": {
          "score": 0.067539
        },
        "joy": {
          "score": 0.238244
        },
        "sadness": {
          "score": 0.405887
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "Allocasuarinas whisper the same song,",
      "tones": {
        "anger": {
          "score": 0.079679
        },
        "disgust": {
          "score": 0.092175
        },
        "fear": {
          "score": 0.094626
        },
        "joy": {
          "score": 0.348595
        },
        "sadness": {
          "score": 0.23502
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "As the water follows home,",
      "tones": {
        "anger": {
          "score": 0.100073
        },
        "disgust": {
          "score": 0.28713
        },
        "fear": {
          "score": 0.218877
        },
        "joy": {
          "score": 0.159641
        },
        "sadness": {
          "score": 0.209934
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "And so do I.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "Down past the convent,",
      "tones": {
        "anger": {
          "score": 0.220266
        },
        "disgust": {
          "score": 0.078992
        },
        "fear": {
          "score": 0.194029
        },
        "joy": {
          "score": 0.11441
        },
        "sadness": {
          "score": 0.360637
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "And under river,",
      "tones": {
        "anger": {
          "score": 0.145572
        },
        "disgust": {
          "score": 0.131899
        },
        "fear": {
          "score": 0.181216
        },
        "joy": {
          "score": 0.183418
        },
        "sadness": {
          "score": 0.28712
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "And through the headland,",
      "tones": {
        "anger": {
          "score": 0.164431
        },
        "disgust": {
          "score": 0.122509
        },
        "fear": {
          "score": 0.170722
        },
        "joy": {
          "score": 0.174629
        },
        "sadness": {
          "score": 0.300138
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "And out to sea;",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "Allocasuarinas whisper the same song:",
      "tones": {
        "anger": {
          "score": 0.084243
        },
        "disgust": {
          "score": 0.085142
        },
        "fear": {
          "score": 0.093961
        },
        "joy": {
          "score": 0.355108
        },
        "sadness": {
          "score": 0.229673
        }
      }
    },
    {
      "title": "Merri",
      "recordingId": "590d63e29023bb7ae02a43c5",
      "text": "I will always follow you.",
      "tones": {
        "anger": {
          "score": 0.078204
        },
        "disgust": {
          "score": 0.032786
        },
        "fear": {
          "score": 0.076023
        },
        "joy": {
          "score": 0.339336
        },
        "sadness": {
          "score": 0.303421
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "May I confess to you,",
      "tones": {
        "anger": {
          "score": 0.17977
        },
        "disgust": {
          "score": 0.089805
        },
        "fear": {
          "score": 0.331261
        },
        "joy": {
          "score": 0.110422
        },
        "sadness": {
          "score": 0.271877
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "I'm not the boy you thought you knew,",
      "tones": {
        "anger": {
          "score": 0.123585
        },
        "disgust": {
          "score": 0.205096
        },
        "fear": {
          "score": 0.143158
        },
        "joy": {
          "score": 0.070026
        },
        "sadness": {
          "score": 0.478734
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "I'm tired and confused,",
      "tones": {
        "anger": {
          "score": 0.071881
        },
        "disgust": {
          "score": 0.010989
        },
        "fear": {
          "score": 0.251616
        },
        "joy": {
          "score": 0.00275
        },
        "sadness": {
          "score": 0.709562
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "I never saw the change, ",
      "tones": {
        "anger": {
          "score": 0.341109
        },
        "disgust": {
          "score": 0.068054
        },
        "fear": {
          "score": 0.098993
        },
        "joy": {
          "score": 0.180225
        },
        "sadness": {
          "score": 0.233142
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "I never knew the pain I put you through.",
      "tones": {
        "anger": {
          "score": 0.073536
        },
        "disgust": {
          "score": 0.061155
        },
        "fear": {
          "score": 0.290284
        },
        "joy": {
          "score": 0.000072
        },
        "sadness": {
          "score": 0.645131
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "May I confess to you,",
      "tones": {
        "anger": {
          "score": 0.17977
        },
        "disgust": {
          "score": 0.089805
        },
        "fear": {
          "score": 0.331261
        },
        "joy": {
          "score": 0.110422
        },
        "sadness": {
          "score": 0.271877
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "I'm not the girl you thought you knew,",
      "tones": {
        "anger": {
          "score": 0.054196
        },
        "disgust": {
          "score": 0.233544
        },
        "fear": {
          "score": 0.187127
        },
        "joy": {
          "score": 0.03692
        },
        "sadness": {
          "score": 0.544412
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "But maybe,",
      "tones": {
        "anger": {
          "score": 0.181305
        },
        "disgust": {
          "score": 0.055653
        },
        "fear": {
          "score": 0.367089
        },
        "joy": {
          "score": 0.039208
        },
        "sadness": {
          "score": 0.398671
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "Over time,",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "We'll watch the waters rise,",
      "tones": {
        "anger": {
          "score": 0.174292
        },
        "disgust": {
          "score": 0.511847
        },
        "fear": {
          "score": 0.139052
        },
        "joy": {
          "score": 0.102684
        },
        "sadness": {
          "score": 0.112477
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "And sedimentary gardens grow anew.",
      "tones": {
        "anger": {
          "score": 0.079048
        },
        "disgust": {
          "score": 0.257929
        },
        "fear": {
          "score": 0.060724
        },
        "joy": {
          "score": 0.363399
        },
        "sadness": {
          "score": 0.123476
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "May I confess to you,",
      "tones": {
        "anger": {
          "score": 0.17977
        },
        "disgust": {
          "score": 0.089805
        },
        "fear": {
          "score": 0.331261
        },
        "joy": {
          "score": 0.110422
        },
        "sadness": {
          "score": 0.271877
        }
      }
    },
    {
      "title": "Confessions",
      "recordingId": "590d63e29023bb7ae02a43c8",
      "text": "I'm not the one you thought you knew.",
      "tones": {
        "anger": {
          "score": 0.093064
        },
        "disgust": {
          "score": 0.156452
        },
        "fear": {
          "score": 0.18877
        },
        "joy": {
          "score": 0.016363
        },
        "sadness": {
          "score": 0.613839
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "A matchbox ",
      "tones": {
        "anger": {
          "score": 0.180511
        },
        "disgust": {
          "score": 0.116511
        },
        "fear": {
          "score": 0.179039
        },
        "joy": {
          "score": 0.151827
        },
        "sadness": {
          "score": 0.319084
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "Full of needles ",
      "tones": {
        "anger": {
          "score": 0.110594
        },
        "disgust": {
          "score": 0.12182
        },
        "fear": {
          "score": 0.239428
        },
        "joy": {
          "score": 0.240838
        },
        "sadness": {
          "score": 0.191469
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "For a gramophone player, ",
      "tones": {
        "anger": {
          "score": 0.168372
        },
        "disgust": {
          "score": 0.400739
        },
        "fear": {
          "score": 0.182947
        },
        "joy": {
          "score": 0.082358
        },
        "sadness": {
          "score": 0.220191
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "Is sitting right here - on my bedside table.",
      "tones": {
        "anger": {
          "score": 0.244447
        },
        "disgust": {
          "score": 0.25853
        },
        "fear": {
          "score": 0.07208
        },
        "joy": {
          "score": 0.204236
        },
        "sadness": {
          "score": 0.166413
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "Some are rusted, some gleam, ",
      "tones": {
        "anger": {
          "score": 0.140942
        },
        "disgust": {
          "score": 0.115087
        },
        "fear": {
          "score": 0.156983
        },
        "joy": {
          "score": 0.213997
        },
        "sadness": {
          "score": 0.279807
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "In memory of your music machine, ",
      "tones": {
        "anger": {
          "score": 0.070168
        },
        "disgust": {
          "score": 0.014989
        },
        "fear": {
          "score": 0.026886
        },
        "joy": {
          "score": 0.359804
        },
        "sadness": {
          "score": 0.340977
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "In memory of the dancing halls ",
      "tones": {
        "anger": {
          "score": 0.104481
        },
        "disgust": {
          "score": 0.058385
        },
        "fear": {
          "score": 0.046693
        },
        "joy": {
          "score": 0.180918
        },
        "sadness": {
          "score": 0.493169
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "In memory of the handsome boys.",
      "tones": {
        "anger": {
          "score": 0.037228
        },
        "disgust": {
          "score": 0.013921
        },
        "fear": {
          "score": 0.0076
        },
        "joy": {
          "score": 0.618376
        },
        "sadness": {
          "score": 0.161586
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "Oh where could that player be?",
      "tones": {
        "anger": {
          "score": 0.290187
        },
        "disgust": {
          "score": 0.199636
        },
        "fear": {
          "score": 0.405001
        },
        "joy": {
          "score": 0.009225
        },
        "sadness": {
          "score": 0.22644
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "You'll find the needles here with me.",
      "tones": {
        "anger": {
          "score": 0.080579
        },
        "disgust": {
          "score": 0.117092
        },
        "fear": {
          "score": 0.278314
        },
        "joy": {
          "score": 0.292472
        },
        "sadness": {
          "score": 0.119675
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "A shoebox ",
      "tones": {
        "anger": {
          "score": 0.180511
        },
        "disgust": {
          "score": 0.116511
        },
        "fear": {
          "score": 0.179039
        },
        "joy": {
          "score": 0.151827
        },
        "sadness": {
          "score": 0.319084
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "Full of letters ",
      "tones": {
        "anger": {
          "score": 0.041471
        },
        "disgust": {
          "score": 0.041684
        },
        "fear": {
          "score": 0.151587
        },
        "joy": {
          "score": 0.141684
        },
        "sadness": {
          "score": 0.53066
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "Is in my dresser drawer, ",
      "tones": {
        "anger": {
          "score": 0.165565
        },
        "disgust": {
          "score": 0.123453
        },
        "fear": {
          "score": 0.171331
        },
        "joy": {
          "score": 0.174172
        },
        "sadness": {
          "score": 0.298641
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "Sometimes I spread them all out onto the floor.",
      "tones": {
        "anger": {
          "score": 0.319417
        },
        "disgust": {
          "score": 0.103906
        },
        "fear": {
          "score": 0.230571
        },
        "joy": {
          "score": 0.043749
        },
        "sadness": {
          "score": 0.356067
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "And then I fall into stillness and furrow my brow, ",
      "tones": {
        "anger": {
          "score": 0.04265
        },
        "disgust": {
          "score": 0.053157
        },
        "fear": {
          "score": 0.559416
        },
        "joy": {
          "score": 0.027444
        },
        "sadness": {
          "score": 0.356086
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "In memory of a drive out of town, ",
      "tones": {
        "anger": {
          "score": 0.053825
        },
        "disgust": {
          "score": 0.018952
        },
        "fear": {
          "score": 0.060795
        },
        "joy": {
          "score": 0.271933
        },
        "sadness": {
          "score": 0.425481
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "In memory of a road that lead south, ",
      "tones": {
        "anger": {
          "score": 0.029796
        },
        "disgust": {
          "score": 0.026969
        },
        "fear": {
          "score": 0.104557
        },
        "joy": {
          "score": 0.095831
        },
        "sadness": {
          "score": 0.670507
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "In memory of the voice ",
      "tones": {
        "anger": {
          "score": 0.05513
        },
        "disgust": {
          "score": 0.008834
        },
        "fear": {
          "score": 0.059873
        },
        "joy": {
          "score": 0.144903
        },
        "sadness": {
          "score": 0.61428
        }
      }
    },
    {
      "title": "My Needle",
      "recordingId": "590d63e29023bb7ae02a43bb",
      "text": "I don't have now.",
      "tones": {
        "anger": {
          "score": 0.18935
        },
        "disgust": {
          "score": 0.116763
        },
        "fear": {
          "score": 0.185587
        },
        "joy": {
          "score": 0.140094
        },
        "sadness": {
          "score": 0.324613
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "They said 'Do not play in the poison garden',",
      "tones": {
        "anger": {
          "score": 0.109463
        },
        "disgust": {
          "score": 0.349866
        },
        "fear": {
          "score": 0.186051
        },
        "joy": {
          "score": 0.011412
        },
        "sadness": {
          "score": 0.45944
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "Foxgloves sway, in the poison garden,",
      "tones": {
        "anger": {
          "score": 0.100482
        },
        "disgust": {
          "score": 0.279087
        },
        "fear": {
          "score": 0.320105
        },
        "joy": {
          "score": 0.117174
        },
        "sadness": {
          "score": 0.1952
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "Melia berries fall like marbles,",
      "tones": {
        "anger": {
          "score": 0.076356
        },
        "disgust": {
          "score": 0.127581
        },
        "fear": {
          "score": 0.309704
        },
        "joy": {
          "score": 0.078616
        },
        "sadness": {
          "score": 0.411905
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "Now crushed and broken as the ground there hardens.",
      "tones": {
        "anger": {
          "score": 0.15989
        },
        "disgust": {
          "score": 0.098855
        },
        "fear": {
          "score": 0.125539
        },
        "joy": {
          "score": 0.007973
        },
        "sadness": {
          "score": 0.67223
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "When I was younger, I used to marvel",
      "tones": {
        "anger": {
          "score": 0.103795
        },
        "disgust": {
          "score": 0.1574
        },
        "fear": {
          "score": 0.142203
        },
        "joy": {
          "score": 0.214926
        },
        "sadness": {
          "score": 0.292109
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "When they would warn me about the poison garden.",
      "tones": {
        "anger": {
          "score": 0.222871
        },
        "disgust": {
          "score": 0.562531
        },
        "fear": {
          "score": 0.181043
        },
        "joy": {
          "score": 0.02029
        },
        "sadness": {
          "score": 0.147753
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "Belladonna, sweet deadly nightshade,",
      "tones": {
        "anger": {
          "score": 0.157073
        },
        "disgust": {
          "score": 0.120634
        },
        "fear": {
          "score": 0.083992
        },
        "joy": {
          "score": 0.417516
        },
        "sadness": {
          "score": 0.086948
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "Oleander, you make my heart break.",
      "tones": {
        "anger": {
          "score": 0.086125
        },
        "disgust": {
          "score": 0.02188
        },
        "fear": {
          "score": 0.055139
        },
        "joy": {
          "score": 0.069418
        },
        "sadness": {
          "score": 0.718533
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "Red angel trumpets, pendulous glory,",
      "tones": {
        "anger": {
          "score": 0.083329
        },
        "disgust": {
          "score": 0.063568
        },
        "fear": {
          "score": 0.139239
        },
        "joy": {
          "score": 0.343871
        },
        "sadness": {
          "score": 0.219099
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "Pupils dilate with a midnight story.",
      "tones": {
        "anger": {
          "score": 0.120997
        },
        "disgust": {
          "score": 0.095844
        },
        "fear": {
          "score": 0.224373
        },
        "joy": {
          "score": 0.272736
        },
        "sadness": {
          "score": 0.173345
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "Oh ancient yew tree, laden with berries,",
      "tones": {
        "anger": {
          "score": 0.219478
        },
        "disgust": {
          "score": 0.1187
        },
        "fear": {
          "score": 0.400026
        },
        "joy": {
          "score": 0.06684
        },
        "sadness": {
          "score": 0.233044
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "Medical pardon, from the poison garden.",
      "tones": {
        "anger": {
          "score": 0.057432
        },
        "disgust": {
          "score": 0.650206
        },
        "fear": {
          "score": 0.081619
        },
        "joy": {
          "score": 0.030313
        },
        "sadness": {
          "score": 0.261968
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "And as I shelter, beneath this bower,",
      "tones": {
        "anger": {
          "score": 0.16926
        },
        "disgust": {
          "score": 0.142742
        },
        "fear": {
          "score": 0.286939
        },
        "joy": {
          "score": 0.106349
        },
        "sadness": {
          "score": 0.290818
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "Beauty and power in the poison garden.",
      "tones": {
        "anger": {
          "score": 0.040328
        },
        "disgust": {
          "score": 0.179472
        },
        "fear": {
          "score": 0.035826
        },
        "joy": {
          "score": 0.464532
        },
        "sadness": {
          "score": 0.139296
        }
      }
    },
    {
      "title": "Poison Garden",
      "recordingId": "590d63e29023bb7ae02a43d5",
      "text": "I?ll take my hours in the poison garden.",
      "tones": {
        "anger": {
          "score": 0.239993
        },
        "disgust": {
          "score": 0.305503
        },
        "fear": {
          "score": 0.19837
        },
        "joy": {
          "score": 0.099471
        },
        "sadness": {
          "score": 0.193263
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "There is a vine ",
      "tones": {
        "anger": {
          "score": 0.125133
        },
        "disgust": {
          "score": 0.521375
        },
        "fear": {
          "score": 0.053431
        },
        "joy": {
          "score": 0.041055
        },
        "sadness": {
          "score": 0.338206
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "Far older than I ",
      "tones": {
        "anger": {
          "score": 0.121888
        },
        "disgust": {
          "score": 0.326183
        },
        "fear": {
          "score": 0.124327
        },
        "joy": {
          "score": 0.094723
        },
        "sadness": {
          "score": 0.352356
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "That grows on our fence to the west ",
      "tones": {
        "anger": {
          "score": 0.185635
        },
        "disgust": {
          "score": 0.216462
        },
        "fear": {
          "score": 0.061729
        },
        "joy": {
          "score": 0.224327
        },
        "sadness": {
          "score": 0.231923
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "When I am gone ",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.6875
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "I hope that it grows ",
      "tones": {
        "anger": {
          "score": 0.187423
        },
        "disgust": {
          "score": 0.515092
        },
        "fear": {
          "score": 0.082343
        },
        "joy": {
          "score": 0.085912
        },
        "sadness": {
          "score": 0.17705
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "To cover ",
      "tones": {
        "anger": {
          "score": 0.110299
        },
        "disgust": {
          "score": 0.19919
        },
        "fear": {
          "score": 0.350488
        },
        "joy": {
          "score": 0.101699
        },
        "sadness": {
          "score": 0.249065
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "All that I ",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "Leave",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.9
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "V is for Vine ",
      "tones": {
        "anger": {
          "score": 0.1353
        },
        "disgust": {
          "score": 0.509048
        },
        "fear": {
          "score": 0.056307
        },
        "joy": {
          "score": 0.036744
        },
        "sadness": {
          "score": 0.348151
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "V is for Life ",
      "tones": {
        "anger": {
          "score": 0.020498
        },
        "disgust": {
          "score": 0.021623
        },
        "fear": {
          "score": 0.022672
        },
        "joy": {
          "score": 0.551821
        },
        "sadness": {
          "score": 0.20686
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "V is for Virtue and Vice ",
      "tones": {
        "anger": {
          "score": 0.18952
        },
        "disgust": {
          "score": 0.13711
        },
        "fear": {
          "score": 0.140882
        },
        "joy": {
          "score": 0.160744
        },
        "sadness": {
          "score": 0.31509
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "When I am gone ",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.6875
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "I hope that it grows ",
      "tones": {
        "anger": {
          "score": 0.187423
        },
        "disgust": {
          "score": 0.515092
        },
        "fear": {
          "score": 0.082343
        },
        "joy": {
          "score": 0.085912
        },
        "sadness": {
          "score": 0.17705
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "To cover ",
      "tones": {
        "anger": {
          "score": 0.110299
        },
        "disgust": {
          "score": 0.19919
        },
        "fear": {
          "score": 0.350488
        },
        "joy": {
          "score": 0.101699
        },
        "sadness": {
          "score": 0.249065
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "All that I ",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Vitus",
      "recordingId": "590d63e29023bb7ae02a43ba",
      "text": "Took",
      "tones": {
        "anger": {
          "score": 0.207174
        },
        "disgust": {
          "score": 0.227353
        },
        "fear": {
          "score": 0.232214
        },
        "joy": {
          "score": 0.107812
        },
        "sadness": {
          "score": 0.240185
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "My silken dresses are made of coffins:",
      "tones": {
        "anger": {
          "score": 0.130704
        },
        "disgust": {
          "score": 0.10376
        },
        "fear": {
          "score": 0.240092
        },
        "joy": {
          "score": 0.183368
        },
        "sadness": {
          "score": 0.268235
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "You never had a future,",
      "tones": {
        "anger": {
          "score": 0.050415
        },
        "disgust": {
          "score": 0.056787
        },
        "fear": {
          "score": 0.170191
        },
        "joy": {
          "score": 0.42702
        },
        "sadness": {
          "score": 0.139829
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "Plunged into boiling water,",
      "tones": {
        "anger": {
          "score": 0.217554
        },
        "disgust": {
          "score": 0.577724
        },
        "fear": {
          "score": 0.243629
        },
        "joy": {
          "score": 0.009436
        },
        "sadness": {
          "score": 0.105981
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "Mulberry, momento mori",
      "tones": {
        "anger": {
          "score": 0.164431
        },
        "disgust": {
          "score": 0.122509
        },
        "fear": {
          "score": 0.170722
        },
        "joy": {
          "score": 0.174629
        },
        "sadness": {
          "score": 0.300138
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "The message is within you,",
      "tones": {
        "anger": {
          "score": 0.185896
        },
        "disgust": {
          "score": 0.024471
        },
        "fear": {
          "score": 0.144445
        },
        "joy": {
          "score": 0.300314
        },
        "sadness": {
          "score": 0.203029
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "White and crimson berries are bleeding on my fingers.",
      "tones": {
        "anger": {
          "score": 0.06468
        },
        "disgust": {
          "score": 0.648142
        },
        "fear": {
          "score": 0.256432
        },
        "joy": {
          "score": 0.005397
        },
        "sadness": {
          "score": 0.161342
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "Growing your white wings,",
      "tones": {
        "anger": {
          "score": 0.226125
        },
        "disgust": {
          "score": 0.455639
        },
        "fear": {
          "score": 0.053919
        },
        "joy": {
          "score": 0.072721
        },
        "sadness": {
          "score": 0.248301
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "Though you will never fly,",
      "tones": {
        "anger": {
          "score": 0.394898
        },
        "disgust": {
          "score": 0.085877
        },
        "fear": {
          "score": 0.43769
        },
        "joy": {
          "score": 0.043539
        },
        "sadness": {
          "score": 0.106518
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "Sleep soundly under branches,",
      "tones": {
        "anger": {
          "score": 0.08833
        },
        "disgust": {
          "score": 0.161042
        },
        "fear": {
          "score": 0.223987
        },
        "joy": {
          "score": 0.09964
        },
        "sadness": {
          "score": 0.415465
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "For it is not your intention",
      "tones": {
        "anger": {
          "score": 0.164029
        },
        "disgust": {
          "score": 0.124585
        },
        "fear": {
          "score": 0.167962
        },
        "joy": {
          "score": 0.176329
        },
        "sadness": {
          "score": 0.298782
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "To soon die.",
      "tones": {
        "anger": {
          "score": 0.053585
        },
        "disgust": {
          "score": 0.040137
        },
        "fear": {
          "score": 0.187914
        },
        "joy": {
          "score": 0.004821
        },
        "sadness": {
          "score": 0.756879
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "A felted capsule,",
      "tones": {
        "anger": {
          "score": 0.180675
        },
        "disgust": {
          "score": 0.115482
        },
        "fear": {
          "score": 0.181298
        },
        "joy": {
          "score": 0.150431
        },
        "sadness": {
          "score": 0.319965
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "A strength unrivaled,",
      "tones": {
        "anger": {
          "score": 0.153352
        },
        "disgust": {
          "score": 0.142841
        },
        "fear": {
          "score": 0.108195
        },
        "joy": {
          "score": 0.146383
        },
        "sadness": {
          "score": 0.393499
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "A sheen with magic lustre;",
      "tones": {
        "anger": {
          "score": 0.037556
        },
        "disgust": {
          "score": 0.032541
        },
        "fear": {
          "score": 0.055333
        },
        "joy": {
          "score": 0.468467
        },
        "sadness": {
          "score": 0.227207
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "A hope you cast in circles.",
      "tones": {
        "anger": {
          "score": 0.275748
        },
        "disgust": {
          "score": 0.143692
        },
        "fear": {
          "score": 0.122973
        },
        "joy": {
          "score": 0.225295
        },
        "sadness": {
          "score": 0.153334
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "I used to value all those silken dresses,",
      "tones": {
        "anger": {
          "score": 0.191569
        },
        "disgust": {
          "score": 0.189001
        },
        "fear": {
          "score": 0.092802
        },
        "joy": {
          "score": 0.189376
        },
        "sadness": {
          "score": 0.271741
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "But now the only feeling,",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Momento Mori",
      "recordingId": "590d63e29023bb7ae02a43d0",
      "text": "Is the texture of a deathbed.",
      "tones": {
        "anger": {
          "score": 0.164431
        },
        "disgust": {
          "score": 0.122509
        },
        "fear": {
          "score": 0.170722
        },
        "joy": {
          "score": 0.174629
        },
        "sadness": {
          "score": 0.300138
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "I slept in the bed of a horseshoe lake last night,",
      "tones": {
        "anger": {
          "score": 0.067977
        },
        "disgust": {
          "score": 0.055487
        },
        "fear": {
          "score": 0.299257
        },
        "joy": {
          "score": 0.089636
        },
        "sadness": {
          "score": 0.458876
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "A cartridge crown and a shroud of silvery light,",
      "tones": {
        "anger": {
          "score": 0.149642
        },
        "disgust": {
          "score": 0.096701
        },
        "fear": {
          "score": 0.265469
        },
        "joy": {
          "score": 0.093609
        },
        "sadness": {
          "score": 0.383762
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Oh mirror of Mercury:",
      "tones": {
        "anger": {
          "score": 0.229081
        },
        "disgust": {
          "score": 0.096064
        },
        "fear": {
          "score": 0.373017
        },
        "joy": {
          "score": 0.054485
        },
        "sadness": {
          "score": 0.290978
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Am I poison enough to be -",
      "tones": {
        "anger": {
          "score": 0.248286
        },
        "disgust": {
          "score": 0.376353
        },
        "fear": {
          "score": 0.19046
        },
        "joy": {
          "score": 0.091119
        },
        "sadness": {
          "score": 0.147998
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Phosphate and DDT",
      "tones": {
        "anger": {
          "score": 0.173782
        },
        "disgust": {
          "score": 0.122329
        },
        "fear": {
          "score": 0.172222
        },
        "joy": {
          "score": 0.165857
        },
        "sadness": {
          "score": 0.304413
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "I take my leave through the channels to the west,",
      "tones": {
        "anger": {
          "score": 0.292315
        },
        "disgust": {
          "score": 0.170504
        },
        "fear": {
          "score": 0.074426
        },
        "joy": {
          "score": 0.008637
        },
        "sadness": {
          "score": 0.543872
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "I rise with the salt 'til the trees are white and bent.",
      "tones": {
        "anger": {
          "score": 0.071757
        },
        "disgust": {
          "score": 0.389591
        },
        "fear": {
          "score": 0.160948
        },
        "joy": {
          "score": 0.167695
        },
        "sadness": {
          "score": 0.18522
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Ploughshare of iron rust,",
      "tones": {
        "anger": {
          "score": 0.191806
        },
        "disgust": {
          "score": 0.183052
        },
        "fear": {
          "score": 0.170048
        },
        "joy": {
          "score": 0.089581
        },
        "sadness": {
          "score": 0.37578
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Return to me as red dust,",
      "tones": {
        "anger": {
          "score": 0.476185
        },
        "disgust": {
          "score": 0.083711
        },
        "fear": {
          "score": 0.085831
        },
        "joy": {
          "score": 0.134977
        },
        "sadness": {
          "score": 0.176444
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Now we're feeding the citrus trees,",
      "tones": {
        "anger": {
          "score": 0.205882
        },
        "disgust": {
          "score": 0.061056
        },
        "fear": {
          "score": 0.108049
        },
        "joy": {
          "score": 0.347528
        },
        "sadness": {
          "score": 0.137782
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Bringing your blood to me,",
      "tones": {
        "anger": {
          "score": 0.089508
        },
        "disgust": {
          "score": 0.074461
        },
        "fear": {
          "score": 0.203115
        },
        "joy": {
          "score": 0.350566
        },
        "sadness": {
          "score": 0.143299
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Am I poison enough to be - ",
      "tones": {
        "anger": {
          "score": 0.248286
        },
        "disgust": {
          "score": 0.376353
        },
        "fear": {
          "score": 0.19046
        },
        "joy": {
          "score": 0.091119
        },
        "sadness": {
          "score": 0.147998
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Phosphate and DDT",
      "tones": {
        "anger": {
          "score": 0.173782
        },
        "disgust": {
          "score": 0.122329
        },
        "fear": {
          "score": 0.172222
        },
        "joy": {
          "score": 0.165857
        },
        "sadness": {
          "score": 0.304413
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "And where I fall",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.9
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "You take me in,",
      "tones": {
        "anger": {
          "score": 0.207499
        },
        "disgust": {
          "score": 0.225631
        },
        "fear": {
          "score": 0.235127
        },
        "joy": {
          "score": 0.1064
        },
        "sadness": {
          "score": 0.241165
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "And where I fall,",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.9
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Oh fortune",
      "tones": {
        "anger": {
          "score": 0.178152
        },
        "disgust": {
          "score": 0.083813
        },
        "fear": {
          "score": 0.322346
        },
        "joy": {
          "score": 0.152337
        },
        "sadness": {
          "score": 0.214916
        }
      }
    },
    {
      "title": "Horseshoe Lake",
      "recordingId": "590d63e29023bb7ae02a43c7",
      "text": "Begin.",
      "tones": {
        "anger": {
          "score": 0.040516
        },
        "disgust": {
          "score": 0.047008
        },
        "fear": {
          "score": 0.339815
        },
        "joy": {
          "score": 0.327903
        },
        "sadness": {
          "score": 0.104706
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "Down by the river where the factories lie,",
      "tones": {
        "anger": {
          "score": 0.250172
        },
        "disgust": {
          "score": 0.248775
        },
        "fear": {
          "score": 0.181866
        },
        "joy": {
          "score": 0.050781
        },
        "sadness": {
          "score": 0.338486
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "And the Westgate stretches across the sky,",
      "tones": {
        "anger": {
          "score": 0.026946
        },
        "disgust": {
          "score": 0.067521
        },
        "fear": {
          "score": 0.173671
        },
        "joy": {
          "score": 0.368668
        },
        "sadness": {
          "score": 0.206974
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "I've moved north and I've lived south,",
      "tones": {
        "anger": {
          "score": 0.06416
        },
        "disgust": {
          "score": 0.050227
        },
        "fear": {
          "score": 0.142221
        },
        "joy": {
          "score": 0.244506
        },
        "sadness": {
          "score": 0.361767
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "But I always return to the river mouth.",
      "tones": {
        "anger": {
          "score": 0.292673
        },
        "disgust": {
          "score": 0.443383
        },
        "fear": {
          "score": 0.041402
        },
        "joy": {
          "score": 0.095036
        },
        "sadness": {
          "score": 0.167924
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "Out from the city all the secrets pour,",
      "tones": {
        "anger": {
          "score": 0.254997
        },
        "disgust": {
          "score": 0.120683
        },
        "fear": {
          "score": 0.073042
        },
        "joy": {
          "score": 0.279864
        },
        "sadness": {
          "score": 0.159906
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "Through pipes that were laid a hundred years ago;",
      "tones": {
        "anger": {
          "score": 0.024873
        },
        "disgust": {
          "score": 0.089127
        },
        "fear": {
          "score": 0.277912
        },
        "joy": {
          "score": 0.175301
        },
        "sadness": {
          "score": 0.34593
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "Love and ruin in the straining wells,",
      "tones": {
        "anger": {
          "score": 0.166458
        },
        "disgust": {
          "score": 0.054892
        },
        "fear": {
          "score": 0.048689
        },
        "joy": {
          "score": 0.425718
        },
        "sadness": {
          "score": 0.147064
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "Rags and bodies and teeth and gold.",
      "tones": {
        "anger": {
          "score": 0.240307
        },
        "disgust": {
          "score": 0.36465
        },
        "fear": {
          "score": 0.115158
        },
        "joy": {
          "score": 0.202951
        },
        "sadness": {
          "score": 0.047368
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "A woman of science in the tower above,",
      "tones": {
        "anger": {
          "score": 0.1284
        },
        "disgust": {
          "score": 0.491563
        },
        "fear": {
          "score": 0.119346
        },
        "joy": {
          "score": 0.053426
        },
        "sadness": {
          "score": 0.282961
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "Her laboratory a labour of love,",
      "tones": {
        "anger": {
          "score": 0.00398
        },
        "disgust": {
          "score": 0.050282
        },
        "fear": {
          "score": 0.023835
        },
        "joy": {
          "score": 0.819898
        },
        "sadness": {
          "score": 0.027741
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "There she worked while the war raged on,",
      "tones": {
        "anger": {
          "score": 0.519095
        },
        "disgust": {
          "score": 0.111937
        },
        "fear": {
          "score": 0.289722
        },
        "joy": {
          "score": 0.040223
        },
        "sadness": {
          "score": 0.11284
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "Never to marry or she'd loose it all.",
      "tones": {
        "anger": {
          "score": 0.202543
        },
        "disgust": {
          "score": 0.148139
        },
        "fear": {
          "score": 0.115747
        },
        "joy": {
          "score": 0.091342
        },
        "sadness": {
          "score": 0.435964
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "When I was young I never knew",
      "tones": {
        "anger": {
          "score": 0.043016
        },
        "disgust": {
          "score": 0.079723
        },
        "fear": {
          "score": 0.442994
        },
        "joy": {
          "score": 0.016469
        },
        "sadness": {
          "score": 0.476762
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "That I'd be brought back here to you,",
      "tones": {
        "anger": {
          "score": 0.046711
        },
        "disgust": {
          "score": 0.092645
        },
        "fear": {
          "score": 0.12818
        },
        "joy": {
          "score": 0.374155
        },
        "sadness": {
          "score": 0.206527
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "No stranger thing than how we're drawn",
      "tones": {
        "anger": {
          "score": 0.288389
        },
        "disgust": {
          "score": 0.126214
        },
        "fear": {
          "score": 0.107953
        },
        "joy": {
          "score": 0.122233
        },
        "sadness": {
          "score": 0.326452
        }
      }
    },
    {
      "title": "Spotswood",
      "recordingId": "590d63e29023bb7ae02a43cc",
      "text": "Back to the place from which we're born.",
      "tones": {
        "anger": {
          "score": 0.115541
        },
        "disgust": {
          "score": 0.108397
        },
        "fear": {
          "score": 0.122912
        },
        "joy": {
          "score": 0.376811
        },
        "sadness": {
          "score": 0.139031
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "It starts with a silver line, ",
      "tones": {
        "anger": {
          "score": 0.347642
        },
        "disgust": {
          "score": 0.191891
        },
        "fear": {
          "score": 0.164285
        },
        "joy": {
          "score": 0.070804
        },
        "sadness": {
          "score": 0.268829
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "Through your name and mine.",
      "tones": {
        "anger": {
          "score": 0.288513
        },
        "disgust": {
          "score": 0.176052
        },
        "fear": {
          "score": 0.0786
        },
        "joy": {
          "score": 0.137919
        },
        "sadness": {
          "score": 0.287763
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "Down like a diving bell,",
      "tones": {
        "anger": {
          "score": 0.119225
        },
        "disgust": {
          "score": 0.136104
        },
        "fear": {
          "score": 0.118123
        },
        "joy": {
          "score": 0.236661
        },
        "sadness": {
          "score": 0.285356
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "Is this your hell ",
      "tones": {
        "anger": {
          "score": 0.9
        },
        "disgust": {
          "score": 0.9
        },
        "fear": {
          "score": 0.9
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.9
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "Or is it mine?",
      "tones": {
        "anger": {
          "score": 0.473438
        },
        "disgust": {
          "score": 0.076777
        },
        "fear": {
          "score": 0.068115
        },
        "joy": {
          "score": 0.069133
        },
        "sadness": {
          "score": 0.318141
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "The sea will swell itself, ",
      "tones": {
        "anger": {
          "score": 0.161407
        },
        "disgust": {
          "score": 0.110534
        },
        "fear": {
          "score": 0.132986
        },
        "joy": {
          "score": 0.258226
        },
        "sadness": {
          "score": 0.226364
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "We'll breathe through coral shelves.",
      "tones": {
        "anger": {
          "score": 0.146688
        },
        "disgust": {
          "score": 0.148763
        },
        "fear": {
          "score": 0.474976
        },
        "joy": {
          "score": 0.057211
        },
        "sadness": {
          "score": 0.221601
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "Now your veins are tight, ",
      "tones": {
        "anger": {
          "score": 0.166045
        },
        "disgust": {
          "score": 0.129157
        },
        "fear": {
          "score": 0.172746
        },
        "joy": {
          "score": 0.168385
        },
        "sadness": {
          "score": 0.301792
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "Like copper wire.",
      "tones": {
        "anger": {
          "score": 0.129313
        },
        "disgust": {
          "score": 0.144242
        },
        "fear": {
          "score": 0.112248
        },
        "joy": {
          "score": 0.234904
        },
        "sadness": {
          "score": 0.278135
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "I could kill us both tonight.",
      "tones": {
        "anger": {
          "score": 0.159497
        },
        "disgust": {
          "score": 0.132683
        },
        "fear": {
          "score": 0.211086
        },
        "joy": {
          "score": 0.013066
        },
        "sadness": {
          "score": 0.562129
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "Drifting from the ship, ",
      "tones": {
        "anger": {
          "score": 0.437512
        },
        "disgust": {
          "score": 0.075041
        },
        "fear": {
          "score": 0.053627
        },
        "joy": {
          "score": 0.10346
        },
        "sadness": {
          "score": 0.301975
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "Nitrogen is letting slip; ",
      "tones": {
        "anger": {
          "score": 0.478321
        },
        "disgust": {
          "score": 0.145631
        },
        "fear": {
          "score": 0.075256
        },
        "joy": {
          "score": 0.057351
        },
        "sadness": {
          "score": 0.281226
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "Forget we live on land, ",
      "tones": {
        "anger": {
          "score": 0.150368
        },
        "disgust": {
          "score": 0.073275
        },
        "fear": {
          "score": 0.36782
        },
        "joy": {
          "score": 0.045843
        },
        "sadness": {
          "score": 0.398761
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "You're gonna die in sand.",
      "tones": {
        "anger": {
          "score": 0.046273
        },
        "disgust": {
          "score": 0.073037
        },
        "fear": {
          "score": 0.324304
        },
        "joy": {
          "score": 0.018058
        },
        "sadness": {
          "score": 0.587439
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "Come on, ",
      "tones": {
        "anger": {
          "score": 0.09231
        },
        "disgust": {
          "score": 0.063215
        },
        "fear": {
          "score": 0.174892
        },
        "joy": {
          "score": 0.282622
        },
        "sadness": {
          "score": 0.252015
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "I'll take you there tonight.",
      "tones": {
        "anger": {
          "score": 0.036581
        },
        "disgust": {
          "score": 0.112433
        },
        "fear": {
          "score": 0.095687
        },
        "joy": {
          "score": 0.303838
        },
        "sadness": {
          "score": 0.306404
        }
      }
    },
    {
      "title": "Diving Bell",
      "recordingId": "590d63e29023bb7ae02a43c4",
      "text": "I'll take you there tonight.",
      "tones": {
        "anger": {
          "score": 0.036581
        },
        "disgust": {
          "score": 0.112433
        },
        "fear": {
          "score": 0.095687
        },
        "joy": {
          "score": 0.303838
        },
        "sadness": {
          "score": 0.306404
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Rest your weary head ",
      "tones": {
        "anger": {
          "score": 0.057296
        },
        "disgust": {
          "score": 0.178983
        },
        "fear": {
          "score": 0.131099
        },
        "joy": {
          "score": 0.006042
        },
        "sadness": {
          "score": 0.700504
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Over the coals,",
      "tones": {
        "anger": {
          "score": 0.164431
        },
        "disgust": {
          "score": 0.122509
        },
        "fear": {
          "score": 0.170722
        },
        "joy": {
          "score": 0.174629
        },
        "sadness": {
          "score": 0.300138
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Take a bath and dream of getting old.",
      "tones": {
        "anger": {
          "score": 0.098653
        },
        "disgust": {
          "score": 0.081111
        },
        "fear": {
          "score": 0.127517
        },
        "joy": {
          "score": 0.294155
        },
        "sadness": {
          "score": 0.261059
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Take a photograph ",
      "tones": {
        "anger": {
          "score": 0.190749
        },
        "disgust": {
          "score": 0.166888
        },
        "fear": {
          "score": 0.202277
        },
        "joy": {
          "score": 0.14508
        },
        "sadness": {
          "score": 0.26368
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "See what you saw.",
      "tones": {
        "anger": {
          "score": 0.026089
        },
        "disgust": {
          "score": 0.542664
        },
        "fear": {
          "score": 0.061544
        },
        "joy": {
          "score": 0.236812
        },
        "sadness": {
          "score": 0.064639
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Break my heart and then show me the door.",
      "tones": {
        "anger": {
          "score": 0.011564
        },
        "disgust": {
          "score": 0.094091
        },
        "fear": {
          "score": 0.097806
        },
        "joy": {
          "score": 0.021623
        },
        "sadness": {
          "score": 0.793885
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "No, you won't see me here again.",
      "tones": {
        "anger": {
          "score": 0.104539
        },
        "disgust": {
          "score": 0.155293
        },
        "fear": {
          "score": 0.260159
        },
        "joy": {
          "score": 0.038648
        },
        "sadness": {
          "score": 0.493083
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Can't stop breaking my heart.",
      "tones": {
        "anger": {
          "score": 0.004728
        },
        "disgust": {
          "score": 0.026899
        },
        "fear": {
          "score": 0.091699
        },
        "joy": {
          "score": 0.022869
        },
        "sadness": {
          "score": 0.84859
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Foolish enough to think you were the last.",
      "tones": {
        "anger": {
          "score": 0.156037
        },
        "disgust": {
          "score": 0.114504
        },
        "fear": {
          "score": 0.19947
        },
        "joy": {
          "score": 0.04669
        },
        "sadness": {
          "score": 0.515974
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Fairytales of a love lost at sea.",
      "tones": {
        "anger": {
          "score": 0.027171
        },
        "disgust": {
          "score": 0.012214
        },
        "fear": {
          "score": 0.026804
        },
        "joy": {
          "score": 0.37195
        },
        "sadness": {
          "score": 0.36592
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Ships set sail to bring you back to me.",
      "tones": {
        "anger": {
          "score": 0.223492
        },
        "disgust": {
          "score": 0.035369
        },
        "fear": {
          "score": 0.034012
        },
        "joy": {
          "score": 0.341893
        },
        "sadness": {
          "score": 0.208213
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Land ahoy - ",
      "tones": {
        "anger": {
          "score": 0.171438
        },
        "disgust": {
          "score": 0.112886
        },
        "fear": {
          "score": 0.16893
        },
        "joy": {
          "score": 0.172141
        },
        "sadness": {
          "score": 0.30638
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "My heart's running a race, ",
      "tones": {
        "anger": {
          "score": 0.00633
        },
        "disgust": {
          "score": 0.060651
        },
        "fear": {
          "score": 0.153367
        },
        "joy": {
          "score": 0.376306
        },
        "sadness": {
          "score": 0.238415
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "The sea, she still holds me in her sweet embrace.",
      "tones": {
        "anger": {
          "score": 0.066006
        },
        "disgust": {
          "score": 0.027925
        },
        "fear": {
          "score": 0.045512
        },
        "joy": {
          "score": 0.710454
        },
        "sadness": {
          "score": 0.036331
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "No, you won't see me here again.",
      "tones": {
        "anger": {
          "score": 0.104539
        },
        "disgust": {
          "score": 0.155293
        },
        "fear": {
          "score": 0.260159
        },
        "joy": {
          "score": 0.038648
        },
        "sadness": {
          "score": 0.493083
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Can't stop breaking my heart.",
      "tones": {
        "anger": {
          "score": 0.004728
        },
        "disgust": {
          "score": 0.026899
        },
        "fear": {
          "score": 0.091699
        },
        "joy": {
          "score": 0.022869
        },
        "sadness": {
          "score": 0.84859
        }
      }
    },
    {
      "title": "Fairy Tales",
      "recordingId": "590d63e29023bb7ae02a43c0",
      "text": "Foolish enough to think you were the last.",
      "tones": {
        "anger": {
          "score": 0.156037
        },
        "disgust": {
          "score": 0.114504
        },
        "fear": {
          "score": 0.19947
        },
        "joy": {
          "score": 0.04669
        },
        "sadness": {
          "score": 0.515974
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "I'm building a bower, ",
      "tones": {
        "anger": {
          "score": 0.086145
        },
        "disgust": {
          "score": 0.191311
        },
        "fear": {
          "score": 0.062919
        },
        "joy": {
          "score": 0.363865
        },
        "sadness": {
          "score": 0.167061
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "Twig by twig.",
      "tones": {
        "anger": {
          "score": 0.164431
        },
        "disgust": {
          "score": 0.122509
        },
        "fear": {
          "score": 0.170722
        },
        "joy": {
          "score": 0.174629
        },
        "sadness": {
          "score": 0.300138
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "And then I'll ask you ",
      "tones": {
        "anger": {
          "score": 0.701709
        },
        "disgust": {
          "score": 0.04693
        },
        "fear": {
          "score": 0.109287
        },
        "joy": {
          "score": 0.016573
        },
        "sadness": {
          "score": 0.179702
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "What you think?",
      "tones": {
        "anger": {
          "score": 0.070784
        },
        "disgust": {
          "score": 0.367856
        },
        "fear": {
          "score": 0.336599
        },
        "joy": {
          "score": 0.031962
        },
        "sadness": {
          "score": 0.295576
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "And if you like it ",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0.9
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "I hope you will stay, ",
      "tones": {
        "anger": {
          "score": 0.10663
        },
        "disgust": {
          "score": 0.212425
        },
        "fear": {
          "score": 0.232905
        },
        "joy": {
          "score": 0.188781
        },
        "sadness": {
          "score": 0.206367
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "And if you don't, ",
      "tones": {
        "anger": {
          "score": 0.173364
        },
        "disgust": {
          "score": 0.125627
        },
        "fear": {
          "score": 0.176329
        },
        "joy": {
          "score": 0.160862
        },
        "sadness": {
          "score": 0.306661
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "I'll let the wind ",
      "tones": {
        "anger": {
          "score": 0.056516
        },
        "disgust": {
          "score": 0.16645
        },
        "fear": {
          "score": 0.500753
        },
        "joy": {
          "score": 0.082358
        },
        "sadness": {
          "score": 0.210532
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "Take it away.",
      "tones": {
        "anger": {
          "score": 0.10044
        },
        "disgust": {
          "score": 0.158316
        },
        "fear": {
          "score": 0.221075
        },
        "joy": {
          "score": 0.020953
        },
        "sadness": {
          "score": 0.567491
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "But now I am doubtful ",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0.9
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.9
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "That I have the skill, ",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "But if I don't do it ",
      "tones": {
        "anger": {
          "score": 0.186726
        },
        "disgust": {
          "score": 0.121195
        },
        "fear": {
          "score": 0.181203
        },
        "joy": {
          "score": 0.145458
        },
        "sadness": {
          "score": 0.318716
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "Someone else will.",
      "tones": {
        "anger": {
          "score": 0.220838
        },
        "disgust": {
          "score": 0.281283
        },
        "fear": {
          "score": 0.188434
        },
        "joy": {
          "score": 0.047474
        },
        "sadness": {
          "score": 0.339649
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "And so I am searching despite all my nerves, ",
      "tones": {
        "anger": {
          "score": 0.42941
        },
        "disgust": {
          "score": 0.141402
        },
        "fear": {
          "score": 0.121643
        },
        "joy": {
          "score": 0.046096
        },
        "sadness": {
          "score": 0.31551
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "For every ",
      "tones": {
        "anger": {
          "score": 0.279605
        },
        "disgust": {
          "score": 0.380586
        },
        "fear": {
          "score": 0.160375
        },
        "joy": {
          "score": 0.053199
        },
        "sadness": {
          "score": 0.215961
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "Last branch ",
      "tones": {
        "anger": {
          "score": 0.121181
        },
        "disgust": {
          "score": 0.087299
        },
        "fear": {
          "score": 0.097775
        },
        "joy": {
          "score": 0.036104
        },
        "sadness": {
          "score": 0.675493
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "That you ",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "The Bower",
      "recordingId": "590d63e29023bb7ae02a43c3",
      "text": "Deserve.",
      "tones": {
        "anger": {
          "score": 0.9
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Winding thread around a spool,",
      "tones": {
        "anger": {
          "score": 0.042577
        },
        "disgust": {
          "score": 0.046767
        },
        "fear": {
          "score": 0.422763
        },
        "joy": {
          "score": 0.166821
        },
        "sadness": {
          "score": 0.238736
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Insects gather at the light above.",
      "tones": {
        "anger": {
          "score": 0.086982
        },
        "disgust": {
          "score": 0.314916
        },
        "fear": {
          "score": 0.150754
        },
        "joy": {
          "score": 0.21599
        },
        "sadness": {
          "score": 0.17365
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "They think it's the moon,",
      "tones": {
        "anger": {
          "score": 0.016375
        },
        "disgust": {
          "score": 0.189546
        },
        "fear": {
          "score": 0.141583
        },
        "joy": {
          "score": 0.367259
        },
        "sadness": {
          "score": 0.156161
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "And they'll die soon - ",
      "tones": {
        "anger": {
          "score": 0.055499
        },
        "disgust": {
          "score": 0.040716
        },
        "fear": {
          "score": 0.18714
        },
        "joy": {
          "score": 0.004364
        },
        "sadness": {
          "score": 0.756616
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "fall into the loom.",
      "tones": {
        "anger": {
          "score": 0.041953
        },
        "disgust": {
          "score": 0.069584
        },
        "fear": {
          "score": 0.622607
        },
        "joy": {
          "score": 0.029038
        },
        "sadness": {
          "score": 0.276894
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Pheromones and tears,",
      "tones": {
        "anger": {
          "score": 0.046649
        },
        "disgust": {
          "score": 0.181467
        },
        "fear": {
          "score": 0.012671
        },
        "joy": {
          "score": 0.004588
        },
        "sadness": {
          "score": 0.810344
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Are woven,",
      "tones": {
        "anger": {
          "score": 0.165059
        },
        "disgust": {
          "score": 0.120979
        },
        "fear": {
          "score": 0.168842
        },
        "joy": {
          "score": 0.175582
        },
        "sadness": {
          "score": 0.300877
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Into shirts for you.",
      "tones": {
        "anger": {
          "score": 0.137881
        },
        "disgust": {
          "score": 0.110424
        },
        "fear": {
          "score": 0.131357
        },
        "joy": {
          "score": 0.296995
        },
        "sadness": {
          "score": 0.199979
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "By day,",
      "tones": {
        "anger": {
          "score": 0.039407
        },
        "disgust": {
          "score": 0.007903
        },
        "fear": {
          "score": 0.04877
        },
        "joy": {
          "score": 0.47808
        },
        "sadness": {
          "score": 0.239362
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Machines will make the song",
      "tones": {
        "anger": {
          "score": 0.108138
        },
        "disgust": {
          "score": 0.121057
        },
        "fear": {
          "score": 0.071647
        },
        "joy": {
          "score": 0.425613
        },
        "sadness": {
          "score": 0.131332
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "That lives within my limbs all day long:",
      "tones": {
        "anger": {
          "score": 0.034539
        },
        "disgust": {
          "score": 0.043224
        },
        "fear": {
          "score": 0.081134
        },
        "joy": {
          "score": 0.445105
        },
        "sadness": {
          "score": 0.221816
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Pull and turn,",
      "tones": {
        "anger": {
          "score": 0.088798
        },
        "disgust": {
          "score": 0.273923
        },
        "fear": {
          "score": 0.270809
        },
        "joy": {
          "score": 0.031399
        },
        "sadness": {
          "score": 0.420462
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Twist and thread,",
      "tones": {
        "anger": {
          "score": 0.165477
        },
        "disgust": {
          "score": 0.121374
        },
        "fear": {
          "score": 0.170167
        },
        "joy": {
          "score": 0.177757
        },
        "sadness": {
          "score": 0.295749
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Wrapping skeins around my neck.",
      "tones": {
        "anger": {
          "score": 0.132752
        },
        "disgust": {
          "score": 0.082165
        },
        "fear": {
          "score": 0.426354
        },
        "joy": {
          "score": 0.155992
        },
        "sadness": {
          "score": 0.151556
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "A sawtooth roof - ",
      "tones": {
        "anger": {
          "score": 0.174889
        },
        "disgust": {
          "score": 0.114225
        },
        "fear": {
          "score": 0.178314
        },
        "joy": {
          "score": 0.155558
        },
        "sadness": {
          "score": 0.320282
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "To catch the northern light (not the arctic kind).",
      "tones": {
        "anger": {
          "score": 0.079686
        },
        "disgust": {
          "score": 0.104053
        },
        "fear": {
          "score": 0.088475
        },
        "joy": {
          "score": 0.407778
        },
        "sadness": {
          "score": 0.170685
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Insects watch, from above,",
      "tones": {
        "anger": {
          "score": 0.102858
        },
        "disgust": {
          "score": 0.295802
        },
        "fear": {
          "score": 0.039338
        },
        "joy": {
          "score": 0.248765
        },
        "sadness": {
          "score": 0.22581
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Always there.",
      "tones": {
        "anger": {
          "score": 0.175059
        },
        "disgust": {
          "score": 0.069058
        },
        "fear": {
          "score": 0.06634
        },
        "joy": {
          "score": 0.199003
        },
        "sadness": {
          "score": 0.381664
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Always there.",
      "tones": {
        "anger": {
          "score": 0.175059
        },
        "disgust": {
          "score": 0.069058
        },
        "fear": {
          "score": 0.06634
        },
        "joy": {
          "score": 0.199003
        },
        "sadness": {
          "score": 0.381664
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "They think it's the moon,",
      "tones": {
        "anger": {
          "score": 0.016375
        },
        "disgust": {
          "score": 0.189546
        },
        "fear": {
          "score": 0.141583
        },
        "joy": {
          "score": 0.367259
        },
        "sadness": {
          "score": 0.156161
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "And they'll die soon - ",
      "tones": {
        "anger": {
          "score": 0.055499
        },
        "disgust": {
          "score": 0.040716
        },
        "fear": {
          "score": 0.18714
        },
        "joy": {
          "score": 0.004364
        },
        "sadness": {
          "score": 0.756616
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Fall into the loom.",
      "tones": {
        "anger": {
          "score": 0.041515
        },
        "disgust": {
          "score": 0.071149
        },
        "fear": {
          "score": 0.621085
        },
        "joy": {
          "score": 0.030318
        },
        "sadness": {
          "score": 0.274984
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Pheromones and tears,",
      "tones": {
        "anger": {
          "score": 0.046649
        },
        "disgust": {
          "score": 0.181467
        },
        "fear": {
          "score": 0.012671
        },
        "joy": {
          "score": 0.004588
        },
        "sadness": {
          "score": 0.810344
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Are woven,",
      "tones": {
        "anger": {
          "score": 0.165059
        },
        "disgust": {
          "score": 0.120979
        },
        "fear": {
          "score": 0.168842
        },
        "joy": {
          "score": 0.175582
        },
        "sadness": {
          "score": 0.300877
        }
      }
    },
    {
      "title": "Loom",
      "recordingId": "590d63e29023bb7ae02a43ce",
      "text": "Into shirts for you.",
      "tones": {
        "anger": {
          "score": 0.137881
        },
        "disgust": {
          "score": 0.110424
        },
        "fear": {
          "score": 0.131357
        },
        "joy": {
          "score": 0.296995
        },
        "sadness": {
          "score": 0.199979
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Japanese Mountains,",
      "tones": {
        "anger": {
          "score": 0.091955
        },
        "disgust": {
          "score": 0.143278
        },
        "fear": {
          "score": 0.248008
        },
        "joy": {
          "score": 0.239777
        },
        "sadness": {
          "score": 0.185371
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Japanese Mountains - ",
      "tones": {
        "anger": {
          "score": 0.091536
        },
        "disgust": {
          "score": 0.145385
        },
        "fear": {
          "score": 0.244087
        },
        "joy": {
          "score": 0.242726
        },
        "sadness": {
          "score": 0.183751
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Please receive me,",
      "tones": {
        "anger": {
          "score": 0.359505
        },
        "disgust": {
          "score": 0.190327
        },
        "fear": {
          "score": 0.023367
        },
        "joy": {
          "score": 0.101444
        },
        "sadness": {
          "score": 0.320744
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "I want to leave here.",
      "tones": {
        "anger": {
          "score": 0.256337
        },
        "disgust": {
          "score": 0.088118
        },
        "fear": {
          "score": 0.153222
        },
        "joy": {
          "score": 0.010911
        },
        "sadness": {
          "score": 0.564082
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Run through the cities",
      "tones": {
        "anger": {
          "score": 0.164676
        },
        "disgust": {
          "score": 0.067411
        },
        "fear": {
          "score": 0.156778
        },
        "joy": {
          "score": 0.19379
        },
        "sadness": {
          "score": 0.322404
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Crying and weeping,",
      "tones": {
        "anger": {
          "score": 0.018266
        },
        "disgust": {
          "score": 0.011733
        },
        "fear": {
          "score": 0.117317
        },
        "joy": {
          "score": 0.003104
        },
        "sadness": {
          "score": 0.870499
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "There's nowhere for sleeping",
      "tones": {
        "anger": {
          "score": 0.074802
        },
        "disgust": {
          "score": 0.030822
        },
        "fear": {
          "score": 0.652957
        },
        "joy": {
          "score": 0.017773
        },
        "sadness": {
          "score": 0.269114
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "When it's light all the time,",
      "tones": {
        "anger": {
          "score": 0.034574
        },
        "disgust": {
          "score": 0.122735
        },
        "fear": {
          "score": 0.13331
        },
        "joy": {
          "score": 0.387886
        },
        "sadness": {
          "score": 0.17653
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Don't ask about sweet dreams,",
      "tones": {
        "anger": {
          "score": 0.074864
        },
        "disgust": {
          "score": 0.032754
        },
        "fear": {
          "score": 0.044159
        },
        "joy": {
          "score": 0.701179
        },
        "sadness": {
          "score": 0.032477
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "They're not the ones that follow me,",
      "tones": {
        "anger": {
          "score": 0.07272
        },
        "disgust": {
          "score": 0.071234
        },
        "fear": {
          "score": 0.179443
        },
        "joy": {
          "score": 0.088082
        },
        "sadness": {
          "score": 0.554004
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Crying and weeping,",
      "tones": {
        "anger": {
          "score": 0.018266
        },
        "disgust": {
          "score": 0.011733
        },
        "fear": {
          "score": 0.117317
        },
        "joy": {
          "score": 0.003104
        },
        "sadness": {
          "score": 0.870499
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "I run through them all.",
      "tones": {
        "anger": {
          "score": 0.170262
        },
        "disgust": {
          "score": 0.049513
        },
        "fear": {
          "score": 0.27918
        },
        "joy": {
          "score": 0.131908
        },
        "sadness": {
          "score": 0.318934
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Maple and cedar,",
      "tones": {
        "anger": {
          "score": 0.16118
        },
        "disgust": {
          "score": 0.123282
        },
        "fear": {
          "score": 0.173108
        },
        "joy": {
          "score": 0.176352
        },
        "sadness": {
          "score": 0.297683
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Paulownia,",
      "tones": {
        "anger": {
          "score": 0.164431
        },
        "disgust": {
          "score": 0.122509
        },
        "fear": {
          "score": 0.170722
        },
        "joy": {
          "score": 0.174629
        },
        "sadness": {
          "score": 0.300138
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Maple and cedar,",
      "tones": {
        "anger": {
          "score": 0.16118
        },
        "disgust": {
          "score": 0.123282
        },
        "fear": {
          "score": 0.173108
        },
        "joy": {
          "score": 0.176352
        },
        "sadness": {
          "score": 0.297683
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Seeds on the wind.",
      "tones": {
        "anger": {
          "score": 0.04328
        },
        "disgust": {
          "score": 0.052548
        },
        "fear": {
          "score": 0.445426
        },
        "joy": {
          "score": 0.10467
        },
        "sadness": {
          "score": 0.316415
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "We all have our secrets,",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0.9
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "And the ones who betray us,",
      "tones": {
        "anger": {
          "score": 0.284906
        },
        "disgust": {
          "score": 0.218054
        },
        "fear": {
          "score": 0.133835
        },
        "joy": {
          "score": 0.006613
        },
        "sadness": {
          "score": 0.468506
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "But everything's made up of",
      "tones": {
        "anger": {
          "score": 0.116192
        },
        "disgust": {
          "score": 0.087086
        },
        "fear": {
          "score": 0.111761
        },
        "joy": {
          "score": 0.341617
        },
        "sadness": {
          "score": 0.200734
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Darkness and light.",
      "tones": {
        "anger": {
          "score": 0.095951
        },
        "disgust": {
          "score": 0.134782
        },
        "fear": {
          "score": 0.419987
        },
        "joy": {
          "score": 0.047744
        },
        "sadness": {
          "score": 0.347886
        }
      }
    },
    {
      "title": "Japanese Mountains",
      "recordingId": "590d63e29023bb7ae02a43ca",
      "text": "Shinpai shinaide kuddasai",
      "tones": {
        "anger": {
          "score": 0.164029
        },
        "disgust": {
          "score": 0.124585
        },
        "fear": {
          "score": 0.167962
        },
        "joy": {
          "score": 0.176329
        },
        "sadness": {
          "score": 0.298782
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Moon rises over the match factory;",
      "tones": {
        "anger": {
          "score": 0.05373
        },
        "disgust": {
          "score": 0.133088
        },
        "fear": {
          "score": 0.123525
        },
        "joy": {
          "score": 0.389487
        },
        "sadness": {
          "score": 0.159845
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "I’m heading north from the river",
      "tones": {
        "anger": {
          "score": 0.116075
        },
        "disgust": {
          "score": 0.166307
        },
        "fear": {
          "score": 0.21826
        },
        "joy": {
          "score": 0.069972
        },
        "sadness": {
          "score": 0.448949
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Down those narrow Cremorne streets.",
      "tones": {
        "anger": {
          "score": 0.299785
        },
        "disgust": {
          "score": 0.134745
        },
        "fear": {
          "score": 0.316536
        },
        "joy": {
          "score": 0.045651
        },
        "sadness": {
          "score": 0.269958
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "They’re gutting all our memories –",
      "tones": {
        "anger": {
          "score": 0.025858
        },
        "disgust": {
          "score": 0.017563
        },
        "fear": {
          "score": 0.022953
        },
        "joy": {
          "score": 0.254433
        },
        "sadness": {
          "score": 0.503451
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Even the tower on Swan Street;",
      "tones": {
        "anger": {
          "score": 0.387089
        },
        "disgust": {
          "score": 0.268624
        },
        "fear": {
          "score": 0.201525
        },
        "joy": {
          "score": 0.031024
        },
        "sadness": {
          "score": 0.220587
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Forever the moon rises, and will rise over me.",
      "tones": {
        "anger": {
          "score": 0.040902
        },
        "disgust": {
          "score": 0.189833
        },
        "fear": {
          "score": 0.167983
        },
        "joy": {
          "score": 0.326845
        },
        "sadness": {
          "score": 0.156884
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Silos tremble, I shiver as they leave;",
      "tones": {
        "anger": {
          "score": 0.125536
        },
        "disgust": {
          "score": 0.128546
        },
        "fear": {
          "score": 0.538557
        },
        "joy": {
          "score": 0.019065
        },
        "sadness": {
          "score": 0.272144
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "We used to climb up to the gantry",
      "tones": {
        "anger": {
          "score": 0.163299
        },
        "disgust": {
          "score": 0.140733
        },
        "fear": {
          "score": 0.232276
        },
        "joy": {
          "score": 0.13581
        },
        "sadness": {
          "score": 0.295772
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Where we’d watch the city sleep.",
      "tones": {
        "anger": {
          "score": 0.068505
        },
        "disgust": {
          "score": 0.085349
        },
        "fear": {
          "score": 0.135311
        },
        "joy": {
          "score": 0.23884
        },
        "sadness": {
          "score": 0.347126
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Walking home at dawn",
      "tones": {
        "anger": {
          "score": 0.044722
        },
        "disgust": {
          "score": 0.046742
        },
        "fear": {
          "score": 0.56858
        },
        "joy": {
          "score": 0.147974
        },
        "sadness": {
          "score": 0.122877
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "We feel the river through our feet;",
      "tones": {
        "anger": {
          "score": 0.117297
        },
        "disgust": {
          "score": 0.118465
        },
        "fear": {
          "score": 0.263422
        },
        "joy": {
          "score": 0.109295
        },
        "sadness": {
          "score": 0.369397
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Forever the moon rises, and will rise over me.",
      "tones": {
        "anger": {
          "score": 0.040902
        },
        "disgust": {
          "score": 0.189833
        },
        "fear": {
          "score": 0.167983
        },
        "joy": {
          "score": 0.326845
        },
        "sadness": {
          "score": 0.156884
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Far beyond my memory,",
      "tones": {
        "anger": {
          "score": 0.163761
        },
        "disgust": {
          "score": 0.172556
        },
        "fear": {
          "score": 0.044999
        },
        "joy": {
          "score": 0.107632
        },
        "sadness": {
          "score": 0.481737
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Something older buried.",
      "tones": {
        "anger": {
          "score": 0.06912
        },
        "disgust": {
          "score": 0.067433
        },
        "fear": {
          "score": 0.195989
        },
        "joy": {
          "score": 0.116942
        },
        "sadness": {
          "score": 0.493037
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Moon rises over the match factory;",
      "tones": {
        "anger": {
          "score": 0.05373
        },
        "disgust": {
          "score": 0.133088
        },
        "fear": {
          "score": 0.123525
        },
        "joy": {
          "score": 0.389487
        },
        "sadness": {
          "score": 0.159845
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "I’m heading north by the river",
      "tones": {
        "anger": {
          "score": 0.116075
        },
        "disgust": {
          "score": 0.166307
        },
        "fear": {
          "score": 0.21826
        },
        "joy": {
          "score": 0.069972
        },
        "sadness": {
          "score": 0.448949
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "To the hills from which it leaves.",
      "tones": {
        "anger": {
          "score": 0.244668
        },
        "disgust": {
          "score": 0.164676
        },
        "fear": {
          "score": 0.201924
        },
        "joy": {
          "score": 0.023433
        },
        "sadness": {
          "score": 0.448447
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "If I don’t return tomorrow,",
      "tones": {
        "anger": {
          "score": 0.305232
        },
        "disgust": {
          "score": 0.022906
        },
        "fear": {
          "score": 0.174809
        },
        "joy": {
          "score": 0.199351
        },
        "sadness": {
          "score": 0.203642
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Leave a rock on the cairn for me.",
      "tones": {
        "anger": {
          "score": 0.186721
        },
        "disgust": {
          "score": 0.084215
        },
        "fear": {
          "score": 0.154016
        },
        "joy": {
          "score": 0.25516
        },
        "sadness": {
          "score": 0.208851
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "Forever the moon rises,",
      "tones": {
        "anger": {
          "score": 0.028094
        },
        "disgust": {
          "score": 0.146484
        },
        "fear": {
          "score": 0.110073
        },
        "joy": {
          "score": 0.390967
        },
        "sadness": {
          "score": 0.181305
        }
      }
    },
    {
      "title": "Match Factory",
      "recordingId": "590d63e29023bb7ae02a43d3",
      "text": "And will rise over me.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0.9
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "I met her on my way home ",
      "tones": {
        "anger": {
          "score": 0.060867
        },
        "disgust": {
          "score": 0.028407
        },
        "fear": {
          "score": 0.126242
        },
        "joy": {
          "score": 0.470317
        },
        "sadness": {
          "score": 0.148985
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "She had a gun in her hand and a smile that said ",
      "tones": {
        "anger": {
          "score": 0.031818
        },
        "disgust": {
          "score": 0.084909
        },
        "fear": {
          "score": 0.028096
        },
        "joy": {
          "score": 0.667541
        },
        "sadness": {
          "score": 0.066992
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "\"Be careful dear, ",
      "tones": {
        "anger": {
          "score": 0.226247
        },
        "disgust": {
          "score": 0.088306
        },
        "fear": {
          "score": 0.234274
        },
        "joy": {
          "score": 0.148527
        },
        "sadness": {
          "score": 0.255446
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "Don't wish for what you fear.",
      "tones": {
        "anger": {
          "score": 0.005789
        },
        "disgust": {
          "score": 0.004507
        },
        "fear": {
          "score": 0.93242
        },
        "joy": {
          "score": 0.000266
        },
        "sadness": {
          "score": 0.071642
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "My only purpose is to see him in the ground ",
      "tones": {
        "anger": {
          "score": 0.043763
        },
        "disgust": {
          "score": 0.29708
        },
        "fear": {
          "score": 0.088734
        },
        "joy": {
          "score": 0.269813
        },
        "sadness": {
          "score": 0.205932
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "Without a sound.",
      "tones": {
        "anger": {
          "score": 0.213846
        },
        "disgust": {
          "score": 0.137696
        },
        "fear": {
          "score": 0.485004
        },
        "joy": {
          "score": 0.01986
        },
        "sadness": {
          "score": 0.240037
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "He caused this misery and nothing's surely stopping me from trying.\"",
      "tones": {
        "anger": {
          "score": 0.289449
        },
        "disgust": {
          "score": 0.134107
        },
        "fear": {
          "score": 0.065315
        },
        "joy": {
          "score": 0.01332
        },
        "sadness": {
          "score": 0.570451
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "She don't feel so well, ",
      "tones": {
        "anger": {
          "score": 0.039774
        },
        "disgust": {
          "score": 0.008139
        },
        "fear": {
          "score": 0.438924
        },
        "joy": {
          "score": 0.151912
        },
        "sadness": {
          "score": 0.275394
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "The ceiling fan reminds her of a Ferris wheel; ",
      "tones": {
        "anger": {
          "score": 0.052771
        },
        "disgust": {
          "score": 0.259241
        },
        "fear": {
          "score": 0.026312
        },
        "joy": {
          "score": 0.307051
        },
        "sadness": {
          "score": 0.235898
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "It's fine if you sit still.",
      "tones": {
        "anger": {
          "score": 0.14109
        },
        "disgust": {
          "score": 0.2737
        },
        "fear": {
          "score": 0.058121
        },
        "joy": {
          "score": 0.039205
        },
        "sadness": {
          "score": 0.544381
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "Whistling blue from the kettle ",
      "tones": {
        "anger": {
          "score": 0.246412
        },
        "disgust": {
          "score": 0.057697
        },
        "fear": {
          "score": 0.06194
        },
        "joy": {
          "score": 0.162051
        },
        "sadness": {
          "score": 0.386161
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "Reminds me of you.",
      "tones": {
        "anger": {
          "score": 0.082895
        },
        "disgust": {
          "score": 0.097457
        },
        "fear": {
          "score": 0.078885
        },
        "joy": {
          "score": 0.332649
        },
        "sadness": {
          "score": 0.259447
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "She's sure to hit the floor ",
      "tones": {
        "anger": {
          "score": 0.376778
        },
        "disgust": {
          "score": 0.177424
        },
        "fear": {
          "score": 0.20304
        },
        "joy": {
          "score": 0.080168
        },
        "sadness": {
          "score": 0.200489
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "Before she sees the border or the law.",
      "tones": {
        "anger": {
          "score": 0.110997
        },
        "disgust": {
          "score": 0.370004
        },
        "fear": {
          "score": 0.126735
        },
        "joy": {
          "score": 0.146616
        },
        "sadness": {
          "score": 0.232277
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "A flicker of life still glows, ",
      "tones": {
        "anger": {
          "score": 0.054643
        },
        "disgust": {
          "score": 0.043665
        },
        "fear": {
          "score": 0.052993
        },
        "joy": {
          "score": 0.419488
        },
        "sadness": {
          "score": 0.252447
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "It's hard to know when to fight ",
      "tones": {
        "anger": {
          "score": 0.196717
        },
        "disgust": {
          "score": 0.091433
        },
        "fear": {
          "score": 0.264702
        },
        "joy": {
          "score": 0.007405
        },
        "sadness": {
          "score": 0.524211
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "Or just to let things go.",
      "tones": {
        "anger": {
          "score": 0.107489
        },
        "disgust": {
          "score": 0.167052
        },
        "fear": {
          "score": 0.203877
        },
        "joy": {
          "score": 0.187568
        },
        "sadness": {
          "score": 0.267673
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "You never really know.",
      "tones": {
        "anger": {
          "score": 0.141424
        },
        "disgust": {
          "score": 0.112468
        },
        "fear": {
          "score": 0.388199
        },
        "joy": {
          "score": 0.004611
        },
        "sadness": {
          "score": 0.449543
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "I met her on my way home, ",
      "tones": {
        "anger": {
          "score": 0.060918
        },
        "disgust": {
          "score": 0.027738
        },
        "fear": {
          "score": 0.128635
        },
        "joy": {
          "score": 0.467782
        },
        "sadness": {
          "score": 0.149584
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "She had a gun in her hand and a smile that said ",
      "tones": {
        "anger": {
          "score": 0.031818
        },
        "disgust": {
          "score": 0.084909
        },
        "fear": {
          "score": 0.028096
        },
        "joy": {
          "score": 0.667541
        },
        "sadness": {
          "score": 0.066992
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "\"Be careful dear, ",
      "tones": {
        "anger": {
          "score": 0.226247
        },
        "disgust": {
          "score": 0.088306
        },
        "fear": {
          "score": 0.234274
        },
        "joy": {
          "score": 0.148527
        },
        "sadness": {
          "score": 0.255446
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "Don't wish for what you fear.",
      "tones": {
        "anger": {
          "score": 0.005789
        },
        "disgust": {
          "score": 0.004507
        },
        "fear": {
          "score": 0.93242
        },
        "joy": {
          "score": 0.000266
        },
        "sadness": {
          "score": 0.071642
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "My only purpose is to see him in the ground ",
      "tones": {
        "anger": {
          "score": 0.043763
        },
        "disgust": {
          "score": 0.29708
        },
        "fear": {
          "score": 0.088734
        },
        "joy": {
          "score": 0.269813
        },
        "sadness": {
          "score": 0.205932
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "Without a sound.",
      "tones": {
        "anger": {
          "score": 0.213846
        },
        "disgust": {
          "score": 0.137696
        },
        "fear": {
          "score": 0.485004
        },
        "joy": {
          "score": 0.01986
        },
        "sadness": {
          "score": 0.240037
        }
      }
    },
    {
      "title": "Met Her on My Way Home",
      "recordingId": "590d63e29023bb7ae02a43bf",
      "text": "He caused this misery and nothing's surely stopping me from trying.\"",
      "tones": {
        "anger": {
          "score": 0.289449
        },
        "disgust": {
          "score": 0.134107
        },
        "fear": {
          "score": 0.065315
        },
        "joy": {
          "score": 0.01332
        },
        "sadness": {
          "score": 0.570451
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Do you remember, ",
      "tones": {
        "anger": {
          "score": 0.027875
        },
        "disgust": {
          "score": 0.04789
        },
        "fear": {
          "score": 0.226838
        },
        "joy": {
          "score": 0.167459
        },
        "sadness": {
          "score": 0.430273
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Do you remember when ",
      "tones": {
        "anger": {
          "score": 0.027864
        },
        "disgust": {
          "score": 0.048751
        },
        "fear": {
          "score": 0.224293
        },
        "joy": {
          "score": 0.169018
        },
        "sadness": {
          "score": 0.429525
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "The walls were blue and white, ",
      "tones": {
        "anger": {
          "score": 0.361885
        },
        "disgust": {
          "score": 0.229103
        },
        "fear": {
          "score": 0.089209
        },
        "joy": {
          "score": 0.037694
        },
        "sadness": {
          "score": 0.358395
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "And a little fringed Holland blind kept us safe at night?",
      "tones": {
        "anger": {
          "score": 0.280075
        },
        "disgust": {
          "score": 0.08701
        },
        "fear": {
          "score": 0.199845
        },
        "joy": {
          "score": 0.082006
        },
        "sadness": {
          "score": 0.355288
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Do you remember when the hill was green, ",
      "tones": {
        "anger": {
          "score": 0.036191
        },
        "disgust": {
          "score": 0.124269
        },
        "fear": {
          "score": 0.103905
        },
        "joy": {
          "score": 0.261721
        },
        "sadness": {
          "score": 0.343048
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "And the horseshoe lake was full?",
      "tones": {
        "anger": {
          "score": 0.140447
        },
        "disgust": {
          "score": 0.128411
        },
        "fear": {
          "score": 0.135835
        },
        "joy": {
          "score": 0.188176
        },
        "sadness": {
          "score": 0.326319
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Dry times now",
      "tones": {
        "anger": {
          "score": 0.256875
        },
        "disgust": {
          "score": 0.125176
        },
        "fear": {
          "score": 0.176567
        },
        "joy": {
          "score": 0.087597
        },
        "sadness": {
          "score": 0.358812
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "And the dust is thick on every window sill.",
      "tones": {
        "anger": {
          "score": 0.256932
        },
        "disgust": {
          "score": 0.088949
        },
        "fear": {
          "score": 0.262791
        },
        "joy": {
          "score": 0.061136
        },
        "sadness": {
          "score": 0.359309
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Pins and hummingwire ",
      "tones": {
        "anger": {
          "score": 0.180344
        },
        "disgust": {
          "score": 0.119942
        },
        "fear": {
          "score": 0.167745
        },
        "joy": {
          "score": 0.162364
        },
        "sadness": {
          "score": 0.309797
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Cut across the plains outside.",
      "tones": {
        "anger": {
          "score": 0.104803
        },
        "disgust": {
          "score": 0.265184
        },
        "fear": {
          "score": 0.47501
        },
        "joy": {
          "score": 0.006549
        },
        "sadness": {
          "score": 0.276761
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "There could be a call tonight.",
      "tones": {
        "anger": {
          "score": 0.102585
        },
        "disgust": {
          "score": 0.085281
        },
        "fear": {
          "score": 0.174778
        },
        "joy": {
          "score": 0.171264
        },
        "sadness": {
          "score": 0.381571
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Out in the yard by the pepper trees, ",
      "tones": {
        "anger": {
          "score": 0.113995
        },
        "disgust": {
          "score": 0.088919
        },
        "fear": {
          "score": 0.18487
        },
        "joy": {
          "score": 0.301657
        },
        "sadness": {
          "score": 0.183816
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "We buried that little box - ",
      "tones": {
        "anger": {
          "score": 0.150085
        },
        "disgust": {
          "score": 0.051891
        },
        "fear": {
          "score": 0.257794
        },
        "joy": {
          "score": 0.026186
        },
        "sadness": {
          "score": 0.556858
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "You spent the day on dovetail joins, ",
      "tones": {
        "anger": {
          "score": 0.076699
        },
        "disgust": {
          "score": 0.026223
        },
        "fear": {
          "score": 0.128519
        },
        "joy": {
          "score": 0.496202
        },
        "sadness": {
          "score": 0.112892
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "As I wept against the rocks.",
      "tones": {
        "anger": {
          "score": 0.138648
        },
        "disgust": {
          "score": 0.071615
        },
        "fear": {
          "score": 0.154645
        },
        "joy": {
          "score": 0.24773
        },
        "sadness": {
          "score": 0.268652
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Inside there lies: ",
      "tones": {
        "anger": {
          "score": 0.223187
        },
        "disgust": {
          "score": 0.272935
        },
        "fear": {
          "score": 0.083947
        },
        "joy": {
          "score": 0.063809
        },
        "sadness": {
          "score": 0.401177
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "All we cannot love.",
      "tones": {
        "anger": {
          "score": 0.159172
        },
        "disgust": {
          "score": 0.054967
        },
        "fear": {
          "score": 0.374125
        },
        "joy": {
          "score": 0.141955
        },
        "sadness": {
          "score": 0.220239
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Inside I keep: ",
      "tones": {
        "anger": {
          "score": 0.192438
        },
        "disgust": {
          "score": 0.140039
        },
        "fear": {
          "score": 0.064681
        },
        "joy": {
          "score": 0.119399
        },
        "sadness": {
          "score": 0.443662
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "All that I love.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0.9
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Pins and hummingwire ",
      "tones": {
        "anger": {
          "score": 0.180344
        },
        "disgust": {
          "score": 0.119942
        },
        "fear": {
          "score": 0.167745
        },
        "joy": {
          "score": 0.162364
        },
        "sadness": {
          "score": 0.309797
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Cut across the plains outside.",
      "tones": {
        "anger": {
          "score": 0.104803
        },
        "disgust": {
          "score": 0.265184
        },
        "fear": {
          "score": 0.47501
        },
        "joy": {
          "score": 0.006549
        },
        "sadness": {
          "score": 0.276761
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "There could be a call tonight.",
      "tones": {
        "anger": {
          "score": 0.102585
        },
        "disgust": {
          "score": 0.085281
        },
        "fear": {
          "score": 0.174778
        },
        "joy": {
          "score": 0.171264
        },
        "sadness": {
          "score": 0.381571
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Oh darkness, ",
      "tones": {
        "anger": {
          "score": 0.219768
        },
        "disgust": {
          "score": 0.05927
        },
        "fear": {
          "score": 0.468933
        },
        "joy": {
          "score": 0.003422
        },
        "sadness": {
          "score": 0.343651
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Oh deathland, ",
      "tones": {
        "anger": {
          "score": 0.248709
        },
        "disgust": {
          "score": 0.070631
        },
        "fear": {
          "score": 0.529679
        },
        "joy": {
          "score": 0.013421
        },
        "sadness": {
          "score": 0.226966
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Oh river of joy; ",
      "tones": {
        "anger": {
          "score": 0.058129
        },
        "disgust": {
          "score": 0.016003
        },
        "fear": {
          "score": 0.092978
        },
        "joy": {
          "score": 0.686458
        },
        "sadness": {
          "score": 0.026167
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Come bury me, ",
      "tones": {
        "anger": {
          "score": 0.099326
        },
        "disgust": {
          "score": 0.077055
        },
        "fear": {
          "score": 0.186678
        },
        "joy": {
          "score": 0.110654
        },
        "sadness": {
          "score": 0.480051
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Come swallow me, ",
      "tones": {
        "anger": {
          "score": 0.122442
        },
        "disgust": {
          "score": 0.091488
        },
        "fear": {
          "score": 0.178273
        },
        "joy": {
          "score": 0.228715
        },
        "sadness": {
          "score": 0.273564
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Come take me to that boy.",
      "tones": {
        "anger": {
          "score": 0.119091
        },
        "disgust": {
          "score": 0.158356
        },
        "fear": {
          "score": 0.125408
        },
        "joy": {
          "score": 0.226383
        },
        "sadness": {
          "score": 0.276836
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Pins and hummmingwire, ",
      "tones": {
        "anger": {
          "score": 0.1813
        },
        "disgust": {
          "score": 0.117215
        },
        "fear": {
          "score": 0.170648
        },
        "joy": {
          "score": 0.160155
        },
        "sadness": {
          "score": 0.311893
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "Cut across the plains outside.",
      "tones": {
        "anger": {
          "score": 0.104803
        },
        "disgust": {
          "score": 0.265184
        },
        "fear": {
          "score": 0.47501
        },
        "joy": {
          "score": 0.006549
        },
        "sadness": {
          "score": 0.276761
        }
      }
    },
    {
      "title": "Pins & Hummingwire",
      "recordingId": "590d63e29023bb7ae02a43c1",
      "text": "There could be a call tonight.",
      "tones": {
        "anger": {
          "score": 0.102585
        },
        "disgust": {
          "score": 0.085281
        },
        "fear": {
          "score": 0.174778
        },
        "joy": {
          "score": 0.171264
        },
        "sadness": {
          "score": 0.381571
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "As sure as wood will rot in the rain,",
      "tones": {
        "anger": {
          "score": 0.202768
        },
        "disgust": {
          "score": 0.06955
        },
        "fear": {
          "score": 0.392508
        },
        "joy": {
          "score": 0.017269
        },
        "sadness": {
          "score": 0.393708
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Some things will never be the same:",
      "tones": {
        "anger": {
          "score": 0.089467
        },
        "disgust": {
          "score": 0.069378
        },
        "fear": {
          "score": 0.155445
        },
        "joy": {
          "score": 0.347792
        },
        "sadness": {
          "score": 0.191579
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Like you and me,",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0.9
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "And the rising sea.",
      "tones": {
        "anger": {
          "score": 0.190072
        },
        "disgust": {
          "score": 0.197137
        },
        "fear": {
          "score": 0.238419
        },
        "joy": {
          "score": 0.210749
        },
        "sadness": {
          "score": 0.109101
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Some things roll on,",
      "tones": {
        "anger": {
          "score": 0.110036
        },
        "disgust": {
          "score": 0.099694
        },
        "fear": {
          "score": 0.164335
        },
        "joy": {
          "score": 0.258915
        },
        "sadness": {
          "score": 0.250328
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Some things run out.",
      "tones": {
        "anger": {
          "score": 0.104377
        },
        "disgust": {
          "score": 0.047728
        },
        "fear": {
          "score": 0.232272
        },
        "joy": {
          "score": 0.255965
        },
        "sadness": {
          "score": 0.23555
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "You can see the patterns from the old lookout:",
      "tones": {
        "anger": {
          "score": 0.095781
        },
        "disgust": {
          "score": 0.186387
        },
        "fear": {
          "score": 0.119149
        },
        "joy": {
          "score": 0.247137
        },
        "sadness": {
          "score": 0.253017
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Tracks in the grass,",
      "tones": {
        "anger": {
          "score": 0.179073
        },
        "disgust": {
          "score": 0.076722
        },
        "fear": {
          "score": 0.168225
        },
        "joy": {
          "score": 0.336073
        },
        "sadness": {
          "score": 0.111203
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Where we used to pass",
      "tones": {
        "anger": {
          "score": 0.091516
        },
        "disgust": {
          "score": 0.430961
        },
        "fear": {
          "score": 0.035613
        },
        "joy": {
          "score": 0.130201
        },
        "sadness": {
          "score": 0.298799
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Over and over",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Again.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "There is only so much time",
      "tones": {
        "anger": {
          "score": 0.077437
        },
        "disgust": {
          "score": 0.058166
        },
        "fear": {
          "score": 0.113597
        },
        "joy": {
          "score": 0.135934
        },
        "sadness": {
          "score": 0.531415
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Pulling like a fishing line,",
      "tones": {
        "anger": {
          "score": 0.220076
        },
        "disgust": {
          "score": 0.289356
        },
        "fear": {
          "score": 0.103638
        },
        "joy": {
          "score": 0.094198
        },
        "sadness": {
          "score": 0.31588
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Whether I'm right there on the reel,",
      "tones": {
        "anger": {
          "score": 0.07932
        },
        "disgust": {
          "score": 0.096904
        },
        "fear": {
          "score": 0.091043
        },
        "joy": {
          "score": 0.429625
        },
        "sadness": {
          "score": 0.152928
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "It's the hook I always feel.",
      "tones": {
        "anger": {
          "score": 0.112865
        },
        "disgust": {
          "score": 0.060108
        },
        "fear": {
          "score": 0.151354
        },
        "joy": {
          "score": 0.136408
        },
        "sadness": {
          "score": 0.466824
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "So I lay my bed",
      "tones": {
        "anger": {
          "score": 0.070894
        },
        "disgust": {
          "score": 0.016435
        },
        "fear": {
          "score": 0.211443
        },
        "joy": {
          "score": 0.307691
        },
        "sadness": {
          "score": 0.239854
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "With sticks and leaves,",
      "tones": {
        "anger": {
          "score": 0.493654
        },
        "disgust": {
          "score": 0.089312
        },
        "fear": {
          "score": 0.236853
        },
        "joy": {
          "score": 0.00247
        },
        "sadness": {
          "score": 0.285289
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "And curl up like an ancient millipede.",
      "tones": {
        "anger": {
          "score": 0.07517
        },
        "disgust": {
          "score": 0.130268
        },
        "fear": {
          "score": 0.047672
        },
        "joy": {
          "score": 0.173121
        },
        "sadness": {
          "score": 0.477957
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "I've got to let this go.",
      "tones": {
        "anger": {
          "score": 0.117244
        },
        "disgust": {
          "score": 0.180768
        },
        "fear": {
          "score": 0.161382
        },
        "joy": {
          "score": 0.214606
        },
        "sadness": {
          "score": 0.247008
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Maybe something will grow,",
      "tones": {
        "anger": {
          "score": 0.190958
        },
        "disgust": {
          "score": 0.105869
        },
        "fear": {
          "score": 0.155783
        },
        "joy": {
          "score": 0.199185
        },
        "sadness": {
          "score": 0.265209
        }
      }
    },
    {
      "title": "The Hook",
      "recordingId": "590d63e29023bb7ae02a43d1",
      "text": "Or take me over again.",
      "tones": {
        "anger": {
          "score": 0.207499
        },
        "disgust": {
          "score": 0.225631
        },
        "fear": {
          "score": 0.235127
        },
        "joy": {
          "score": 0.1064
        },
        "sadness": {
          "score": 0.241165
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Dust off the picture books,",
      "tones": {
        "anger": {
          "score": 0.147213
        },
        "disgust": {
          "score": 0.173884
        },
        "fear": {
          "score": 0.129412
        },
        "joy": {
          "score": 0.136403
        },
        "sadness": {
          "score": 0.374091
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Creaking spine as pages fall",
      "tones": {
        "anger": {
          "score": 0.202589
        },
        "disgust": {
          "score": 0.201502
        },
        "fear": {
          "score": 0.234771
        },
        "joy": {
          "score": 0.013601
        },
        "sadness": {
          "score": 0.450716
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "In the hallway dancing.",
      "tones": {
        "anger": {
          "score": 0.049294
        },
        "disgust": {
          "score": 0.03551
        },
        "fear": {
          "score": 0.082245
        },
        "joy": {
          "score": 0.576531
        },
        "sadness": {
          "score": 0.105094
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Your coat hangs behind the floor,",
      "tones": {
        "anger": {
          "score": 0.348481
        },
        "disgust": {
          "score": 0.384071
        },
        "fear": {
          "score": 0.135613
        },
        "joy": {
          "score": 0.050369
        },
        "sadness": {
          "score": 0.176696
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "I stand beside it in the hall,",
      "tones": {
        "anger": {
          "score": 0.224861
        },
        "disgust": {
          "score": 0.281914
        },
        "fear": {
          "score": 0.085659
        },
        "joy": {
          "score": 0.195569
        },
        "sadness": {
          "score": 0.166242
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Loose threads fall together.",
      "tones": {
        "anger": {
          "score": 0.11322
        },
        "disgust": {
          "score": 0.116718
        },
        "fear": {
          "score": 0.258224
        },
        "joy": {
          "score": 0.043755
        },
        "sadness": {
          "score": 0.504944
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Leaves fall around my shoes",
      "tones": {
        "anger": {
          "score": 0.11835
        },
        "disgust": {
          "score": 0.043308
        },
        "fear": {
          "score": 0.363214
        },
        "joy": {
          "score": 0.23246
        },
        "sadness": {
          "score": 0.138124
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Cushioning my soles,",
      "tones": {
        "anger": {
          "score": 0.166139
        },
        "disgust": {
          "score": 0.121746
        },
        "fear": {
          "score": 0.170343
        },
        "joy": {
          "score": 0.174536
        },
        "sadness": {
          "score": 0.29968
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Aimless walks in winter.",
      "tones": {
        "anger": {
          "score": 0.102538
        },
        "disgust": {
          "score": 0.10755
        },
        "fear": {
          "score": 0.110936
        },
        "joy": {
          "score": 0.047714
        },
        "sadness": {
          "score": 0.641474
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Clothed piled in plastic bags",
      "tones": {
        "anger": {
          "score": 0.396243
        },
        "disgust": {
          "score": 0.235567
        },
        "fear": {
          "score": 0.135377
        },
        "joy": {
          "score": 0.098021
        },
        "sadness": {
          "score": 0.163005
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "I meant to throw away,",
      "tones": {
        "anger": {
          "score": 0.18511
        },
        "disgust": {
          "score": 0.401228
        },
        "fear": {
          "score": 0.071463
        },
        "joy": {
          "score": 0.005298
        },
        "sadness": {
          "score": 0.461611
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Are they useful,",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Am I grieving?",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0.9
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.9
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Go.",
      "tones": {
        "anger": {
          "score": 0.105908
        },
        "disgust": {
          "score": 0.041259
        },
        "fear": {
          "score": 0.40781
        },
        "joy": {
          "score": 0.035164
        },
        "sadness": {
          "score": 0.443635
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Why did you go?",
      "tones": {
        "anger": {
          "score": 0.1165
        },
        "disgust": {
          "score": 0.043498
        },
        "fear": {
          "score": 0.41586
        },
        "joy": {
          "score": 0.023586
        },
        "sadness": {
          "score": 0.450395
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "After four years on the run,",
      "tones": {
        "anger": {
          "score": 0.085983
        },
        "disgust": {
          "score": 0.077946
        },
        "fear": {
          "score": 0.134316
        },
        "joy": {
          "score": 0.202783
        },
        "sadness": {
          "score": 0.388717
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Why did you come home,",
      "tones": {
        "anger": {
          "score": 0.203381
        },
        "disgust": {
          "score": 0.108358
        },
        "fear": {
          "score": 0.252836
        },
        "joy": {
          "score": 0.1743
        },
        "sadness": {
          "score": 0.204058
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Why did you come home,",
      "tones": {
        "anger": {
          "score": 0.203381
        },
        "disgust": {
          "score": 0.108358
        },
        "fear": {
          "score": 0.252836
        },
        "joy": {
          "score": 0.1743
        },
        "sadness": {
          "score": 0.204058
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "With your bells and mistletoe,",
      "tones": {
        "anger": {
          "score": 0.148908
        },
        "disgust": {
          "score": 0.111045
        },
        "fear": {
          "score": 0.186544
        },
        "joy": {
          "score": 0.17656
        },
        "sadness": {
          "score": 0.305081
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Got your favourites on the wall,",
      "tones": {
        "anger": {
          "score": 0.148556
        },
        "disgust": {
          "score": 0.020659
        },
        "fear": {
          "score": 0.060581
        },
        "joy": {
          "score": 0.42496
        },
        "sadness": {
          "score": 0.176789
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "The fairest of them all,",
      "tones": {
        "anger": {
          "score": 0.127523
        },
        "disgust": {
          "score": 0.124564
        },
        "fear": {
          "score": 0.099007
        },
        "joy": {
          "score": 0.293441
        },
        "sadness": {
          "score": 0.23055
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "You couldn't even call.",
      "tones": {
        "anger": {
          "score": 0.451335
        },
        "disgust": {
          "score": 0.195116
        },
        "fear": {
          "score": 0.108842
        },
        "joy": {
          "score": 0.000138
        },
        "sadness": {
          "score": 0.366053
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "You couldn't even - ",
      "tones": {
        "anger": {
          "score": 0.35275
        },
        "disgust": {
          "score": 0.13155
        },
        "fear": {
          "score": 0.025259
        },
        "joy": {
          "score": 0.00008
        },
        "sadness": {
          "score": 0.577574
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Calls on the telephone,",
      "tones": {
        "anger": {
          "score": 0.226518
        },
        "disgust": {
          "score": 0.175315
        },
        "fear": {
          "score": 0.264561
        },
        "joy": {
          "score": 0.076635
        },
        "sadness": {
          "score": 0.291579
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Strange voice, you're not alone,",
      "tones": {
        "anger": {
          "score": 0.064825
        },
        "disgust": {
          "score": 0.038737
        },
        "fear": {
          "score": 0.366053
        },
        "joy": {
          "score": 0.180218
        },
        "sadness": {
          "score": 0.258911
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "I wish I was dreaming.",
      "tones": {
        "anger": {
          "score": 0.009795
        },
        "disgust": {
          "score": 0.013911
        },
        "fear": {
          "score": 0.300979
        },
        "joy": {
          "score": 0.10333
        },
        "sadness": {
          "score": 0.508871
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Waves wash over me,",
      "tones": {
        "anger": {
          "score": 0.18081
        },
        "disgust": {
          "score": 0.412483
        },
        "fear": {
          "score": 0.221645
        },
        "joy": {
          "score": 0.113287
        },
        "sadness": {
          "score": 0.108239
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Down here I feel free,",
      "tones": {
        "anger": {
          "score": 0.039201
        },
        "disgust": {
          "score": 0.008559
        },
        "fear": {
          "score": 0.489921
        },
        "joy": {
          "score": 0.066386
        },
        "sadness": {
          "score": 0.378265
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "I can't hold my breathing.",
      "tones": {
        "anger": {
          "score": 0.42997
        },
        "disgust": {
          "score": 0.193672
        },
        "fear": {
          "score": 0.213653
        },
        "joy": {
          "score": 0.033989
        },
        "sadness": {
          "score": 0.221242
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Go.",
      "tones": {
        "anger": {
          "score": 0.105908
        },
        "disgust": {
          "score": 0.041259
        },
        "fear": {
          "score": 0.40781
        },
        "joy": {
          "score": 0.035164
        },
        "sadness": {
          "score": 0.443635
        }
      }
    },
    {
      "title": "One by One",
      "recordingId": "590d63e29023bb7ae02a43cd",
      "text": "Why did you go?",
      "tones": {
        "anger": {
          "score": 0.1165
        },
        "disgust": {
          "score": 0.043498
        },
        "fear": {
          "score": 0.41586
        },
        "joy": {
          "score": 0.023586
        },
        "sadness": {
          "score": 0.450395
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "I always sew with a double thread,",
      "tones": {
        "anger": {
          "score": 0.266918
        },
        "disgust": {
          "score": 0.12658
        },
        "fear": {
          "score": 0.110786
        },
        "joy": {
          "score": 0.110277
        },
        "sadness": {
          "score": 0.364171
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "A double thread around my neck,",
      "tones": {
        "anger": {
          "score": 0.291799
        },
        "disgust": {
          "score": 0.071754
        },
        "fear": {
          "score": 0.417484
        },
        "joy": {
          "score": 0.064171
        },
        "sadness": {
          "score": 0.189942
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "Keeps me strong,",
      "tones": {
        "anger": {
          "score": 0.094904
        },
        "disgust": {
          "score": 0.107124
        },
        "fear": {
          "score": 0.065525
        },
        "joy": {
          "score": 0.360453
        },
        "sadness": {
          "score": 0.223257
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "Keeps my head,",
      "tones": {
        "anger": {
          "score": 0.165041
        },
        "disgust": {
          "score": 0.164429
        },
        "fear": {
          "score": 0.208894
        },
        "joy": {
          "score": 0.065274
        },
        "sadness": {
          "score": 0.425677
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "I always sew with a double thread.",
      "tones": {
        "anger": {
          "score": 0.266918
        },
        "disgust": {
          "score": 0.12658
        },
        "fear": {
          "score": 0.110786
        },
        "joy": {
          "score": 0.110277
        },
        "sadness": {
          "score": 0.364171
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "My mother taught me how to sew,",
      "tones": {
        "anger": {
          "score": 0.178035
        },
        "disgust": {
          "score": 0.169074
        },
        "fear": {
          "score": 0.054097
        },
        "joy": {
          "score": 0.273886
        },
        "sadness": {
          "score": 0.215832
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "I watched her well, as sisters know; ",
      "tones": {
        "anger": {
          "score": 0.045844
        },
        "disgust": {
          "score": 0.068075
        },
        "fear": {
          "score": 0.032613
        },
        "joy": {
          "score": 0.405274
        },
        "sadness": {
          "score": 0.273629
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "I still heed a caution now, ",
      "tones": {
        "anger": {
          "score": 0.164678
        },
        "disgust": {
          "score": 0.130508
        },
        "fear": {
          "score": 0.294928
        },
        "joy": {
          "score": 0.03259
        },
        "sadness": {
          "score": 0.440924
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "As you can see my furrowed brow.",
      "tones": {
        "anger": {
          "score": 0.069634
        },
        "disgust": {
          "score": 0.299119
        },
        "fear": {
          "score": 0.055466
        },
        "joy": {
          "score": 0.355259
        },
        "sadness": {
          "score": 0.111098
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "There were many worries grown,",
      "tones": {
        "anger": {
          "score": 0.086664
        },
        "disgust": {
          "score": 0.086108
        },
        "fear": {
          "score": 0.733707
        },
        "joy": {
          "score": 0.008669
        },
        "sadness": {
          "score": 0.154781
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "Lessons lost,",
      "tones": {
        "anger": {
          "score": 0.145358
        },
        "disgust": {
          "score": 0.033252
        },
        "fear": {
          "score": 0.230073
        },
        "joy": {
          "score": 0.005922
        },
        "sadness": {
          "score": 0.643893
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "Overturned,",
      "tones": {
        "anger": {
          "score": 0.65
        },
        "disgust": {
          "score": 0.7625
        },
        "fear": {
          "score": 0.70625
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.753125
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "But I have learned through my own fault,",
      "tones": {
        "anger": {
          "score": 0.339184
        },
        "disgust": {
          "score": 0.115229
        },
        "fear": {
          "score": 0.294763
        },
        "joy": {
          "score": 0.055339
        },
        "sadness": {
          "score": 0.247918
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "And so the thread is double taut.",
      "tones": {
        "anger": {
          "score": 0.275735
        },
        "disgust": {
          "score": 0.176535
        },
        "fear": {
          "score": 0.131326
        },
        "joy": {
          "score": 0.103754
        },
        "sadness": {
          "score": 0.313331
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "I always sew with a double thread,",
      "tones": {
        "anger": {
          "score": 0.266918
        },
        "disgust": {
          "score": 0.12658
        },
        "fear": {
          "score": 0.110786
        },
        "joy": {
          "score": 0.110277
        },
        "sadness": {
          "score": 0.364171
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "A double thread around my neck,",
      "tones": {
        "anger": {
          "score": 0.291799
        },
        "disgust": {
          "score": 0.071754
        },
        "fear": {
          "score": 0.417484
        },
        "joy": {
          "score": 0.064171
        },
        "sadness": {
          "score": 0.189942
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "Keeps me strong, ",
      "tones": {
        "anger": {
          "score": 0.094904
        },
        "disgust": {
          "score": 0.107124
        },
        "fear": {
          "score": 0.065525
        },
        "joy": {
          "score": 0.360453
        },
        "sadness": {
          "score": 0.223257
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "Keeps my head,",
      "tones": {
        "anger": {
          "score": 0.165041
        },
        "disgust": {
          "score": 0.164429
        },
        "fear": {
          "score": 0.208894
        },
        "joy": {
          "score": 0.065274
        },
        "sadness": {
          "score": 0.425677
        }
      }
    },
    {
      "title": "Double Thread",
      "recordingId": "590d63e29023bb7ae02a43c6",
      "text": "I always sew with a double thread.",
      "tones": {
        "anger": {
          "score": 0.266918
        },
        "disgust": {
          "score": 0.12658
        },
        "fear": {
          "score": 0.110786
        },
        "joy": {
          "score": 0.110277
        },
        "sadness": {
          "score": 0.364171
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Confined and realigned ",
      "tones": {
        "anger": {
          "score": 0.189104
        },
        "disgust": {
          "score": 0.113685
        },
        "fear": {
          "score": 0.27975
        },
        "joy": {
          "score": 0.051976
        },
        "sadness": {
          "score": 0.405062
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Up to your neck,",
      "tones": {
        "anger": {
          "score": 0.194424
        },
        "disgust": {
          "score": 0.042225
        },
        "fear": {
          "score": 0.632766
        },
        "joy": {
          "score": 0.031956
        },
        "sadness": {
          "score": 0.148643
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Up to your neck into the brine.",
      "tones": {
        "anger": {
          "score": 0.194424
        },
        "disgust": {
          "score": 0.042225
        },
        "fear": {
          "score": 0.632766
        },
        "joy": {
          "score": 0.031956
        },
        "sadness": {
          "score": 0.148643
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Defied, you realise you're holding hands ",
      "tones": {
        "anger": {
          "score": 0.050864
        },
        "disgust": {
          "score": 0.048165
        },
        "fear": {
          "score": 0.477693
        },
        "joy": {
          "score": 0.081679
        },
        "sadness": {
          "score": 0.324118
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "With the ones who you despise.",
      "tones": {
        "anger": {
          "score": 0.270231
        },
        "disgust": {
          "score": 0.26444
        },
        "fear": {
          "score": 0.169912
        },
        "joy": {
          "score": 0.044059
        },
        "sadness": {
          "score": 0.332228
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "A light glints from the shore, ",
      "tones": {
        "anger": {
          "score": 0.07487
        },
        "disgust": {
          "score": 0.145589
        },
        "fear": {
          "score": 0.224808
        },
        "joy": {
          "score": 0.253214
        },
        "sadness": {
          "score": 0.201047
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "There's only one, ",
      "tones": {
        "anger": {
          "score": 0.162106
        },
        "disgust": {
          "score": 0.089282
        },
        "fear": {
          "score": 0.203148
        },
        "joy": {
          "score": 0.098169
        },
        "sadness": {
          "score": 0.425495
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "There's only one who you adore.",
      "tones": {
        "anger": {
          "score": 0.114333
        },
        "disgust": {
          "score": 0.067845
        },
        "fear": {
          "score": 0.102265
        },
        "joy": {
          "score": 0.309476
        },
        "sadness": {
          "score": 0.260393
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "You couldn't wait to see them, ",
      "tones": {
        "anger": {
          "score": 0.061014
        },
        "disgust": {
          "score": 0.065364
        },
        "fear": {
          "score": 0.051852
        },
        "joy": {
          "score": 0.636389
        },
        "sadness": {
          "score": 0.057486
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "You couldn't wait to see them all.",
      "tones": {
        "anger": {
          "score": 0.061014
        },
        "disgust": {
          "score": 0.065364
        },
        "fear": {
          "score": 0.051852
        },
        "joy": {
          "score": 0.636389
        },
        "sadness": {
          "score": 0.057486
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Controlled, the drugs take hold, ",
      "tones": {
        "anger": {
          "score": 0.356485
        },
        "disgust": {
          "score": 0.118884
        },
        "fear": {
          "score": 0.303505
        },
        "joy": {
          "score": 0.001506
        },
        "sadness": {
          "score": 0.337894
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Your bloodied hands were just doing what they're told.",
      "tones": {
        "anger": {
          "score": 0.218377
        },
        "disgust": {
          "score": 0.379236
        },
        "fear": {
          "score": 0.270776
        },
        "joy": {
          "score": 0.058134
        },
        "sadness": {
          "score": 0.164264
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Admired and told to stand, ",
      "tones": {
        "anger": {
          "score": 0.230541
        },
        "disgust": {
          "score": 0.117028
        },
        "fear": {
          "score": 0.022662
        },
        "joy": {
          "score": 0.233332
        },
        "sadness": {
          "score": 0.286704
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Your heavy heart is the weight of their demands.",
      "tones": {
        "anger": {
          "score": 0.014643
        },
        "disgust": {
          "score": 0.050042
        },
        "fear": {
          "score": 0.116579
        },
        "joy": {
          "score": 0.164116
        },
        "sadness": {
          "score": 0.541063
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Rest behind your weary eyes; ",
      "tones": {
        "anger": {
          "score": 0.031215
        },
        "disgust": {
          "score": 0.316474
        },
        "fear": {
          "score": 0.175871
        },
        "joy": {
          "score": 0.009368
        },
        "sadness": {
          "score": 0.56685
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Up to their necks,",
      "tones": {
        "anger": {
          "score": 0.194424
        },
        "disgust": {
          "score": 0.042225
        },
        "fear": {
          "score": 0.632766
        },
        "joy": {
          "score": 0.031956
        },
        "sadness": {
          "score": 0.148643
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Up to their necks in all their lies.",
      "tones": {
        "anger": {
          "score": 0.287394
        },
        "disgust": {
          "score": 0.100169
        },
        "fear": {
          "score": 0.559442
        },
        "joy": {
          "score": 0.011438
        },
        "sadness": {
          "score": 0.145601
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "They couldn't wait to see you,",
      "tones": {
        "anger": {
          "score": 0.061014
        },
        "disgust": {
          "score": 0.065364
        },
        "fear": {
          "score": 0.051852
        },
        "joy": {
          "score": 0.636389
        },
        "sadness": {
          "score": 0.057486
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "They couldn't wait to see you fall.",
      "tones": {
        "anger": {
          "score": 0.037596
        },
        "disgust": {
          "score": 0.051209
        },
        "fear": {
          "score": 0.166926
        },
        "joy": {
          "score": 0.492088
        },
        "sadness": {
          "score": 0.098771
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Their sighs, their whispered lies, ",
      "tones": {
        "anger": {
          "score": 0.24243
        },
        "disgust": {
          "score": 0.139191
        },
        "fear": {
          "score": 0.183693
        },
        "joy": {
          "score": 0.004115
        },
        "sadness": {
          "score": 0.528795
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Your sweaty hands, ",
      "tones": {
        "anger": {
          "score": 0.018912
        },
        "disgust": {
          "score": 0.33802
        },
        "fear": {
          "score": 0.292704
        },
        "joy": {
          "score": 0.236514
        },
        "sadness": {
          "score": 0.056644
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Their pathetic alibis.",
      "tones": {
        "anger": {
          "score": 0.439296
        },
        "disgust": {
          "score": 0.454982
        },
        "fear": {
          "score": 0.049942
        },
        "joy": {
          "score": 0.001239
        },
        "sadness": {
          "score": 0.206345
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Tonight you're satisfied; ",
      "tones": {
        "anger": {
          "score": 0.019642
        },
        "disgust": {
          "score": 0.055111
        },
        "fear": {
          "score": 0.03808
        },
        "joy": {
          "score": 0.628466
        },
        "sadness": {
          "score": 0.115853
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Up to their necks,",
      "tones": {
        "anger": {
          "score": 0.194424
        },
        "disgust": {
          "score": 0.042225
        },
        "fear": {
          "score": 0.632766
        },
        "joy": {
          "score": 0.031956
        },
        "sadness": {
          "score": 0.148643
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Up to their necks into the fire.",
      "tones": {
        "anger": {
          "score": 0.429685
        },
        "disgust": {
          "score": 0.076175
        },
        "fear": {
          "score": 0.39284
        },
        "joy": {
          "score": 0.035414
        },
        "sadness": {
          "score": 0.140134
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "An empty glass, ",
      "tones": {
        "anger": {
          "score": 0.08927
        },
        "disgust": {
          "score": 0.247817
        },
        "fear": {
          "score": 0.066263
        },
        "joy": {
          "score": 0.003858
        },
        "sadness": {
          "score": 0.680474
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "A shattered heart",
      "tones": {
        "anger": {
          "score": 0.000351
        },
        "disgust": {
          "score": 0.001915
        },
        "fear": {
          "score": 0.030568
        },
        "joy": {
          "score": 0.308303
        },
        "sadness": {
          "score": 0.462115
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "Left at the bar,",
      "tones": {
        "anger": {
          "score": 0.134046
        },
        "disgust": {
          "score": 0.20992
        },
        "fear": {
          "score": 0.124138
        },
        "joy": {
          "score": 0.007426
        },
        "sadness": {
          "score": 0.614677
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "What is left won't get you far.",
      "tones": {
        "anger": {
          "score": 0.261375
        },
        "disgust": {
          "score": 0.153681
        },
        "fear": {
          "score": 0.184196
        },
        "joy": {
          "score": 0.001286
        },
        "sadness": {
          "score": 0.507205
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "And you couldn't wait to see them, ",
      "tones": {
        "anger": {
          "score": 0.061014
        },
        "disgust": {
          "score": 0.065364
        },
        "fear": {
          "score": 0.051852
        },
        "joy": {
          "score": 0.636389
        },
        "sadness": {
          "score": 0.057486
        }
      }
    },
    {
      "title": "Up To Your Neck",
      "recordingId": "590d63e29023bb7ae02a43bc",
      "text": "You couldn't wait to see them fall.",
      "tones": {
        "anger": {
          "score": 0.037596
        },
        "disgust": {
          "score": 0.051209
        },
        "fear": {
          "score": 0.166926
        },
        "joy": {
          "score": 0.492088
        },
        "sadness": {
          "score": 0.098771
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Rust red, at the start of May,",
      "tones": {
        "anger": {
          "score": 0.208816
        },
        "disgust": {
          "score": 0.085877
        },
        "fear": {
          "score": 0.372206
        },
        "joy": {
          "score": 0.171682
        },
        "sadness": {
          "score": 0.109497
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Sun turns your sap away.",
      "tones": {
        "anger": {
          "score": 0.060892
        },
        "disgust": {
          "score": 0.124451
        },
        "fear": {
          "score": 0.227077
        },
        "joy": {
          "score": 0.016899
        },
        "sadness": {
          "score": 0.629347
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Soft wood,",
      "tones": {
        "anger": {
          "score": 0.160724
        },
        "disgust": {
          "score": 0.121777
        },
        "fear": {
          "score": 0.173532
        },
        "joy": {
          "score": 0.174464
        },
        "sadness": {
          "score": 0.301693
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Shedding spine - ",
      "tones": {
        "anger": {
          "score": 0.25503
        },
        "disgust": {
          "score": 0.180983
        },
        "fear": {
          "score": 0.156673
        },
        "joy": {
          "score": 0.085129
        },
        "sadness": {
          "score": 0.341098
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "You take me",
      "tones": {
        "anger": {
          "score": 0.207174
        },
        "disgust": {
          "score": 0.227353
        },
        "fear": {
          "score": 0.232214
        },
        "joy": {
          "score": 0.107812
        },
        "sadness": {
          "score": 0.240185
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "To the other side.",
      "tones": {
        "anger": {
          "score": 0.075547
        },
        "disgust": {
          "score": 0.311205
        },
        "fear": {
          "score": 0.195373
        },
        "joy": {
          "score": 0.143935
        },
        "sadness": {
          "score": 0.256971
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "This is the first month I ever knew,",
      "tones": {
        "anger": {
          "score": 0.136779
        },
        "disgust": {
          "score": 0.156729
        },
        "fear": {
          "score": 0.029732
        },
        "joy": {
          "score": 0.294267
        },
        "sadness": {
          "score": 0.256031
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "No spring child,",
      "tones": {
        "anger": {
          "score": 0.129683
        },
        "disgust": {
          "score": 0.198832
        },
        "fear": {
          "score": 0.216533
        },
        "joy": {
          "score": 0.038443
        },
        "sadness": {
          "score": 0.478257
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Just a season twice removed.",
      "tones": {
        "anger": {
          "score": 0.393313
        },
        "disgust": {
          "score": 0.218087
        },
        "fear": {
          "score": 0.144197
        },
        "joy": {
          "score": 0.015629
        },
        "sadness": {
          "score": 0.338382
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Millipedes, and fallen fruit,",
      "tones": {
        "anger": {
          "score": 0.170954
        },
        "disgust": {
          "score": 0.096811
        },
        "fear": {
          "score": 0.332078
        },
        "joy": {
          "score": 0.084075
        },
        "sadness": {
          "score": 0.322027
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Snails reach:",
      "tones": {
        "anger": {
          "score": 0.243526
        },
        "disgust": {
          "score": 0.13796
        },
        "fear": {
          "score": 0.10845
        },
        "joy": {
          "score": 0.172875
        },
        "sadness": {
          "score": 0.275421
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Silver tracks afoot.",
      "tones": {
        "anger": {
          "score": 0.185561
        },
        "disgust": {
          "score": 0.077477
        },
        "fear": {
          "score": 0.167447
        },
        "joy": {
          "score": 0.330456
        },
        "sadness": {
          "score": 0.111954
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Silver tracks afoot.",
      "tones": {
        "anger": {
          "score": 0.185561
        },
        "disgust": {
          "score": 0.077477
        },
        "fear": {
          "score": 0.167447
        },
        "joy": {
          "score": 0.330456
        },
        "sadness": {
          "score": 0.111954
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "The pond is dim,",
      "tones": {
        "anger": {
          "score": 0.161797
        },
        "disgust": {
          "score": 0.123633
        },
        "fear": {
          "score": 0.171388
        },
        "joy": {
          "score": 0.175073
        },
        "sadness": {
          "score": 0.300351
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "But it's yawning wide;",
      "tones": {
        "anger": {
          "score": 0.186669
        },
        "disgust": {
          "score": 0.168719
        },
        "fear": {
          "score": 0.205215
        },
        "joy": {
          "score": 0.093772
        },
        "sadness": {
          "score": 0.352464
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "You'll take me",
      "tones": {
        "anger": {
          "score": 0.214884
        },
        "disgust": {
          "score": 0.229607
        },
        "fear": {
          "score": 0.236474
        },
        "joy": {
          "score": 0.099396
        },
        "sadness": {
          "score": 0.242962
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "To the other side.",
      "tones": {
        "anger": {
          "score": 0.075547
        },
        "disgust": {
          "score": 0.311205
        },
        "fear": {
          "score": 0.195373
        },
        "joy": {
          "score": 0.143935
        },
        "sadness": {
          "score": 0.256971
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Make a boat from that husk of bark,",
      "tones": {
        "anger": {
          "score": 0.156532
        },
        "disgust": {
          "score": 0.067386
        },
        "fear": {
          "score": 0.452129
        },
        "joy": {
          "score": 0.15891
        },
        "sadness": {
          "score": 0.111838
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "All along the bank,",
      "tones": {
        "anger": {
          "score": 0.150339
        },
        "disgust": {
          "score": 0.014687
        },
        "fear": {
          "score": 0.150844
        },
        "joy": {
          "score": 0.281981
        },
        "sadness": {
          "score": 0.257263
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Here - you see the mark,",
      "tones": {
        "anger": {
          "score": 0.072981
        },
        "disgust": {
          "score": 0.274619
        },
        "fear": {
          "score": 0.055635
        },
        "joy": {
          "score": 0.232294
        },
        "sadness": {
          "score": 0.276768
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "There - you see the mark.",
      "tones": {
        "anger": {
          "score": 0.072981
        },
        "disgust": {
          "score": 0.274619
        },
        "fear": {
          "score": 0.055635
        },
        "joy": {
          "score": 0.232294
        },
        "sadness": {
          "score": 0.276768
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "Moths are here (and their allies);",
      "tones": {
        "anger": {
          "score": 0.174421
        },
        "disgust": {
          "score": 0.097971
        },
        "fear": {
          "score": 0.16899
        },
        "joy": {
          "score": 0.187568
        },
        "sadness": {
          "score": 0.290987
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "You'll take me",
      "tones": {
        "anger": {
          "score": 0.214884
        },
        "disgust": {
          "score": 0.229607
        },
        "fear": {
          "score": 0.236474
        },
        "joy": {
          "score": 0.099396
        },
        "sadness": {
          "score": 0.242962
        }
      }
    },
    {
      "title": "The Other Side",
      "recordingId": "590d63e29023bb7ae02a43cb",
      "text": "To the other side.",
      "tones": {
        "anger": {
          "score": 0.075547
        },
        "disgust": {
          "score": 0.311205
        },
        "fear": {
          "score": 0.195373
        },
        "joy": {
          "score": 0.143935
        },
        "sadness": {
          "score": 0.256971
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Ceiling Rose, Ceiling Rose",
      "tones": {
        "anger": {
          "score": 0.183026
        },
        "disgust": {
          "score": 0.216273
        },
        "fear": {
          "score": 0.270648
        },
        "joy": {
          "score": 0.152331
        },
        "sadness": {
          "score": 0.160016
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Beneath your leaves our secrets unfold,",
      "tones": {
        "anger": {
          "score": 0.154992
        },
        "disgust": {
          "score": 0.064716
        },
        "fear": {
          "score": 0.196176
        },
        "joy": {
          "score": 0.172448
        },
        "sadness": {
          "score": 0.330452
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Ceiling Rose, Ceiling Rose",
      "tones": {
        "anger": {
          "score": 0.183026
        },
        "disgust": {
          "score": 0.216273
        },
        "fear": {
          "score": 0.270648
        },
        "joy": {
          "score": 0.152331
        },
        "sadness": {
          "score": 0.160016
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Beneath your leaves are worries untold.",
      "tones": {
        "anger": {
          "score": 0.066285
        },
        "disgust": {
          "score": 0.013607
        },
        "fear": {
          "score": 0.749041
        },
        "joy": {
          "score": 0.05512
        },
        "sadness": {
          "score": 0.105347
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "I have dreamed, I have slept",
      "tones": {
        "anger": {
          "score": 0.022683
        },
        "disgust": {
          "score": 0.019489
        },
        "fear": {
          "score": 0.336138
        },
        "joy": {
          "score": 0.246486
        },
        "sadness": {
          "score": 0.241128
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "I have sighed, I have kept,",
      "tones": {
        "anger": {
          "score": 0.225077
        },
        "disgust": {
          "score": 0.051272
        },
        "fear": {
          "score": 0.178199
        },
        "joy": {
          "score": 0.004551
        },
        "sadness": {
          "score": 0.610613
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "I have silently wept;",
      "tones": {
        "anger": {
          "score": 0.183577
        },
        "disgust": {
          "score": 0.111758
        },
        "fear": {
          "score": 0.191925
        },
        "joy": {
          "score": 0.056711
        },
        "sadness": {
          "score": 0.480133
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "And you gaze in return with acanthus and fern,",
      "tones": {
        "anger": {
          "score": 0.395447
        },
        "disgust": {
          "score": 0.069722
        },
        "fear": {
          "score": 0.1109
        },
        "joy": {
          "score": 0.138851
        },
        "sadness": {
          "score": 0.23646
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "You remind me that all is a circle and fall  -",
      "tones": {
        "anger": {
          "score": 0.193597
        },
        "disgust": {
          "score": 0.090024
        },
        "fear": {
          "score": 0.166732
        },
        "joy": {
          "score": 0.161774
        },
        "sadness": {
          "score": 0.321407
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Until the dawn.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0.9
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Ceiling Rose, Ceiling Rose",
      "tones": {
        "anger": {
          "score": 0.183026
        },
        "disgust": {
          "score": 0.216273
        },
        "fear": {
          "score": 0.270648
        },
        "joy": {
          "score": 0.152331
        },
        "sadness": {
          "score": 0.160016
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Beneath your leaves our secrets unfold,",
      "tones": {
        "anger": {
          "score": 0.154992
        },
        "disgust": {
          "score": 0.064716
        },
        "fear": {
          "score": 0.196176
        },
        "joy": {
          "score": 0.172448
        },
        "sadness": {
          "score": 0.330452
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Ceiling Rose, Ceiling Rose",
      "tones": {
        "anger": {
          "score": 0.183026
        },
        "disgust": {
          "score": 0.216273
        },
        "fear": {
          "score": 0.270648
        },
        "joy": {
          "score": 0.152331
        },
        "sadness": {
          "score": 0.160016
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Beneath your leaves are vapours of old.",
      "tones": {
        "anger": {
          "score": 0.111468
        },
        "disgust": {
          "score": 0.064503
        },
        "fear": {
          "score": 0.180752
        },
        "joy": {
          "score": 0.338937
        },
        "sadness": {
          "score": 0.163994
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Whether plaster or tin,",
      "tones": {
        "anger": {
          "score": 0.148951
        },
        "disgust": {
          "score": 0.124242
        },
        "fear": {
          "score": 0.166923
        },
        "joy": {
          "score": 0.192065
        },
        "sadness": {
          "score": 0.289338
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Where does the pattern begin?",
      "tones": {
        "anger": {
          "score": 0.077134
        },
        "disgust": {
          "score": 0.073438
        },
        "fear": {
          "score": 0.3126
        },
        "joy": {
          "score": 0.263075
        },
        "sadness": {
          "score": 0.158828
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Pupils mould to your shape",
      "tones": {
        "anger": {
          "score": 0.158671
        },
        "disgust": {
          "score": 0.336731
        },
        "fear": {
          "score": 0.120363
        },
        "joy": {
          "score": 0.142477
        },
        "sadness": {
          "score": 0.232033
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "In the night when I awake.",
      "tones": {
        "anger": {
          "score": 0.104356
        },
        "disgust": {
          "score": 0.028014
        },
        "fear": {
          "score": 0.474184
        },
        "joy": {
          "score": 0.138035
        },
        "sadness": {
          "score": 0.19616
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "You remind me that all is a circle and fall -",
      "tones": {
        "anger": {
          "score": 0.193597
        },
        "disgust": {
          "score": 0.090024
        },
        "fear": {
          "score": 0.166732
        },
        "joy": {
          "score": 0.161774
        },
        "sadness": {
          "score": 0.321407
        }
      }
    },
    {
      "title": "Ceiling Rose",
      "recordingId": "590d63e29023bb7ae02a43d2",
      "text": "Until the dawn.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0.9
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "When the sun is rising east",
      "tones": {
        "anger": {
          "score": 0.091705
        },
        "disgust": {
          "score": 0.086805
        },
        "fear": {
          "score": 0.206179
        },
        "joy": {
          "score": 0.366462
        },
        "sadness": {
          "score": 0.113066
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Won?t you think of me dear Mary",
      "tones": {
        "anger": {
          "score": 0.069731
        },
        "disgust": {
          "score": 0.099386
        },
        "fear": {
          "score": 0.14729
        },
        "joy": {
          "score": 0.421147
        },
        "sadness": {
          "score": 0.119194
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "For the same sun will be setting",
      "tones": {
        "anger": {
          "score": 0.114012
        },
        "disgust": {
          "score": 0.007029
        },
        "fear": {
          "score": 0.032503
        },
        "joy": {
          "score": 0.537719
        },
        "sadness": {
          "score": 0.141176
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Where I lie on distant shore",
      "tones": {
        "anger": {
          "score": 0.30097
        },
        "disgust": {
          "score": 0.241893
        },
        "fear": {
          "score": 0.190025
        },
        "joy": {
          "score": 0.03479
        },
        "sadness": {
          "score": 0.324112
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Every letter you have sent",
      "tones": {
        "anger": {
          "score": 0.168562
        },
        "disgust": {
          "score": 0.093104
        },
        "fear": {
          "score": 0.186531
        },
        "joy": {
          "score": 0.052234
        },
        "sadness": {
          "score": 0.520388
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "I keep folded to my chest",
      "tones": {
        "anger": {
          "score": 0.226105
        },
        "disgust": {
          "score": 0.131766
        },
        "fear": {
          "score": 0.184588
        },
        "joy": {
          "score": 0.126136
        },
        "sadness": {
          "score": 0.305615
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "And I read them in the evening",
      "tones": {
        "anger": {
          "score": 0.089864
        },
        "disgust": {
          "score": 0.097602
        },
        "fear": {
          "score": 0.088508
        },
        "joy": {
          "score": 0.341902
        },
        "sadness": {
          "score": 0.235065
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "When the shells are laid to rest",
      "tones": {
        "anger": {
          "score": 0.154278
        },
        "disgust": {
          "score": 0.039081
        },
        "fear": {
          "score": 0.391416
        },
        "joy": {
          "score": 0.038696
        },
        "sadness": {
          "score": 0.411722
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "And it heartens me to learn",
      "tones": {
        "anger": {
          "score": 0.140734
        },
        "disgust": {
          "score": 0.016757
        },
        "fear": {
          "score": 0.075322
        },
        "joy": {
          "score": 0.45764
        },
        "sadness": {
          "score": 0.143581
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "That you wait for our return",
      "tones": {
        "anger": {
          "score": 0.794899
        },
        "disgust": {
          "score": 0.023929
        },
        "fear": {
          "score": 0.120212
        },
        "joy": {
          "score": 0.017542
        },
        "sadness": {
          "score": 0.081758
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "From hearth to trench so far away",
      "tones": {
        "anger": {
          "score": 0.085385
        },
        "disgust": {
          "score": 0.156173
        },
        "fear": {
          "score": 0.368562
        },
        "joy": {
          "score": 0.008509
        },
        "sadness": {
          "score": 0.475002
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Watching waiting day by day",
      "tones": {
        "anger": {
          "score": 0.465827
        },
        "disgust": {
          "score": 0.07705
        },
        "fear": {
          "score": 0.057301
        },
        "joy": {
          "score": 0.152772
        },
        "sadness": {
          "score": 0.185997
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "The distant call of home",
      "tones": {
        "anger": {
          "score": 0.162454
        },
        "disgust": {
          "score": 0.144624
        },
        "fear": {
          "score": 0.280473
        },
        "joy": {
          "score": 0.101737
        },
        "sadness": {
          "score": 0.309536
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "When the sun is rising east",
      "tones": {
        "anger": {
          "score": 0.091705
        },
        "disgust": {
          "score": 0.086805
        },
        "fear": {
          "score": 0.206179
        },
        "joy": {
          "score": 0.366462
        },
        "sadness": {
          "score": 0.113066
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "At the end of Albert Street",
      "tones": {
        "anger": {
          "score": 0.289956
        },
        "disgust": {
          "score": 0.13692
        },
        "fear": {
          "score": 0.218736
        },
        "joy": {
          "score": 0.024199
        },
        "sadness": {
          "score": 0.411473
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "How I think of you each morning",
      "tones": {
        "anger": {
          "score": 0.076849
        },
        "disgust": {
          "score": 0.198511
        },
        "fear": {
          "score": 0.102498
        },
        "joy": {
          "score": 0.269101
        },
        "sadness": {
          "score": 0.245597
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "And the night that you will greet",
      "tones": {
        "anger": {
          "score": 0.114177
        },
        "disgust": {
          "score": 0.092764
        },
        "fear": {
          "score": 0.189962
        },
        "joy": {
          "score": 0.367846
        },
        "sadness": {
          "score": 0.102574
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "And if there is any good",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0.9
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "You?ll return to where you stood",
      "tones": {
        "anger": {
          "score": 0.576563
        },
        "disgust": {
          "score": 0.160033
        },
        "fear": {
          "score": 0.043354
        },
        "joy": {
          "score": 0.096153
        },
        "sadness": {
          "score": 0.124345
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Not a home is without sorrow",
      "tones": {
        "anger": {
          "score": 0.100709
        },
        "disgust": {
          "score": 0.108531
        },
        "fear": {
          "score": 0.193075
        },
        "joy": {
          "score": 0.027942
        },
        "sadness": {
          "score": 0.613057
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Not a house is without hope",
      "tones": {
        "anger": {
          "score": 0.45293
        },
        "disgust": {
          "score": 0.024546
        },
        "fear": {
          "score": 0.445099
        },
        "joy": {
          "score": 0.043792
        },
        "sadness": {
          "score": 0.08552
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Neighbours gather at the gate",
      "tones": {
        "anger": {
          "score": 0.259833
        },
        "disgust": {
          "score": 0.238233
        },
        "fear": {
          "score": 0.115394
        },
        "joy": {
          "score": 0.121285
        },
        "sadness": {
          "score": 0.262943
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "As we watch and as we wait",
      "tones": {
        "anger": {
          "score": 0.533015
        },
        "disgust": {
          "score": 0.05972
        },
        "fear": {
          "score": 0.075923
        },
        "joy": {
          "score": 0.104255
        },
        "sadness": {
          "score": 0.198552
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Shadows fall from door to door",
      "tones": {
        "anger": {
          "score": 0.103803
        },
        "disgust": {
          "score": 0.067724
        },
        "fear": {
          "score": 0.696571
        },
        "joy": {
          "score": 0.022076
        },
        "sadness": {
          "score": 0.163274
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Things that once were are no more",
      "tones": {
        "anger": {
          "score": 0.084555
        },
        "disgust": {
          "score": 0.077828
        },
        "fear": {
          "score": 0.155941
        },
        "joy": {
          "score": 0.341983
        },
        "sadness": {
          "score": 0.195739
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "The distant call of home",
      "tones": {
        "anger": {
          "score": 0.162454
        },
        "disgust": {
          "score": 0.144624
        },
        "fear": {
          "score": 0.280473
        },
        "joy": {
          "score": 0.101737
        },
        "sadness": {
          "score": 0.309536
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Yet the sun still rises east",
      "tones": {
        "anger": {
          "score": 0.124971
        },
        "disgust": {
          "score": 0.098275
        },
        "fear": {
          "score": 0.246247
        },
        "joy": {
          "score": 0.156375
        },
        "sadness": {
          "score": 0.313433
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Light dapples through the leaves",
      "tones": {
        "anger": {
          "score": 0.053905
        },
        "disgust": {
          "score": 0.047845
        },
        "fear": {
          "score": 0.254579
        },
        "joy": {
          "score": 0.421843
        },
        "sadness": {
          "score": 0.073312
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Of eucalypt and wattle",
      "tones": {
        "anger": {
          "score": 0.164029
        },
        "disgust": {
          "score": 0.124585
        },
        "fear": {
          "score": 0.167962
        },
        "joy": {
          "score": 0.176329
        },
        "sadness": {
          "score": 0.298782
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "As though war had never been",
      "tones": {
        "anger": {
          "score": 0.286716
        },
        "disgust": {
          "score": 0.072623
        },
        "fear": {
          "score": 0.445187
        },
        "joy": {
          "score": 0.026585
        },
        "sadness": {
          "score": 0.2453
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "In the eyes of those returned",
      "tones": {
        "anger": {
          "score": 0.20505
        },
        "disgust": {
          "score": 0.098752
        },
        "fear": {
          "score": 0.225698
        },
        "joy": {
          "score": 0.165145
        },
        "sadness": {
          "score": 0.247931
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Untold visions deeply burned",
      "tones": {
        "anger": {
          "score": 0.207739
        },
        "disgust": {
          "score": 0.092442
        },
        "fear": {
          "score": 0.328285
        },
        "joy": {
          "score": 0.048794
        },
        "sadness": {
          "score": 0.365865
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "A grief that can?t be measured",
      "tones": {
        "anger": {
          "score": 0.129102
        },
        "disgust": {
          "score": 0.052401
        },
        "fear": {
          "score": 0.130964
        },
        "joy": {
          "score": 0.004472
        },
        "sadness": {
          "score": 0.734775
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "For peace we ever yearn",
      "tones": {
        "anger": {
          "score": 0.044742
        },
        "disgust": {
          "score": 0.028618
        },
        "fear": {
          "score": 0.052098
        },
        "joy": {
          "score": 0.578627
        },
        "sadness": {
          "score": 0.137296
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "Oaks and elms form avenues",
      "tones": {
        "anger": {
          "score": 0.149837
        },
        "disgust": {
          "score": 0.058806
        },
        "fear": {
          "score": 0.11164
        },
        "joy": {
          "score": 0.277631
        },
        "sadness": {
          "score": 0.266597
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "In memory grow to honour you",
      "tones": {
        "anger": {
          "score": 0.084799
        },
        "disgust": {
          "score": 0.077245
        },
        "fear": {
          "score": 0.022358
        },
        "joy": {
          "score": 0.258886
        },
        "sadness": {
          "score": 0.407884
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "A magpie sings out to the dawn",
      "tones": {
        "anger": {
          "score": 0.087994
        },
        "disgust": {
          "score": 0.033298
        },
        "fear": {
          "score": 0.068854
        },
        "joy": {
          "score": 0.441377
        },
        "sadness": {
          "score": 0.197641
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "A song for those we mourn",
      "tones": {
        "anger": {
          "score": 0.038938
        },
        "disgust": {
          "score": 0.036102
        },
        "fear": {
          "score": 0.067357
        },
        "joy": {
          "score": 0.048289
        },
        "sadness": {
          "score": 0.780537
        }
      }
    },
    {
      "title": "The Distant Call of Home",
      "recordingId": "590d63e29023bb7ae02a43d4",
      "text": "A distant call from home",
      "tones": {
        "anger": {
          "score": 0.173543
        },
        "disgust": {
          "score": 0.132685
        },
        "fear": {
          "score": 0.292657
        },
        "joy": {
          "score": 0.085938
        },
        "sadness": {
          "score": 0.32666
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "You can run, you can run - ",
      "tones": {
        "anger": {
          "score": 0.158975
        },
        "disgust": {
          "score": 0.072822
        },
        "fear": {
          "score": 0.233011
        },
        "joy": {
          "score": 0.160545
        },
        "sadness": {
          "score": 0.307304
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "But you will never, ever run",
      "tones": {
        "anger": {
          "score": 0.092272
        },
        "disgust": {
          "score": 0.130427
        },
        "fear": {
          "score": 0.195205
        },
        "joy": {
          "score": 0.043221
        },
        "sadness": {
          "score": 0.570005
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "Truly free;",
      "tones": {
        "anger": {
          "score": 0.11169
        },
        "disgust": {
          "score": 0.09248
        },
        "fear": {
          "score": 0.115869
        },
        "joy": {
          "score": 0.345073
        },
        "sadness": {
          "score": 0.193454
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "It breaks my heart,",
      "tones": {
        "anger": {
          "score": 0.006012
        },
        "disgust": {
          "score": 0.032156
        },
        "fear": {
          "score": 0.085147
        },
        "joy": {
          "score": 0.015119
        },
        "sadness": {
          "score": 0.866701
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "Unbridled future's not the plane we see.",
      "tones": {
        "anger": {
          "score": 0.123549
        },
        "disgust": {
          "score": 0.196455
        },
        "fear": {
          "score": 0.112605
        },
        "joy": {
          "score": 0.260104
        },
        "sadness": {
          "score": 0.210395
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "I remind myself,",
      "tones": {
        "anger": {
          "score": 0.092284
        },
        "disgust": {
          "score": 0.090452
        },
        "fear": {
          "score": 0.083758
        },
        "joy": {
          "score": 0.313465
        },
        "sadness": {
          "score": 0.274252
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "That I still",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0.9
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.9
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "Want to grow old;",
      "tones": {
        "anger": {
          "score": 0.16871
        },
        "disgust": {
          "score": 0.275521
        },
        "fear": {
          "score": 0.039138
        },
        "joy": {
          "score": 0.073903
        },
        "sadness": {
          "score": 0.464753
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "From recklessness,",
      "tones": {
        "anger": {
          "score": 0.9
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0.9
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "To blanket,",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "And bowl - ",
      "tones": {
        "anger": {
          "score": 0.127009
        },
        "disgust": {
          "score": 0.191886
        },
        "fear": {
          "score": 0.14755
        },
        "joy": {
          "score": 0.22077
        },
        "sadness": {
          "score": 0.233568
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "Finding a home.",
      "tones": {
        "anger": {
          "score": 0.033242
        },
        "disgust": {
          "score": 0.084273
        },
        "fear": {
          "score": 0.210832
        },
        "joy": {
          "score": 0.344658
        },
        "sadness": {
          "score": 0.183098
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "You can run, you can run - ",
      "tones": {
        "anger": {
          "score": 0.158975
        },
        "disgust": {
          "score": 0.072822
        },
        "fear": {
          "score": 0.233011
        },
        "joy": {
          "score": 0.160545
        },
        "sadness": {
          "score": 0.307304
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "But there will always be a pull at the rein.",
      "tones": {
        "anger": {
          "score": 0.148986
        },
        "disgust": {
          "score": 0.17242
        },
        "fear": {
          "score": 0.18672
        },
        "joy": {
          "score": 0.07509
        },
        "sadness": {
          "score": 0.433986
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "From the heart to the head,",
      "tones": {
        "anger": {
          "score": 0.001842
        },
        "disgust": {
          "score": 0.018165
        },
        "fear": {
          "score": 0.09121
        },
        "joy": {
          "score": 0.193226
        },
        "sadness": {
          "score": 0.550562
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "There is a wilderness of thought,",
      "tones": {
        "anger": {
          "score": 0.049888
        },
        "disgust": {
          "score": 0.026727
        },
        "fear": {
          "score": 0.247092
        },
        "joy": {
          "score": 0.006174
        },
        "sadness": {
          "score": 0.713503
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "Unframed,",
      "tones": {
        "anger": {
          "score": 0.164431
        },
        "disgust": {
          "score": 0.122509
        },
        "fear": {
          "score": 0.170722
        },
        "joy": {
          "score": 0.174629
        },
        "sadness": {
          "score": 0.300138
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "Like a wish, like a hope",
      "tones": {
        "anger": {
          "score": 0.027173
        },
        "disgust": {
          "score": 0.18046
        },
        "fear": {
          "score": 0.155018
        },
        "joy": {
          "score": 0.174642
        },
        "sadness": {
          "score": 0.387245
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "That I know cannot come true;",
      "tones": {
        "anger": {
          "score": 0.033625
        },
        "disgust": {
          "score": 0.165394
        },
        "fear": {
          "score": 0.127379
        },
        "joy": {
          "score": 0.000606
        },
        "sadness": {
          "score": 0.746157
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "I remind myself",
      "tones": {
        "anger": {
          "score": 0.09189
        },
        "disgust": {
          "score": 0.093008
        },
        "fear": {
          "score": 0.081983
        },
        "joy": {
          "score": 0.314678
        },
        "sadness": {
          "score": 0.272864
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "That sometimes it's the things we don't do,",
      "tones": {
        "anger": {
          "score": 0.097268
        },
        "disgust": {
          "score": 0.028319
        },
        "fear": {
          "score": 0.123999
        },
        "joy": {
          "score": 0.131624
        },
        "sadness": {
          "score": 0.533499
        }
      }
    },
    {
      "title": "You Can Run (Fern's Theme)",
      "recordingId": "590d63e29023bb7ae02a43c9",
      "text": "That define us too.",
      "tones": {
        "anger": {
          "score": 0.11572
        },
        "disgust": {
          "score": 0.182381
        },
        "fear": {
          "score": 0.109633
        },
        "joy": {
          "score": 0.261366
        },
        "sadness": {
          "score": 0.22869
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Water reaching to my knees, ",
      "tones": {
        "anger": {
          "score": 0.296931
        },
        "disgust": {
          "score": 0.408489
        },
        "fear": {
          "score": 0.206622
        },
        "joy": {
          "score": 0.027907
        },
        "sadness": {
          "score": 0.188145
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Dragnet silt all in my sleeve, ",
      "tones": {
        "anger": {
          "score": 0.164431
        },
        "disgust": {
          "score": 0.122509
        },
        "fear": {
          "score": 0.170722
        },
        "joy": {
          "score": 0.174629
        },
        "sadness": {
          "score": 0.300138
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "All I know ",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "All I believe, ",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Is your pull ",
      "tones": {
        "anger": {
          "score": 0.112802
        },
        "disgust": {
          "score": 0.197264
        },
        "fear": {
          "score": 0.269712
        },
        "joy": {
          "score": 0.094813
        },
        "sadness": {
          "score": 0.335192
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "And your leave",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.9
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "The Moon has always captured me, ",
      "tones": {
        "anger": {
          "score": 0.042145
        },
        "disgust": {
          "score": 0.076969
        },
        "fear": {
          "score": 0.06471
        },
        "joy": {
          "score": 0.438842
        },
        "sadness": {
          "score": 0.211665
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Oh so close and desolate, ",
      "tones": {
        "anger": {
          "score": 0.162011
        },
        "disgust": {
          "score": 0.072968
        },
        "fear": {
          "score": 0.554539
        },
        "joy": {
          "score": 0.008072
        },
        "sadness": {
          "score": 0.288978
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Known as water's magnet.",
      "tones": {
        "anger": {
          "score": 0.185685
        },
        "disgust": {
          "score": 0.373214
        },
        "fear": {
          "score": 0.131825
        },
        "joy": {
          "score": 0.057014
        },
        "sadness": {
          "score": 0.323106
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "It drags me gently through the reeds, ",
      "tones": {
        "anger": {
          "score": 0.108264
        },
        "disgust": {
          "score": 0.469495
        },
        "fear": {
          "score": 0.398688
        },
        "joy": {
          "score": 0.025728
        },
        "sadness": {
          "score": 0.127476
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Underground through lakes and seas and ",
      "tones": {
        "anger": {
          "score": 0.145929
        },
        "disgust": {
          "score": 0.108186
        },
        "fear": {
          "score": 0.131538
        },
        "joy": {
          "score": 0.259513
        },
        "sadness": {
          "score": 0.241038
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Sedimentary history.",
      "tones": {
        "anger": {
          "score": 0.073036
        },
        "disgust": {
          "score": 0.112726
        },
        "fear": {
          "score": 0.32574
        },
        "joy": {
          "score": 0.063706
        },
        "sadness": {
          "score": 0.439691
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Your pull, ",
      "tones": {
        "anger": {
          "score": 0.11325
        },
        "disgust": {
          "score": 0.195341
        },
        "fear": {
          "score": 0.272213
        },
        "joy": {
          "score": 0.093594
        },
        "sadness": {
          "score": 0.336259
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "And your leave.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.9
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "And you told me ",
      "tones": {
        "anger": {
          "score": 0.56213
        },
        "disgust": {
          "score": 0.059115
        },
        "fear": {
          "score": 0.080853
        },
        "joy": {
          "score": 0.06931
        },
        "sadness": {
          "score": 0.230971
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "The periods of light and rock ",
      "tones": {
        "anger": {
          "score": 0.040051
        },
        "disgust": {
          "score": 0.082462
        },
        "fear": {
          "score": 0.165145
        },
        "joy": {
          "score": 0.465387
        },
        "sadness": {
          "score": 0.0997
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Are all there is.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "We all turn round ",
      "tones": {
        "anger": {
          "score": 0.138588
        },
        "disgust": {
          "score": 0.209129
        },
        "fear": {
          "score": 0.197095
        },
        "joy": {
          "score": 0.064985
        },
        "sadness": {
          "score": 0.425655
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "And the blood flows up and down, ",
      "tones": {
        "anger": {
          "score": 0.101159
        },
        "disgust": {
          "score": 0.117067
        },
        "fear": {
          "score": 0.285726
        },
        "joy": {
          "score": 0.28108
        },
        "sadness": {
          "score": 0.109458
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "I take another breath, ",
      "tones": {
        "anger": {
          "score": 0.254469
        },
        "disgust": {
          "score": 0.283632
        },
        "fear": {
          "score": 0.273227
        },
        "joy": {
          "score": 0.052358
        },
        "sadness": {
          "score": 0.222072
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Gravity holds my head to rest.",
      "tones": {
        "anger": {
          "score": 0.309368
        },
        "disgust": {
          "score": 0.124408
        },
        "fear": {
          "score": 0.178117
        },
        "joy": {
          "score": 0.00819
        },
        "sadness": {
          "score": 0.47439
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "We all turn round and the lines etch in ",
      "tones": {
        "anger": {
          "score": 0.268127
        },
        "disgust": {
          "score": 0.306187
        },
        "fear": {
          "score": 0.11184
        },
        "joy": {
          "score": 0.029874
        },
        "sadness": {
          "score": 0.38025
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Like water running down stone; ",
      "tones": {
        "anger": {
          "score": 0.243614
        },
        "disgust": {
          "score": 0.258682
        },
        "fear": {
          "score": 0.161928
        },
        "joy": {
          "score": 0.090992
        },
        "sadness": {
          "score": 0.275502
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "The only time travel I'll ever know.",
      "tones": {
        "anger": {
          "score": 0.106191
        },
        "disgust": {
          "score": 0.103698
        },
        "fear": {
          "score": 0.065269
        },
        "joy": {
          "score": 0.350292
        },
        "sadness": {
          "score": 0.227258
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Your pull, ",
      "tones": {
        "anger": {
          "score": 0.11325
        },
        "disgust": {
          "score": 0.195341
        },
        "fear": {
          "score": 0.272213
        },
        "joy": {
          "score": 0.093594
        },
        "sadness": {
          "score": 0.336259
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "And your leave.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0.9
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "You told me ",
      "tones": {
        "anger": {
          "score": 0.56213
        },
        "disgust": {
          "score": 0.059115
        },
        "fear": {
          "score": 0.080853
        },
        "joy": {
          "score": 0.06931
        },
        "sadness": {
          "score": 0.230971
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "The periods of light and rock ",
      "tones": {
        "anger": {
          "score": 0.040051
        },
        "disgust": {
          "score": 0.082462
        },
        "fear": {
          "score": 0.165145
        },
        "joy": {
          "score": 0.465387
        },
        "sadness": {
          "score": 0.0997
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Are all there is.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Life pushing upwards and out, ",
      "tones": {
        "anger": {
          "score": 0.091642
        },
        "disgust": {
          "score": 0.089891
        },
        "fear": {
          "score": 0.053288
        },
        "joy": {
          "score": 0.159893
        },
        "sadness": {
          "score": 0.50906
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Hair and nails lead the way ",
      "tones": {
        "anger": {
          "score": 0.132479
        },
        "disgust": {
          "score": 0.425303
        },
        "fear": {
          "score": 0.107547
        },
        "joy": {
          "score": 0.193586
        },
        "sadness": {
          "score": 0.108421
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Growing and dying in the same day.",
      "tones": {
        "anger": {
          "score": 0.04193
        },
        "disgust": {
          "score": 0.123348
        },
        "fear": {
          "score": 0.035077
        },
        "joy": {
          "score": 0.017448
        },
        "sadness": {
          "score": 0.80964
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "\"Find a path, ",
      "tones": {
        "anger": {
          "score": 0.123087
        },
        "disgust": {
          "score": 0.024838
        },
        "fear": {
          "score": 0.20423
        },
        "joy": {
          "score": 0.434573
        },
        "sadness": {
          "score": 0.06338
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Find a path, ",
      "tones": {
        "anger": {
          "score": 0.118335
        },
        "disgust": {
          "score": 0.02297
        },
        "fear": {
          "score": 0.200502
        },
        "joy": {
          "score": 0.446119
        },
        "sadness": {
          "score": 0.061302
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Find a path\" they said, ",
      "tones": {
        "anger": {
          "score": 0.169213
        },
        "disgust": {
          "score": 0.050781
        },
        "fear": {
          "score": 0.145901
        },
        "joy": {
          "score": 0.374953
        },
        "sadness": {
          "score": 0.115448
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "There must be something in the end?",
      "tones": {
        "anger": {
          "score": 0.069826
        },
        "disgust": {
          "score": 0.086077
        },
        "fear": {
          "score": 0.295969
        },
        "joy": {
          "score": 0.038422
        },
        "sadness": {
          "score": 0.540482
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "There must be something in the end.",
      "tones": {
        "anger": {
          "score": 0.061006
        },
        "disgust": {
          "score": 0.081301
        },
        "fear": {
          "score": 0.286228
        },
        "joy": {
          "score": 0.054471
        },
        "sadness": {
          "score": 0.526918
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "You told me ",
      "tones": {
        "anger": {
          "score": 0.56213
        },
        "disgust": {
          "score": 0.059115
        },
        "fear": {
          "score": 0.080853
        },
        "joy": {
          "score": 0.06931
        },
        "sadness": {
          "score": 0.230971
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "The periods of light and rock ",
      "tones": {
        "anger": {
          "score": 0.040051
        },
        "disgust": {
          "score": 0.082462
        },
        "fear": {
          "score": 0.165145
        },
        "joy": {
          "score": 0.465387
        },
        "sadness": {
          "score": 0.0997
        }
      }
    },
    {
      "title": "Periods of Light & Rock",
      "recordingId": "590d63e29023bb7ae02a43be",
      "text": "Are all there is.",
      "tones": {
        "anger": {
          "score": 0
        },
        "disgust": {
          "score": 0
        },
        "fear": {
          "score": 0
        },
        "joy": {
          "score": 0
        },
        "sadness": {
          "score": 0
        }
      }
    }
  ]
}

const sentences = songData.sentences;

const ENV = process.env.NODE_ENV || 'development';
if(ENV === 'development'){
	dotenv.config();
}

const getToneMatchScore = (response, doc) => {
	let score = 0;
	
	if(response.anger){score = score + Math.sqrt(Math.pow(doc['anger'].score - response.anger.score, 2));};
	if(response.disgust){score = score + Math.sqrt(Math.pow(doc['disgust'].score - response.disgust.score, 2));};
	if(response.fear){score = score + Math.sqrt(Math.pow(doc['fear'].score - response.fear.score, 2));};
	if(response.joy){score = score + Math.sqrt(Math.pow(doc['joy'].score - response.joy.score, 2));};
	if(response.sadness){score = score + Math.sqrt(Math.pow(doc['sadness'].score - response.sadness.score, 2));};
	// score = score * Math.pow(score, -1);
	// console.log('test score', score);
	return score;
}

const toneAnalyzer = watson.tone_analyzer({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD,
	version: 'v3',
	version_date: '2016-05-19 '
});

const getEmotionTones = (masterTone) => {

	let emotionTone = masterTone.tone_categories.filter((tone) => {
		return tone.category_id === 'emotion_tone';
	});

	let toneObject = {};
	
	if(emotionTone.length){
		emotionTone[0].tones.map(tone => {
			toneObject[tone.tone_id] = { score: tone.score };
		});
	}
	return toneObject;
};

const processPhrase = (phrase, cb) => {
	toneAnalyzer.tone({ text: phrase },
		(err, tone) => {
			if (err){
				console.log(err);
			} else {

				let phraseTone = getEmotionTones(tone.document_tone);
				let sortedSentences = sortSentences(phraseTone);
				let index = getRandom(3);

				if(cb) {
					cb(sortedSentences[0].text);
				}
			}
	});
};

const getRandom = (max, min = 0) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sortSentences = (phraseTone) => {
	let sortedSentences = sentences.sort((a, b) => {
		let scoreA = getToneMatchScore(phraseTone, a.tones);
		let scoreB = getToneMatchScore(phraseTone, b.tones);
		return scoreA - scoreB;
	});
	return sortedSentences;
};


// const responses = {
// 	Alexa ask the orbweavers how 
// 	response. Please let me know how you are feeling or what you are thinking and I will see iff The Orbweavers have anything to say,
// 	requestMood: `${name} please tell me a bit about how you are feeling and I will try and match a song to your mood.`
// }

const botBuilder = require('claudia-bot-builder');
const getIntentName = (alexaPayload) => {
	'use strict';
	return alexaPayload &&
		alexaPayload.request &&
		alexaPayload.request.type === 'IntentRequest' &&
		alexaPayload.request.intent &&
		alexaPayload.request.intent.name;
};

const api = botBuilder(
	function (message, originalRequest) {
		'use strict';

		// message.text has all intent placeholders joined together, for quick access
		if (message.text) {
			let phraseResponse = new Promise((resolve, reject) => {
				processPhrase(message.text, (sentence) => {
					resolve(`The Orbweavers Oracle says: ${sentence}`);
				});
			});
			return phraseResponse;
		// you can use all the Alexa request properties from originalRequest.body
		} else if (getIntentName(originalRequest.body) === 'ExitApp'){
			// return a JavaScript object to set advanced response params
			// this prevents any packaging from bot builder and is just
			// returned to Alexa as you specify
			return {
				response: {
					outputSpeech: {
						type: 'PlainText',
						text: 'The Orbweavers say bye!'
					},
					shouldEndSession: true
				}
			};
		} else {
			return {};
		}
	},
	{ platforms: ['alexa'] }
);

module.exports = api;
