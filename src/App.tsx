import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubwayPath from './components/SubwayPath';

const VERSION: string = "0.0.3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Version {VERSION}
        </p>
        <a href='https://www.instagram.com/enrique_casillas_/'>
          Instagram
        </a>
        <a href='https://www.twitch.tv/yoshi654654'>
          Twitch
        </a>
        <a href='https://www.youtube.com/channel/UCvmqyMGr2mtnRQ5sAbVnc6A'>
          Youtube
        </a>
        <a href='https://twitter.com/Enrique_______C'>
          Twitter
        </a>
        <a href='https://www.facebook.com/enrique.casillas.9003'>
          Facebook
        </a>
        <a href='https://github.com/casillasenrique'>
          GitHub
        </a>
        <a href='https://www.linkedin.com/in/enrique-casillas-910018193/'>
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SubwayPath
        color="red"
        data="M 1100.50,601.94
        C 1100.50,601.94 1589.18,604.28 1589.18,604.28
          1589.18,604.28 1604.00,604.60 1618.41,618.31
          1632.81,632.02 1773.90,769.12 1773.90,769.12
          1773.90,769.12 1793.30,787.70 1821.13,787.22
          1864.75,786.46 2082.51,786.67 2082.54,786.66
          2082.54,786.66 2096.44,789.67 2108.26,799.52
          2120.35,809.58 2248.56,938.64 2248.56,938.64
          2248.56,938.64 2265.64,949.69 2266.09,973.72
          2266.55,997.74 2266.09,1512.67 2266.09,1512.67
          2266.09,1512.67 2272.41,1530.96 2292.98,1532.55
          2313.56,1534.14 2411.06,1533.72 2411.06,1533.72
          2411.06,1533.72 2427.14,1534.64 2439.12,1546.58
          2451.10,1558.52 2603.96,1711.42 2603.96,1711.42
          2603.96,1711.42 2617.15,1723.65 2616.82,1739.48
          2616.50,1755.31 2616.82,1872.76 2616.82,1872.76
          2616.82,1872.76 2618.62,1881.77 2613.32,1887.96
          2604.39,1898.36 2565.48,1941.04 2562.91,1942.18
          2562.91,1942.18 2557.97,1951.15 2543.17,1951.09
          2524.30,1951.01 2043.96,1953.43 2043.96,1953.43
          2043.96,1953.43 2025.62,1954.07 2013.57,1942.90
          1999.56,1929.93 1454.73,1382.90 1454.73,1382.90
          1454.73,1382.90 1440.60,1369.06 1423.17,1368.87
          1386.91,1368.50 1139.08,1368.87 1139.08,1368.87
          1139.08,1368.87 1118.88,1369.46 1107.51,1359.52
          1089.19,1343.52 1018.66,1273.01 1018.66,1273.01
          1018.66,1273.01 1008.79,1264.25 988.26,1262.49
          967.74,1260.72 40.12,1260.15 40.12,1260.15M 1126.22,1367.70"
      />
      <SubwayPath
        color="blue"
        data="M 174.56,20.90
        C 174.56,20.90 697.15,20.90 697.15,20.90
          697.15,20.90 716.19,20.68 727.55,32.59
          738.92,44.50 981.25,292.13 981.25,292.13
          981.25,292.13 985.74,301.26 1009.31,301.48
          1020.67,301.59 1431.35,301.48 1431.35,301.48
          1431.35,301.48 1442.95,302.43 1453.57,312.00
          1463.34,320.81 1967.97,836.93 1967.97,836.93
          1967.97,836.93 1975.31,843.73 1974.99,854.47
          1974.66,865.21 1973.82,1181.82 1973.82,1181.82
          1973.82,1181.82 1973.50,1188.50 1978.49,1193.51
          1984.28,1199.32 2122.29,1339.65 2122.29,1339.65
          2122.29,1339.65 2129.63,1349.95 2129.31,1361.86
          2128.98,1373.77 2128.14,1589.83 2128.14,1589.83
          2128.14,1589.83 2129.63,1603.64 2136.32,1610.88
          2143.01,1618.11 2330.39,1806.12 2330.39,1806.12
          2330.39,1806.12 2335.60,1814.07 2336.24,1827.16
          2337.08,1844.49 2337.41,2052.80 2337.41,2052.80
          2337.41,2052.80 2337.73,2060.76 2330.39,2070.34
          2323.05,2079.91 2013.57,2389.50 2013.57,2389.50
          2013.57,2389.50 2006.88,2395.13 1994.86,2396.52
          1982.84,2397.91 1680.37,2396.52 1680.37,2396.52
          1680.37,2396.52 1661.99,2392.79 1654.65,2384.83
          1647.31,2376.86 1527.22,2257.39 1527.22,2257.39
          1527.22,2257.39 1519.36,2246.65 1502.67,2245.70
          1485.97,2244.75 836.28,2244.53 836.28,2244.53"
      />
      <SubwayPath
        color="green"
        data="M 3403.63,53.63
        C 3403.63,53.63 3336.99,120.27 3336.99,120.27
          3336.99,120.27 3330.91,128.50 3314.78,129.62
          3298.65,130.75 2331.56,129.62 2331.56,129.62
          2331.56,129.62 2321.29,127.78 2309.35,137.81
          2297.41,147.83 2177.24,266.41 2177.24,266.41
          2177.24,266.41 2171.11,272.56 2171.40,279.27
          2171.68,285.97 2172.56,1592.17 2172.56,1592.17
          2172.56,1592.17 2172.10,1599.06 2179.58,1607.37
          2187.06,1615.68 2386.51,1815.47 2386.51,1815.47
          2386.51,1815.47 2387.24,1822.11 2387.68,1829.50
          2388.12,1836.89 2388.85,1899.65 2388.85,1899.65
          2388.85,1899.65 2389.09,1916.21 2368.97,1917.18
          2348.86,1918.16 1215.07,1918.35 1215.07,1918.35
          1215.07,1918.35 1206.50,1916.08 1201.04,1910.17
          1195.58,1904.26 1029.18,1738.31 1029.18,1738.31
          1029.18,1738.31 1016.10,1722.33 999.95,1721.94
          984.34,1721.57 527.63,1721.94 527.63,1721.94"
      />
    </div>
  );
}

export default App;
