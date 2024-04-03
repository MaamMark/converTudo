// Constante que possui suas propriedades (categorias) e os parâmetros (unidades) a serem convertidos
const conversions = {
  length: {
    // Tem-se as seguintes medidas para COMPRIMENTO: metro, centímetro, mílimetro, micrômetro, nanômetro, polegada, pé, jarda, milha, quilômetro, megâmetro, gigâmetro, terâmetro
    metro: {
      metro: (value) => value,
      centímetro: (value) => value.times(100),
      milímetro: (value) => value.times(1000),
      micrômetro: (value) => value.times(1e6),
      nanômetro: (value) => value.times(1e9),
      polegada: (value) => value.times(39.3701),
      pé: (value) => value.times(3.28084),
      jarda: (value) => value.times(1.09361),
      milha: (value) => value.times(0.000621371),
      quilômetro: (value) => value.times(0.001),
      megâmetro: (value) => value.times(1e-6),
      gigâmetro: (value) => value.times(1e-9),
      terâmetro: (value) => value.times(1e-12),
    },
    centímetro: {
      metro: (value) => value.div(100),
      centímetro: (value) => value,
      milímetro: (value) => value.times(10),
      micrômetro: (value) => value.times(1e4),
      nanômetro: (value) => value.times(1e7),
      polegada: (value) => value.times(0.393701),
      pé: (value) => value.times(0.0328084),
      jarda: (value) => value.times(0.0109361),
      milha: (value) => value.times(6.21371e-6),
      quilômetro: (value) => value.times(1e-5),
      megâmetro: (value) => value.times(1e-8),
      gigâmetro: (value) => value.times(1e-11),
      terâmetro: (value) => value.times(1e-14),
    },
    milímetro: {
      metro: (value) => value.div(1000),
      centímetro: (value) => value.div(10),
      milímetro: (value) => value,
      micrômetro: (value) => value.times(1e3),
      nanômetro: (value) => value.times(1e6),
      polegada: (value) => value.times(0.0393701),
      pé: (value) => value.times(0.00328084),
      jarda: (value) => value.times(0.00109361),
      milha: (value) => value.times(6.21371e-7),
      quilômetro: (value) => value.times(1e-6),
      megâmetro: (value) => value.times(1e-9),
      gigâmetro: (value) => value.times(1e-12),
      terâmetro: (value) => value.times(1e-15),
    },
    micrômetro: {
      metro: (value) => value.div(1e6),
      centímetro: (value) => value.div(1e4),
      milímetro: (value) => value.div(1e3),
      micrômetro: (value) => value,
      nanômetro: (value) => value.times(1e3),
      polegada: (value) => value.times(3.93701e-5),
      pé: (value) => value.times(3.28084e-6),
      jarda: (value) => value.times(1.09361e-6),
      milha: (value) => value.times(6.21371e-10),
      quilômetro: (value) => value.times(1e-9),
      megâmetro: (value) => value.times(1e-12),
      gigâmetro: (value) => value.times(1e-15),
      terâmetro: (value) => value.times(1e-18),
    },
    nanômetro: {
      metro: (value) => value.div(1e9),
      centímetro: (value) => value.div(1e7),
      milímetro: (value) => value.div(1e6),
      micrômetro: (value) => value.div(1e3),
      nanômetro: (value) => value,
      polegada: (value) => value.times(3.93701e-8),
      pé: (value) => value.times(3.28084e-9),
      jarda: (value) => value.times(1.09361e-9),
      milha: (value) => value.times(6.21371e-13),
      quilômetro: (value) => value.times(1e-12),
      megâmetro: (value) => value.times(1e-15),
      gigâmetro: (value) => value.times(1e-18),
      terâmetro: (value) => value.times(1e-21),
    },
    polegada: {
      metro: (value) => value.times(0.0254),
      centímetro: (value) => value.times(2.54),
      milímetro: (value) => value.times(25.4),
      micrômetro: (value) => value.times(25400),
      nanômetro: (value) => value.times(25400000),
      polegada: (value) => value,
      pé: (value) => value.times(0.0833333),
      jarda: (value) => value.times(0.0277778),
      milha: (value) => value.times(1.5783e-5),
      quilômetro: (value) => value.times(2.54e-5),
      megâmetro: (value) => value.times(2.54e-8),
      gigâmetro: (value) => value.times(2.54e-11),
      terâmetro: (value) => value.times(2.54e-14),
    },
    pé: {
      metro: (value) => value.times(0.3048),
      centímetro: (value) => value.times(30.48),
      milímetro: (value) => value.times(304.8),
      micrômetro: (value) => value.times(304800),
      nanômetro: (value) => value.times(304800000),
      polegada: (value) => value.times(12),
      pé: (value) => value,
      jarda: (value) => value.times(0.333333),
      milha: (value) => value.times(0.000189394),
      quilômetro: (value) => value.times(0.0003048),
      megâmetro: (value) => value.times(3.048e-7),
      gigâmetro: (value) => value.times(3.048e-10),
      terâmetro: (value) => value.times(3.048e-13),
    },
    jarda: {
      metro: (value) => value.times(0.9144),
      centímetro: (value) => value.times(91.44),
      milímetro: (value) => value.times(914.4),
      micrômetro: (value) => value.times(914400),
      nanômetro: (value) => value.times(914400000),
      polegada: (value) => value.times(36),
      pé: (value) => value.times(3),
      jarda: (value) => value,
      milha: (value) => value.times(0.000568182),
      quilômetro: (value) => value.times(0.0009144),
      megâmetro: (value) => value.times(9.144e-7),
      gigâmetro: (value) => value.times(9.144e-10),
      terâmetro: (value) => value.times(9.144e-13),
    },
    milha: {
      metro: (value) => value.times(1609.34),
      centímetro: (value) => value.times(160934),
      milímetro: (value) => value.times(1609340),
      micrômetro: (value) => value.times(1609340000),
      nanômetro: (value) => value.times(1609340000000),
      polegada: (value) => value.times(63360),
      pé: (value) => value.times(5280),
      jarda: (value) => value.times(1760),
      milha: (value) => value,
      quilômetro: (value) => value.times(1.60934),
      megâmetro: (value) => value.times(1.60934e-6),
      gigâmetro: (value) => value.times(1.60934e-9),
      terâmetro: (value) => value.times(1.60934e-12),
    },
    quilômetro: {
      metro: (value) => value.times(1000),
      centímetro: (value) => value.times(100000),
      milímetro: (value) => value.times(1000000),
      micrômetro: (value) => value.times(1e9),
      nanômetro: (value) => value.times(1e12),
      polegada: (value) => value.times(39370.1),
      pé: (value) => value.times(3280.84),
      jarda: (value) => value.times(1093.61),
      milha: (value) => value.times(0.621371),
      quilômetro: (value) => value,
      megâmetro: (value) => value.times(0.001),
      gigâmetro: (value) => value.times(1e-6),
      terâmetro: (value) => value.times(1e-9),
    },
    megâmetro: {
      metro: (value) => value.times(1e6),
      centímetro: (value) => value.times(1e8),
      milímetro: (value) => value.times(1e9),
      micrômetro: (value) => value.times(1e12),
      nanômetro: (value) => value.times(1e15),
      polegada: (value) => value.times(3.93701e7),
      pé: (value) => value.times(3.28084e6),
      jarda: (value) => value.times(1.09361e6),
      milha: (value) => value.times(621.371),
      quilômetro: (value) => value.times(1000),
      megâmetro: (value) => value,
      gigâmetro: (value) => value.times(0.001),
      terâmetro: (value) => value.times(1e-6),
    },
    gigâmetro: {
      metro: (value) => value.times(1e9),
      centímetro: (value) => value.times(1e11),
      milímetro: (value) => value.times(1e12),
      micrômetro: (value) => value.times(1e15),
      nanômetro: (value) => value.times(1e18),
      polegada: (value) => value.times(3.93701e10),
      pé: (value) => value.times(3.28084e9),
      jarda: (value) => value.times(1.09361e9),
      milha: (value) => value.times(6.21371e5),
      quilômetro: (value) => value.times(1e6),
      megâmetro: (value) => value.times(1000),
      gigâmetro: (value) => value,
      terâmetro: (value) => value.times(0.001),
    },
    terâmetro: {
      metro: (value) => value.times(1e12),
      centímetro: (value) => value.times(1e14),
      milímetro: (value) => value.times(1e15),
      micrômetro: (value) => value.times(1e18),
      nanômetro: (value) => value.times(1e21),
      polegada: (value) => value.times(3.93701e13),
      pé: (value) => value.times(3.28084e12),
      jarda: (value) => value.times(1.09361e12),
      milha: (value) => value.times(6.21371e8),
      quilômetro: (value) => value.times(1e9),
      megâmetro: (value) => value.times(1e6),
      gigâmetro: (value) => value.times(1000),
      terâmetro: (value) => value,
    },
  },
  data: {
    // Tem-se as seguintes medidas para DADOS: byte, kilobyte, megabyte, gigabyte, terabyte, petabyte, exabyte
    byte: {
      byte: (value) => value,
      kilobyte: (value) => value.div(1024),
      megabyte: (value) => value.div(Math.pow(1024, 2)),
      gigabyte: (value) => value.div(Math.pow(1024, 3)),
      terabyte: (value) => value.div(Math.pow(1024, 4)),
      petabyte: (value) => value.div(Math.pow(1024, 5)),
      exabyte: (value) => value.div(Math.pow(1024, 6)),
    },
    kilobyte: {
      byte: (value) => value.times(1024),
      kilobyte: (value) => value,
      megabyte: (value) => value.div(1024),
      gigabyte: (value) => value.div(Math.pow(1024, 2)),
      terabyte: (value) => value.div(Math.pow(1024, 3)),
      petabyte: (value) => value.div(Math.pow(1024, 4)),
      exabyte: (value) => value.div(Math.pow(1024, 5)),
    },
    megabyte: {
      byte: (value) => value.times(Math.pow(1024, 2)),
      kilobyte: (value) => value.times(1024),
      megabyte: (value) => value,
      gigabyte: (value) => value.div(1024),
      terabyte: (value) => value.div(Math.pow(1024, 2)),
      petabyte: (value) => value.div(Math.pow(1024, 3)),
      exabyte: (value) => value.div(Math.pow(1024, 4)),
    },
    gigabyte: {
      byte: (value) => value.times(Math.pow(1024, 3)),
      kilobyte: (value) => value.times(Math.pow(1024, 2)),
      megabyte: (value) => value.times(1024),
      gigabyte: (value) => value,
      terabyte: (value) => value.div(1024),
      petabyte: (value) => value.div(Math.pow(1024, 2)),
      exabyte: (value) => value.div(Math.pow(1024, 3)),
    },
    terabyte: {
      byte: (value) => value.times(Math.pow(1024, 4)),
      kilobyte: (value) => value.times(Math.pow(1024, 3)),
      megabyte: (value) => value.times(Math.pow(1024, 2)),
      gigabyte: (value) => value.times(1024),
      terabyte: (value) => value,
      petabyte: (value) => value.div(1024),
      exabyte: (value) => value.div(Math.pow(1024, 2)),
    },
    petabyte: {
      byte: (value) => value.times(Math.pow(1024, 5)),
      kilobyte: (value) => value.times(Math.pow(1024, 4)),
      megabyte: (value) => value.times(Math.pow(1024, 3)),
      gigabyte: (value) => value.times(Math.pow(1024, 2)),
      terabyte: (value) => value.times(1024),
      petabyte: (value) => value,
      exabyte: (value) => value.div(1024),
    },
    exabyte: {
      byte: (value) => value.times(Math.pow(1024, 6)),
      kilobyte: (value) => value.times(Math.pow(1024, 5)),
      megabyte: (value) => value.times(Math.pow(1024, 4)),
      gigabyte: (value) => value.times(Math.pow(1024, 3)),
      terabyte: (value) => value.times(Math.pow(1024, 2)),
      petabyte: (value) => value.times(1024),
      exabyte: (value) => value,
    },
  },
  temperature: {
    // Tem-se as seguintes medidas para TEMPERATURA: celsius, fahrenheit, kelvin, rankine, reaumur
    celsius: {
      celsius: (value) => value,
      fahrenheit: (value) => value.times(9).div(5).plus(32),
      kelvin: (value) => value.plus(273.15),
      rankine: (value) => value.plus(273.15).times(9).div(5),
      reaumur: (value) => value.times(4).div(5),
    },
    fahrenheit: {
      celsius: (value) => value.minus(32).times(5).div(9),
      fahrenheit: (value) => value,
      kelvin: (value) => value.plus(459.67).times(5).div(9),
      rankine: (value) => value.plus(459.67),
      reaumur: (value) => value.minus(32).times(4).div(9),
    },
    kelvin: {
      celsius: (value) => value.minus(273.15),
      fahrenheit: (value) => value.times(9).div(5).minus(459.67),
      kelvin: (value) => value,
      rankine: (value) => value.times(9).div(5),
      reaumur: (value) => value.minus(273.15).times(4).div(5),
    },
    rankine: {
      celsius: (value) => value.minus(491.67).times(5).div(9),
      fahrenheit: (value) => value.minus(459.67),
      kelvin: (value) => value.times(5).div(9),
      rankine: (value) => value,
      reaumur: (value) => value.minus(491.67).times(4).div(9),
    },
    reaumur: {
      celsius: (value) => value.times(5).div(4),
      fahrenheit: (value) => value.times(9).div(4).plus(32),
      kelvin: (value) => value.times(5).div(4).plus(273.15),
      rankine: (value) => value.times(9).div(4).plus(491.67),
      reaumur: (value) => value,
    },
  },
  time: {
    // Tem-se as seguintes medidas para TEMPO: segundo, minuto, hora, dia, semana, mês, ano
    segundo: {
      segundo: (value) => value,
      minuto: (value) => value.div(60),
      hora: (value) => value.div(3600),
      dia: (value) => value.div(3600 * 24),
      semana: (value) => value.div(3600 * 24 * 7),
      mês: (value) => value.div(3600 * 24 * 30),
      ano: (value) => value.div(3600 * 24 * 365),
    },
    minuto: {
      segundo: (value) => value.times(60),
      minuto: (value) => value,
      hora: (value) => value.div(60),
      dia: (value) => value.div(60 * 24),
      semana: (value) => value.div(60 * 24 * 7),
      mês: (value) => value.div(60 * 24 * 30),
      ano: (value) => value.div(60 * 24 * 365),
    },
    hora: {
      segundo: (value) => value.times(3600),
      minuto: (value) => value.times(60),
      hora: (value) => value,
      dia: (value) => value.div(24),
      semana: (value) => value.div(24 * 7),
      mês: (value) => value.div(24 * 30),
      ano: (value) => value.div(24 * 365),
    },
    dia: {
      segundo: (value) => value.times(3600 * 24),
      minuto: (value) => value.times(60 * 24),
      hora: (value) => value.times(24),
      dia: (value) => value,
      semana: (value) => value.div(7),
      mês: (value) => value.div(30),
      ano: (value) => value.div(365),
    },
    semana: {
      segundo: (value) => value.times(3600 * 24 * 7),
      minuto: (value) => value.times(60 * 24 * 7),
      hora: (value) => value.times(24 * 7),
      dia: (value) => value.times(7),
      semana: (value) => value,
      mês: (value) => value.div(4),
      ano: (value) => value.div(52.143),
    },
    mês: {
      segundo: (value) => value.times(3600 * 24 * 30),
      minuto: (value) => value.times(60 * 24 * 30),
      hora: (value) => value.times(24 * 30),
      dia: (value) => value.times(30),
      semana: (value) => value.times(4),
      mês: (value) => value,
      ano: (value) => value.div(12),
    },
    ano: {
      segundo: (value) => value.times(3600 * 24 * 365),
      minuto: (value) => value.times(60 * 24 * 365),
      hora: (value) => value.times(24 * 365),
      dia: (value) => value.times(365),
      semana: (value) => value.times(52.143),
      mês: (value) => value.times(12),
      ano: (value) => value,
    },
  },
  speed: {
    // Tem-se as seguintes medidas para VELOCIDADE: m/s, km/h, m/h, kn, ft/s, Ma, c
    metros_por_segundo: {
      metros_por_segundo: (value) => value,
      quilômetros_por_hora: (value) => value.times(3.6),
      milhas_por_hora: (value) => value.times(2.23694),
      nós: (value) => value.times(1.94384),
      pés_por_segundo: (value) => value.times(3.28084),
      mach: (value) => value.div(340.29),
      velocidade_da_luz: (value) => value.div(299792458),
    },
    quilômetros_por_hora: {
      metros_por_segundo: (value) => value.div(3.6),
      quilômetros_por_hora: (value) => value,
      milhas_por_hora: (value) => value.times(0.621371),
      nós: (value) => value.times(0.539957),
      pés_por_segundo: (value) => value.times(0.911344),
      mach: (value) => value.div(1225.08),
      velocidade_da_luz: (value) => value.div(1079252849),
    },
    milhas_por_hora: {
      metros_por_segundo: (value) => value.div(2.23694),
      quilômetros_por_hora: (value) => value.div(0.621371),
      milhas_por_hora: (value) => value,
      nós: (value) => value.times(0.868976),
      pés_por_segundo: (value) => value.times(1.46667),
      mach: (value) => value.div(761.207),
      velocidade_da_luz: (value) => value.div(670616629),
    },
    nós: {
      metros_por_segundo: (value) => value.div(1.94384),
      quilômetros_por_hora: (value) => value.div(0.539957),
      milhas_por_hora: (value) => value.div(0.868976),
      nós: (value) => value,
      pés_por_segundo: (value) => value.times(1.68781),
      mach: (value) => value.div(661.47),
      velocidade_da_luz: (value) => value.div(582749918),
    },
    pés_por_segundo: {
      metros_por_segundo: (value) => value.div(3.28084),
      quilômetros_por_hora: (value) => value.div(0.911344),
      milhas_por_hora: (value) => value.div(1.46667),
      nós: (value) => value.div(1.68781),
      pés_por_segundo: (value) => value,
      mach: (value) => value.div(1116.47),
      velocidade_da_luz: (value) => value.div(983571056),
    },
    mach: {
      metros_por_segundo: (value) => value.times(340.29),
      quilômetros_por_hora: (value) => value.times(1225.08),
      milhas_por_hora: (value) => value.times(761.207),
      nós: (value) => value.times(661.47),
      pés_por_segundo: (value) => value.times(1116.47),
      mach: (value) => value,
      velocidade_da_luz: (value) => value.times(299792458).div(340.29),
    },
    velocidade_da_luz: {
      metros_por_segundo: (value) => value.times(299792458),
      quilômetros_por_hora: (value) => value.times(1079252849),
      milhas_por_hora: (value) => value.times(670616629),
      nós: (value) => value.times(582749918),
      pés_por_segundo: (value) => value.times(983571056),
      mach: (value) => value.times(299792458).div(340.29),
      velocidade_da_luz: (value) => value,
    },
  },
  mass: {
    // Tem-se as seguintes medidas para MASSA: grama, quilograma, tonelada, libra, onça, quilate, miligrama
    grama: {
      grama: (value) => value,
      quilograma: (value) => value.div(1000),
      tonelada: (value) => value.div(1000000),
      libra: (value) => value.times(0.00220462),
      onça: (value) => value.times(0.035274),
      quilate: (value) => value.times(5),
      miligrama: (value) => value.times(1000),
    },
    quilograma: {
      grama: (value) => value.times(1000),
      quilograma: (value) => value,
      tonelada: (value) => value.div(1000),
      libra: (value) => value.times(2.20462),
      onça: (value) => value.times(35.274),
      quilate: (value) => value.times(5000),
      miligrama: (value) => value.times(1000000),
    },
    tonelada: {
      grama: (value) => value.times(1000000),
      quilograma: (value) => value.times(1000),
      tonelada: (value) => value,
      libra: (value) => value.times(2204.62),
      onça: (value) => value.times(35274),
      quilate: (value) => value.times(5000000),
      miligrama: (value) => value.times(1000000000),
    },
    libra: {
      grama: (value) => value.div(0.00220462),
      quilograma: (value) => value.div(2.20462),
      tonelada: (value) => value.div(2204.62),
      libra: (value) => value,
      onça: (value) => value.times(16),
      quilate: (value) => value.times(2267.96),
      miligrama: (value) => value.times(453592),
    },
    onça: {
      grama: (value) => value.div(0.035274),
      quilograma: (value) => value.div(35.274),
      tonelada: (value) => value.div(35274),
      libra: (value) => value.div(16),
      onça: (value) => value,
      quilate: (value) => value.times(141.748),
      miligrama: (value) => value.times(28349.5),
    },
    quilate: {
      grama: (value) => value.div(5),
      quilograma: (value) => value.div(5000),
      tonelada: (value) => value.div(5000000),
      libra: (value) => value.times(0.000440925),
      onça: (value) => value.times(0.00705479),
      quilate: (value) => value,
      miligrama: (value) => value.times(200),
    },
    miligrama: {
      grama: (value) => value.div(1000),
      quilograma: (value) => value.div(1000000),
      tonelada: (value) => value.div(1000000000),
      libra: (value) => value.times(0.00000220462),
      onça: (value) => value.times(0.000035274),
      quilate: (value) => value.div(200),
      miligrama: (value) => value,
    },
  },
  area: {
    // Tem-se as seguintes medidas para ÁREA: metro quadrado, quilômetro quadrado, milha quadrada, jarda quadrada, pé quadrado, polegada quadrada, hectare, acre
    metro_quadrado: {
      metro_quadrado: (value) => value,
      quilômetro_quadrado: (value) => value.div(1000000),
      milha_quadrada: (value) => value.times(3.861e-7),
      jarda_quadrada: (value) => value.times(1.19599),
      pé_quadrado: (value) => value.times(10.7639),
      polegada_quadrada: (value) => value.times(1550),
      hectare: (value) => value.div(10000),
      acre: (value) => value.times(0.000247105),
    },
    quilômetro_quadrado: {
      metro_quadrado: (value) => value.times(1000000),
      quilômetro_quadrado: (value) => value,
      milha_quadrada: (value) => value.times(0.386102),
      jarda_quadrada: (value) => value.times(1195990),
      pé_quadrado: (value) => value.times(10763910.4),
      polegada_quadrada: (value) => value.times(1.55e12),
      hectare: (value) => value.times(100),
      acre: (value) => value.times(247.105),
    },
    milha_quadrada: {
      metro_quadrado: (value) => value.div(3.861e-7),
      quilômetro_quadrado: (value) => value.div(0.386102),
      milha_quadrada: (value) => value,
      jarda_quadrada: (value) => value.times(3097600),
      pé_quadrado: (value) => value.times(27878400),
      polegada_quadrada: (value) => value.times(4.014e9),
      hectare: (value) => value.times(259),
      acre: (value) => value.times(640),
    },
    jarda_quadrada: {
      metro_quadrado: (value) => value.div(1.19599),
      quilômetro_quadrado: (value) => value.div(1195990),
      milha_quadrada: (value) => value.div(3097600),
      jarda_quadrada: (value) => value,
      pé_quadrado: (value) => value.times(9),
      polegada_quadrada: (value) => value.times(1296),
      hectare: (value) => value.div(11959.9),
      acre: (value) => value.div(4840),
    },
    pé_quadrado: {
      metro_quadrado: (value) => value.div(10.7639),
      quilômetro_quadrado: (value) => value.div(10763910.4),
      milha_quadrada: (value) => value.div(27878400),
      jarda_quadrada: (value) => value.div(9),
      pé_quadrado: (value) => value,
      polegada_quadrada: (value) => value.times(144),
      hectare: (value) => value.div(107639),
      acre: (value) => value.div(43560),
    },
    polegada_quadrada: {
      metro_quadrado: (value) => value.div(1550),
      quilômetro_quadrado: (value) => value.div(1.55e12),
      milha_quadrada: (value) => value.div(4.014e9),
      jarda_quadrada: (value) => value.div(1296),
      pé_quadrado: (value) => value.div(144),
      polegada_quadrada: (value) => value,
      hectare: (value) => value.div(1.55e7),
      acre: (value) => value.div(6.273e6),
    },
    hectare: {
      metro_quadrado: (value) => value.times(10000),
      quilômetro_quadrado: (value) => value.div(100),
      milha_quadrada: (value) => value.times(0.00386102),
      jarda_quadrada: (value) => value.times(11959.9),
      pé_quadrado: (value) => value.times(107639),
      polegada_quadrada: (value) => value.times(1.55e7),
      hectare: (value) => value,
      acre: (value) => value.times(2.47105),
    },
    acre: {
      metro_quadrado: (value) => value.div(0.000247105),
      quilômetro_quadrado: (value) => value.div(247.105),
      milha_quadrada: (value) => value.div(640),
      jarda_quadrada: (value) => value.times(4840),
      pé_quadrado: (value) => value.times(43560),
      polegada_quadrada: (value) => value.times(6.273e6),
      hectare: (value) => value.div(2.47105),
      acre: (value) => value,
    },
  },
  volume: {
    // Tem-se as seguintes medidas para VOLUME: metro cúbico, litro, mililitro, quilômetro cúbico, pé cúbico, polegada cúbica, centímetro cúbico, milímetro cúbico
    metro_cúbico: {
      metro_cúbico: (value) => value,
      litro: (value) => value.times(1000),
      mililitro: (value) => value.times(1e6),
      quilômetro_cúbico: (value) => value.div(1e9),
      pé_cúbico: (value) => value.times(35.3147),
      polegada_cúbica: (value) => value.times(61023.7),
      centímetro_cúbico: (value) => value.times(1e6),
      milímetro_cúbico: (value) => value.times(1e9),
    },
    litro: {
      metro_cúbico: (value) => value.div(1000),
      litro: (value) => value,
      mililitro: (value) => value.times(1000),
      quilômetro_cúbico: (value) => value.div(1e6),
      pé_cúbico: (value) => value.times(0.0353147),
      polegada_cúbica: (value) => value.times(61.0237),
      centímetro_cúbico: (value) => value.times(1000),
      milímetro_cúbico: (value) => value.times(1e6),
    },
    mililitro: {
      metro_cúbico: (value) => value.div(1e6),
      litro: (value) => value.div(1000),
      mililitro: (value) => value,
      quilômetro_cúbico: (value) => value.div(1e9),
      pé_cúbico: (value) => value.times(0.0000353147),
      polegada_cúbica: (value) => value.times(0.0610237),
      centímetro_cúbico: (value) => value,
      milímetro_cúbico: (value) => value.times(1000),
    },
    quilômetro_cúbico: {
      metro_cúbico: (value) => value.times(1e9),
      litro: (value) => value.times(1e6),
      mililitro: (value) => value.times(1e9),
      quilômetro_cúbico: (value) => value,
      pé_cúbico: (value) => value.times(3.5315e10),
      polegada_cúbica: (value) => value.times(6.1024e13),
      centímetro_cúbico: (value) => value.times(1e15),
      milímetro_cúbico: (value) => value.times(1e18),
    },
    pé_cúbico: {
      metro_cúbico: (value) => value.div(35.3147),
      litro: (value) => value.times(28.3168),
      mililitro: (value) => value.times(28316.8),
      quilômetro_cúbico: (value) => value.div(3.5315e10),
      pé_cúbico: (value) => value,
      polegada_cúbica: (value) => value.times(1728),
      centímetro_cúbico: (value) => value.times(28316.8),
      milímetro_cúbico: (value) => value.times(2.832e7),
    },
    polegada_cúbica: {
      metro_cúbico: (value) => value.div(61023.7),
      litro: (value) => value.times(0.0163871),
      mililitro: (value) => value.times(16.3871),
      quilômetro_cúbico: (value) => value.div(6.1024e13),
      pé_cúbico: (value) => value.times(0.000578704),
      polegada_cúbica: (value) => value,
      centímetro_cúbico: (value) => value.times(16.3871),
      milímetro_cúbico: (value) => value.times(16387.1),
    },
    centímetro_cúbico: {
      metro_cúbico: (value) => value.div(1e6),
      litro: (value) => value.times(0.001),
      mililitro: (value) => value,
      quilômetro_cúbico: (value) => value.div(1e15),
      pé_cúbico: (value) => value.times(3.5315e-5),
      polegada_cúbica: (value) => value.times(0.0610237),
      centímetro_cúbico: (value) => value,
      milímetro_cúbico: (value) => value.times(1000),
    },
    milímetro_cúbico: {
      metro_cúbico: (value) => value.div(1e9),
      litro: (value) => value.times(1e-6),
      mililitro: (value) => value.times(0.001),
      quilômetro_cúbico: (value) => value.div(1e18),
      pé_cúbico: (value) => value.times(3.5315e-8),
      polegada_cúbica: (value) => value.times(0.0000610237),
      centímetro_cúbico: (value) => value.div(1000),
      milímetro_cúbico: (value) => value,
    },
  },
};

