from pyorbital import tlefile
from datetime import datetime
from pyorbital.orbital import Orbital

import sys


def main():
    orb = Orbital("NOAA 15")
    Year = int(sys.argv[1])
    Month = int(sys.argv[2])
    Day  = int(sys.argv[3])
    Hour = int(sys.argv[4])
    Minute = int(sys.argv[5])
    utc_time = datetime(Year,Month,Day,Hour,Minute)
    position = orb.get_lonlatalt(utc_time)
    print str(position[0])+'&'+str(position[1])+'&'+str(position[2])


main()