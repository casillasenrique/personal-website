import React from 'react';
import SubwayPath from './SubwayPath';
import styles from '../styles/SubwayLines.module.css';

const SubwayLines = () => {
  return (
    <div className={styles.container}>
      <SubwayPath
        name="Fukutoshin Line"
        color="#aa5f33"
        data="M 132.00,281.00
        C 132.00,281.00 593.00,281.00 593.00,281.00
          593.00,281.00 604.93,280.28 613.00,288.00
          623.56,298.10 925.00,591.00 925.00,591.00
          925.00,591.00 933.10,597.71 933.00,605.00
          932.72,624.99 934.00,1003.00 934.00,1003.00
          934.00,1003.00 933.31,1015.64 938.80,1021.19
          944.98,1027.45 999.83,1086.24 1001.00,1086.00
          1001.00,1086.00 1008.03,1091.98 1008.00,1102.00
          1007.97,1112.77 1008.00,1207.00 1008.00,1207.00
          1008.00,1207.00 1008.03,1212.49 1002.00,1219.00
          995.35,1226.18 892.00,1330.00 892.00,1330.00
          892.00,1330.00 883.10,1337.10 883.00,1348.00
          882.87,1361.84 885.00,1585.00 885.00,1585.00
          885.00,1585.00 885.42,1593.85 879.00,1600.00
          870.77,1607.87 798.00,1679.00 798.00,1679.00"
      />
      <SubwayPath
        name="Oedo Line"
        color="#cf1e65"
        data="M 122.00,406.00
        C 122.00,406.00 524.00,806.00 524.00,806.00
          524.00,806.00 530.69,811.65 531.00,823.00
          531.32,834.85 531.00,1201.00 531.00,1201.00
          531.00,1201.00 531.37,1215.76 547.00,1216.00
          553.22,1216.09 614.00,1216.00 614.00,1216.00
          614.00,1216.00 622.68,1216.57 630.62,1214.04
          638.90,1211.41 648.00,1212.00 648.00,1212.00
          648.00,1212.00 766.00,1212.00 766.00,1212.00
          766.00,1212.00 780.07,1212.09 780.00,1225.00
          779.94,1235.53 780.00,1381.00 780.00,1381.00
          780.00,1381.00 781.14,1397.02 798.00,1397.00
          816.91,1396.97 1197.00,1397.00 1197.00,1397.00
          1197.00,1397.00 1214.54,1396.66 1226.00,1410.00
          1235.96,1421.59 1304.00,1498.00 1304.00,1498.00
          1304.00,1498.00 1311.56,1507.31 1312.00,1521.00
          1312.44,1534.69 1312.00,1813.00 1312.00,1813.00
          1311.99,1812.99 1311.95,1824.83 1322.47,1834.91
          1333.11,1845.09 1448.00,1959.00 1448.00,1959.00
          1448.00,1959.00 1455.56,1967.81 1475.00,1968.00
          1492.72,1968.17 2449.00,1968.00 2449.00,1968.00
          2449.00,1968.00 2459.39,1968.68 2469.00,1959.00
          2477.78,1950.16 2754.00,1675.00 2754.00,1675.00
          2754.00,1675.00 2759.96,1669.22 2760.00,1660.00
          2760.06,1646.35 2760.00,862.00 2760.00,862.00
          2760.00,862.00 2761.19,854.53 2750.00,843.00
          2739.74,832.42 2583.00,675.00 2583.00,675.00
          2583.00,675.00 2575.33,666.00 2560.00,666.00
          2542.22,666.00 1714.00,665.00 1714.00,665.00
          1714.00,665.00 1699.74,664.03 1686.00,678.00
          1673.70,690.51 1457.00,909.00 1457.00,909.00
          1457.00,909.00 1441.70,924.04 1423.00,924.00
          1405.07,923.97 954.00,923.00 954.00,923.00
          954.00,923.00 941.72,920.89 927.00,936.00
          916.98,946.29 685.00,1178.00 685.00,1178.00
          685.00,1178.00 678.02,1185.91 667.00,1186.00
          658.88,1186.07 638.00,1186.00 638.00,1186.00
          638.00,1186.00 631.06,1185.93 631.00,1192.00
          630.94,1198.37 631.00,1214.00 631.00,1214.00"
      />
      <SubwayPath
        name="Namboku"
        color="#06b69c"
        data="M 1233.00,139.00
        C 1233.00,139.00 1463.00,139.00 1463.00,139.00
          1463.00,139.00 1479.01,139.14 1489.00,150.00
          1499.63,161.55 1594.00,262.00 1594.00,262.00
          1594.00,262.00 1601.92,269.47 1602.00,285.00
          1602.08,300.53 1602.00,876.00 1602.00,876.00
          1602.00,876.00 1603.03,893.35 1593.00,904.00
          1581.43,916.29 1321.00,1180.00 1321.00,1180.00
          1321.00,1180.00 1303.96,1196.61 1323.00,1216.00
          1339.13,1232.42 1620.00,1513.00 1620.00,1513.00
          1620.00,1513.00 1626.75,1519.69 1627.00,1534.00
          1627.43,1558.50 1628.00,1716.00 1628.00,1716.00
          1628.00,1716.00 1627.56,1732.43 1620.00,1740.00
          1607.58,1752.43 1422.00,1939.00 1422.00,1939.00
          1422.00,1939.00 1411.02,1948.91 1400.00,1949.00
          1386.15,1949.11 775.00,1949.00 775.00,1949.00"
      />
      <SubwayPath
        name="Shinjuku"
        color="#abbb41"
        data="M 772.00,1267.00
        C 772.00,1267.00 912.00,1267.00 912.00,1267.00
          912.00,1267.00 919.32,1268.37 928.00,1260.00
          935.38,1252.88 1113.00,1074.00 1113.00,1074.00
          1113.00,1074.00 1121.62,1064.13 1138.00,1064.00
          1160.76,1063.81 1368.00,1064.00 1368.00,1064.00
          1368.00,1064.00 1375.59,1063.50 1384.00,1072.00
          1399.96,1088.13 1473.00,1164.00 1473.00,1164.00
          1473.00,1164.00 1482.84,1173.88 1497.00,1174.00
          1511.94,1174.13 1626.00,1174.00 1626.00,1174.00
          1626.00,1174.00 1639.09,1174.86 1639.00,1157.00
          1638.95,1146.89 1640.00,1008.00 1640.00,1008.00
          1640.00,1008.00 1639.77,991.26 1663.00,991.00
          1685.11,990.75 2766.00,993.00 2766.00,993.00
          2766.00,993.00 2779.60,993.43 2787.00,986.00
          2808.20,964.69 3257.00,516.00 3257.00,516.00
          3257.00,516.00 3263.19,509.97 3263.00,501.00
          3262.71,487.24 3263.00,429.00 3263.00,429.00"
      />
      <SubwayPath
        name="Yurakucho"
        color="#d2a763"
        data="M 3176.00,1549.00
        C 3176.00,1549.00 1765.00,1547.00 1765.00,1547.00
          1765.00,1547.00 1753.38,1548.61 1741.00,1537.00
          1726.36,1523.27 1347.00,1139.00 1347.00,1139.00
          1347.00,1139.00 1336.58,1126.25 1350.00,1112.00
          1360.31,1101.06 1546.00,920.00 1546.00,920.00
          1546.00,920.00 1562.62,903.56 1545.00,886.00
          1529.71,870.77 1334.00,676.00 1334.00,676.00
          1334.00,676.00 1326.11,665.16 1307.00,665.00
          1286.90,664.84 977.00,665.00 977.00,665.00
          977.00,665.00 965.64,665.21 956.00,656.00
          944.15,644.68 595.00,306.00 595.00,306.00
          595.00,306.00 589.56,300.07 577.00,300.00
          559.79,299.90 132.00,300.00 132.00,300.00"
      />
      <SubwayPath
        name="Hanzomon"
        color="#8d7eba"
        data="M 2742.00,396.00
        C 2742.00,396.00 2883.00,534.00 2883.00,534.00
          2883.00,534.00 2893.26,542.44 2893.00,560.00
          2892.72,578.42 2893.00,1042.00 2893.00,1042.00
          2893.00,1042.00 2893.69,1050.47 2885.00,1059.00
          2877.38,1066.47 2739.00,1201.00 2739.00,1201.00
          2739.00,1201.00 2733.05,1207.79 2719.00,1208.00
          2706.82,1208.18 2239.00,1209.00 2239.00,1209.00
          2239.00,1209.00 2223.98,1207.15 2213.00,1218.00
          2202.87,1228.02 2159.00,1272.00 2159.00,1272.00
          2159.00,1272.00 2150.09,1280.95 2138.00,1281.00
          2116.43,1281.09 2064.00,1281.00 2064.00,1281.00
          2064.00,1281.00 2055.21,1281.24 2042.00,1268.00
          2031.36,1257.34 1794.00,1019.00 1794.00,1019.00
          1794.00,1019.00 1786.48,1010.87 1767.00,1011.00
          1753.14,1011.09 1692.00,1012.00 1692.00,1012.00
          1692.00,1012.00 1670.10,1010.12 1670.00,1029.00
          1669.89,1051.24 1671.00,1273.00 1671.00,1273.00
          1671.00,1273.00 1670.66,1283.56 1666.00,1288.00
          1653.97,1299.48 1553.00,1399.00 1553.00,1399.00
          1553.00,1399.00 1537.04,1412.35 1515.00,1413.00
          1493.49,1413.63 1296.00,1415.00 1296.00,1415.00
          1296.00,1415.00 1279.02,1412.93 1270.00,1422.00
          1256.00,1436.07 1038.00,1656.00 1038.00,1656.00
          1038.00,1656.00 1031.52,1666.98 1014.00,1667.00
          991.33,1667.03 826.00,1667.00 826.00,1667.00"
      />
      <SubwayPath
        name="Hibiya"
        color="#c8bfb3"
        data="M 2593.00,209.00
        C 2593.00,209.00 2415.00,210.00 2415.00,210.00
          2415.00,210.00 2403.72,209.03 2395.00,217.00
          2386.35,224.90 2235.00,373.00 2235.00,373.00
          2235.00,373.00 2224.94,383.01 2225.00,399.00
          2225.06,415.23 2228.00,1021.00 2228.00,1021.00
          2228.00,1021.00 2228.66,1036.17 2235.00,1043.00
          2244.35,1053.06 2295.00,1107.00 2295.00,1107.00
          2295.00,1107.00 2306.41,1118.93 2319.00,1119.00
          2338.25,1119.11 2535.00,1119.00 2535.00,1119.00
          2535.00,1119.00 2550.75,1119.05 2559.00,1127.00
          2569.07,1136.70 2601.00,1168.00 2601.00,1168.00
          2601.00,1168.00 2609.11,1175.42 2609.00,1189.00
          2608.87,1204.00 2609.00,1594.00 2609.00,1594.00
          2609.00,1594.00 2609.41,1601.14 2606.00,1605.00
          2600.68,1611.02 2580.00,1634.00 2580.00,1634.00
          2580.00,1634.00 2573.84,1641.84 2563.00,1642.00
          2548.18,1642.22 1958.00,1642.00 1958.00,1642.00
          1958.00,1642.00 1945.91,1641.32 1938.00,1649.00
          1926.51,1660.15 1791.00,1798.00 1791.00,1798.00
          1791.00,1798.00 1787.03,1801.20 1787.00,1805.00
          1786.96,1809.82 1787.00,1813.00 1787.00,1813.00
          1787.00,1813.00 1786.80,1826.34 1772.00,1827.00
          1759.35,1827.56 623.00,1828.00 623.00,1828.00"
      />
      <SubwayPath
        name="Tozai"
        color="#00afef"
        data="M 376.00,806.00
        C 376.00,806.00 1351.00,806.00 1351.00,806.00
          1351.00,806.00 1365.71,805.22 1377.00,817.00
          1392.37,833.03 1854.00,1294.00 1854.00,1294.00
          1854.00,1294.00 1865.42,1305.99 1890.00,1306.00
          1919.55,1306.01 2865.00,1306.00 2865.00,1306.00
          2865.00,1306.00 2871.74,1306.23 2879.00,1299.00
          2891.03,1287.02 3325.00,852.00 3325.00,852.00"
      />
      <SubwayPath
        name="Chiyoda"
        color="#1bb267"
        data="M 2974.86,97.87
        C 2974.86,97.87 2917.85,154.89 2917.85,154.89
          2917.85,154.89 2912.64,161.93 2898.84,162.89
          2885.04,163.85 2057.55,162.89 2057.55,162.89
          2057.55,162.89 2048.77,161.31 2038.55,169.89
          2028.33,178.47 1925.51,279.93 1925.51,279.93
          1925.51,279.93 1920.26,285.20 1920.51,290.93
          1920.75,296.67 1921.51,1414.31 1921.51,1414.31
          1921.51,1414.31 1921.10,1420.21 1927.51,1427.32
          1933.91,1434.43 2104.57,1605.38 2104.57,1605.38
          2104.57,1605.38 2105.19,1611.06 2105.57,1617.38
          2105.94,1623.70 2106.57,1677.40 2106.57,1677.40
          2106.57,1677.40 2106.77,1691.57 2089.56,1692.41
          2072.35,1693.24 1102.23,1693.41 1102.23,1693.41
          1102.23,1693.41 1094.89,1691.46 1090.22,1686.41
          1085.55,1681.35 943.17,1539.36 943.17,1539.36
          943.17,1539.36 931.98,1525.68 918.16,1525.35
          904.80,1525.03 514.03,1525.35 514.03,1525.35"
      />
      <SubwayPath
        name="Mita"
        color="#0073bc"
        data="M 211.92,69.86
        C 211.92,69.86 659.08,69.86 659.08,69.86
          659.08,69.86 675.36,69.67 685.09,79.86
          694.81,90.05 902.16,301.94 902.16,301.94
          902.16,301.94 906.00,309.75 926.17,309.94
          935.89,310.03 1287.29,309.94 1287.29,309.94
          1287.29,309.94 1297.21,310.75 1306.30,318.94
          1314.66,326.48 1746.45,768.09 1746.45,768.09
          1746.45,768.09 1752.73,773.91 1752.45,783.10
          1752.17,792.29 1751.45,1063.19 1751.45,1063.19
          1751.45,1063.19 1751.18,1068.92 1755.45,1073.20
          1760.40,1078.17 1878.49,1198.24 1878.49,1198.24
          1878.49,1198.24 1884.77,1207.05 1884.49,1217.25
          1884.21,1227.44 1883.49,1412.31 1883.49,1412.31
          1883.49,1412.31 1884.77,1424.13 1890.50,1430.32
          1896.22,1436.51 2056.55,1597.38 2056.55,1597.38
          2056.55,1597.38 2061.01,1604.18 2061.55,1615.38
          2062.28,1630.21 2062.55,1808.45 2062.55,1808.45
          2062.55,1808.45 2062.83,1815.26 2056.55,1823.45
          2050.27,1831.64 1785.46,2096.55 1785.46,2096.55
          1785.46,2096.55 1779.74,2101.36 1769.45,2102.55
          1759.17,2103.74 1500.36,2102.55 1500.36,2102.55
          1500.36,2102.55 1484.64,2099.36 1478.36,2092.54
          1472.07,2085.73 1369.32,1983.51 1369.32,1983.51
          1369.32,1983.51 1362.59,1974.32 1348.31,1973.50
          1334.03,1972.69 778.12,1972.50 778.12,1972.50"
      />
      <SubwayPath
        name="Ginza"
        color="#faa428"
        data="M 2624.00,514.00
        C 2624.00,514.00 2178.00,512.00 2178.00,512.00
          2178.00,512.00 2166.82,512.21 2167.00,524.00
          2167.17,535.22 2167.00,1059.00 2167.00,1059.00
          2167.00,1059.00 2167.41,1069.90 2175.00,1077.00
          2181.54,1083.11 2387.00,1272.00 2387.00,1272.00
          2387.00,1272.00 2392.89,1275.73 2393.00,1289.00
          2393.11,1302.27 2390.00,1774.00 2390.00,1774.00
          2390.00,1774.00 2387.79,1786.91 2382.00,1794.00
          2376.21,1801.09 2337.00,1840.00 2337.00,1840.00
          2337.00,1840.00 2328.16,1850.69 2316.00,1851.00
          2303.84,1851.31 1994.00,1851.00 1994.00,1851.00
          1994.00,1851.00 1981.99,1851.57 1973.00,1843.00
          1959.74,1830.36 1940.00,1811.00 1940.00,1811.00
          1940.00,1811.00 1932.31,1802.06 1920.00,1802.00
          1907.69,1801.94 1697.00,1802.00 1697.00,1802.00
          1697.00,1802.00 1684.16,1802.72 1676.00,1794.00
          1666.16,1783.49 1595.00,1712.00 1595.00,1712.00
          1595.00,1712.00 1587.21,1705.28 1587.00,1693.00
          1586.75,1678.50 1588.00,1565.00 1588.00,1565.00
          1588.00,1565.00 1588.59,1558.54 1582.00,1552.00
          1572.95,1543.02 1480.00,1449.00 1480.00,1449.00
          1480.00,1449.00 1474.15,1440.71 1463.00,1441.00
          1451.85,1441.29 1312.00,1441.00 1312.00,1441.00
          1312.00,1441.00 1300.00,1440.83 1296.00,1445.00
          1288.29,1453.04 1058.00,1683.00 1058.00,1683.00
          1058.00,1683.00 1048.75,1692.97 1036.00,1693.00
          1025.90,1693.02 827.00,1692.00 827.00,1692.00"
      />
      <SubwayPath
        name="Asakusa"
        color="#ef463e"
        data="M 2759.00,378.00
        C 2759.00,378.00 2491.00,647.00 2491.00,647.00
          2491.00,647.00 2485.00,652.47 2485.00,670.00
          2485.00,683.20 2486.00,1754.00 2486.00,1754.00
          2486.00,1754.00 2486.70,1762.56 2482.51,1767.00
          2476.69,1773.16 2381.00,1870.00 2381.00,1870.00
          2381.00,1870.00 2376.08,1874.93 2368.00,1875.00
          2358.79,1875.08 2144.00,1876.00 2144.00,1876.00
          2144.00,1876.00 2133.50,1875.63 2128.00,1881.00
          2118.52,1890.26 1864.00,2146.00 1864.00,2146.00
          1864.00,2146.00 1857.74,2153.00 1847.00,2153.00
          1832.50,2153.00 285.00,2148.00 285.00,2148.00"
      />
      <SubwayPath
        name="Marunouchi"
        color="#ed272a"
        data="M 1004.19,567.03
        C 1004.19,567.03 1422.34,569.03 1422.34,569.03
          1422.34,569.03 1435.02,569.30 1447.34,581.03
          1459.67,592.76 1580.39,710.07 1580.39,710.07
          1580.39,710.07 1596.99,725.97 1620.80,725.55
          1658.13,724.91 1844.45,725.08 1844.48,725.08
          1844.48,725.08 1856.37,727.66 1866.49,736.08
          1876.83,744.69 1986.53,855.12 1986.53,855.12
          1986.53,855.12 2001.14,864.57 2001.53,885.13
          2001.93,905.69 2001.53,1346.29 2001.53,1346.29
          2001.53,1346.29 2006.93,1361.94 2024.54,1363.30
          2042.15,1364.66 2125.58,1364.30 2125.58,1364.30
          2125.58,1364.30 2139.33,1365.08 2149.58,1375.30
          2159.83,1385.52 2290.63,1516.35 2290.63,1516.35
          2290.63,1516.35 2301.91,1526.81 2301.64,1540.36
          2301.36,1553.90 2301.64,1654.40 2301.64,1654.40
          2301.64,1654.40 2303.17,1662.11 2298.63,1667.40
          2291.00,1676.30 2257.71,1712.82 2255.51,1713.80
          2255.51,1713.80 2251.28,1721.47 2238.61,1721.42
          2222.46,1721.35 1811.47,1723.42 1811.47,1723.42
          1811.47,1723.42 1795.78,1723.97 1785.46,1714.42
          1773.47,1703.32 1307.30,1235.25 1307.30,1235.25
          1307.30,1235.25 1295.20,1223.40 1280.29,1223.25
          1249.26,1222.93 1037.20,1223.25 1037.20,1223.25
          1037.20,1223.25 1019.93,1223.75 1010.20,1215.25
          994.52,1201.55 934.17,1141.22 934.17,1141.22
          934.17,1141.22 925.72,1133.73 908.16,1132.22
          890.60,1130.70 96.89,1130.22 96.89,1130.22M 1026.20,1222.25M 180.00,829.00
        C 180.00,829.00 481.00,1131.00 481.00,1131.00"
      />
    </div>
  );
};

export default SubwayLines;