// Reconhecer as caixas na página
const elements = {
  category: document.getElementById("category"),
  fromUnit: document.getElementById("fromUnit"),
  toUnit: document.getElementById("toUnit"),
  inputValue: document.getElementById("inputValue"),
  resultDiv: document.getElementById("result"),
};

// Filtragem de teclas para não permitir outros caracteres além de números, "-" e o "."
var filterKeys = function (event) {
  return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46 || event.charCode == 45;
};

// Função para atualizar as opções de unidades de cada categoria
function updateUnitOptions() {
  // Pega o dado (nome) da caixa da categoria
  const category = elements.category.value;
  // Pega todas as medidas dentro de uma determinada categoria
  const units = conversions[category] ? Object.keys(conversions[category]) : [];

  // Limpa as opções anteriores (evita duplicatas ou mantimento de medidas fora da categoria)
  elements.fromUnit.innerHTML = "";
  elements.toUnit.innerHTML = "";

  // Para cada elemento do array deve-se criar uma opção nas caixas de seleção
  units.forEach((unit) => {
    const option1 = createOption(unit);
    const option2 = createOption(unit);
    elements.fromUnit.appendChild(option1);
    elements.toUnit.appendChild(option2);
  });
}

// Função para criar um elemento opção na caixa de seleção
function createOption(value) {
  const option = document.createElement("option");
  option.value = value;
  // Tira os "_" e substitui por espaços; Em seguida, pega a primeira letra da string inteira, a coloca maiúscula e por fim junta ao resto
  option.textContent = value.replace(/_/g, " ").replace(/^\w/, function (char) {
    return char.toUpperCase();
  });
  return option;
}

// Função para converter os valores
function convertValue(value, fromUnit, toUnit, category) {
  if (
    conversions[category] &&
    conversions[category][fromUnit] &&
    conversions[category][fromUnit][toUnit]
  ) {
    // Convertendo o valor para Big
    const bigValue = new Big(value);
    // Realizando a conversão usando big.js
    const convertedValue = conversions[category][fromUnit][toUnit](bigValue);
    return convertedValue; // Retornando como um objeto Big
  } else {
    return NaN;
  }
}

// Função para converter os valores e em seguida mostrá-los
function convertAndShowResult() {
  // Reconhecimento das opções selecionadas e dado colocado
  let inputValue = elements.inputValue.value; // Remove espaços em branco no início e no fim
  let category = elements.category.value;
  let fromUnit = elements.fromUnit.value;
  let toUnit = elements.toUnit.value;

  // Verifica se o valor de entrada é válido
  if (inputValue === '' || isNaN(inputValue)) {
    elements.resultDiv.textContent = "Digite um número válido para converter";
    return; // Retorna para evitar a execução do código de conversão
  }

  // Condicional para determinar se os valores foram colocados e em seguida realizar a conversão
  if (
    conversions[category] &&
    conversions[category][fromUnit] &&
    conversions[category][fromUnit][toUnit]
  ) {
    // Quando ele obtiver todos os dados e o INPUT, será realizada a conversão e aparecerá na tela
    const convertedValue = convertValue(inputValue, fromUnit, toUnit, category);
    const formattedValue = convertedValue.toLocaleString("pt-BR");
    elements.resultDiv.textContent = `O valor convertido é: ${formattedValue}`;
  } else {
    // Caso a conversão não seja possível
    elements.resultDiv.textContent = "Conversão não disponível para essas unidades";
  }
}

// Função para "escutar" os dados escolhidos
function attachEventListeners() {
  // Cada vez que a categoria for mudada, o evento (nesse caso o change) será "escutado" e as funções de atualizar e converter os dados serão executadas
  elements.category.addEventListener("change", () => {
    updateUnitOptions();
    convertAndShowResult();
  });

  // Adiciona a cada um dos elementos um "escutador", para que quando sejam mudados os dados sejam convertidos de acordo com a medida selecionada
  [elements.fromUnit, elements.toUnit, elements.inputValue].forEach(
    (element) => {
      element.addEventListener("input", convertAndShowResult);
    }
  );
}

// Chamada das funções
updateUnitOptions();
convertAndShowResult();
attachEventListeners();