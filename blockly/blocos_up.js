/*Block Definitions:*/
Blockly.Blocks['girar_esquerda'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://i.ibb.co/pK0Z4t0/esquerda.png", 25, 30, { alt: "*", flipRtl: "FALSE" }))
        .appendField("gire o braço")
        .appendField(new Blockly.FieldDropdown([["90","90"], ["80","80"], ["70","70"], ["60","60"], ["50","50"], ["40","40"], ["30","30"], ["20","20"], ["10","10"], ["0","0"]]), "NAME")
        .appendField("graus para a esquerda");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['girar_direita'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://i.ibb.co/LQV72Tn/direita.png", 25, 30, { alt: "*", flipRtl: "FALSE" }))
        .appendField("gire o braço")
        .appendField(new Blockly.FieldDropdown([["91","91"], ["110","110"], ["120","120"], ["130","130"], ["140","140"], ["150","150"], ["160","160"], ["170","170"], ["180","180"]]), "NAME")
        .appendField("graus para a direita");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['import_controls'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://i.ibb.co/mbvYhNQ/servo.png", 30, 30, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Importar todos os motores de controle");
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['definir_portas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Definir portas no Arduino ");
    this.appendDummyInput()
        .appendField("base: ")
        .appendField(new Blockly.FieldTextInput("11"), "base_attach")
        .appendField(", ângulo:")
        .appendField(new Blockly.FieldTextInput("9"), "angulo_attach")
        .appendField(", altura:")
        .appendField(new Blockly.FieldTextInput("10"), "altura_attach")
        .appendField("e garra:")
        .appendField(new Blockly.FieldTextInput("6"), "garra_attach");
    this.setPreviousStatement(true, "Number");
    this.setNextStatement(true, "Number");
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['init_arm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Inicializar braço robótico nas posições")
        .appendField(new Blockly.FieldImage("https://i.ibb.co/4V7Gp8S/robo-parado.png", 30, 30, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("Base: ")
        .appendField(new Blockly.FieldTextInput("90"), "base_pos_init")
        .appendField("graus")
        .appendField(", Ângulo:")
        .appendField(new Blockly.FieldTextInput("90"), "angulo_pos_init")
        .appendField("graus")
        .appendField(", Altura:")
        .appendField(new Blockly.FieldTextInput("90"), "altura_pos_init")
        .appendField("graus")
        .appendField("e Garra:")
        .appendField(new Blockly.FieldTextInput("35"), "garra_pos_init")
        .appendField("graus");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['altura_pos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://i.ibb.co/PrYWqWY/altura2.gif", 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("mover altura do braço para a posição")
        .appendField(new Blockly.FieldDropdown([["20","20"], ["30","30"], ["40","40"], ["50","50"], ["60","60"], ["70","70"], ["80","80"], ["90","90"], ["100","100"], ["110","110"], ["120","120"], ["130","130"], ["140","140"], ["150","150"], ["160","160"], ["160","160"], ["170","170"], ["180","180"]]), "NAME")
        .appendField("graus");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['angulo_pos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://i.ibb.co/nLkbB1K/angulo2.gif", 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("mover ângulo do braço para a posição")
        .appendField(new Blockly.FieldDropdown([["20","20"], ["30","30"], ["40","40"], ["50","50"], ["60","60"], ["70","70"], ["80","80"], ["90","90"], ["100","100"], ["110","110"], ["120","120"], ["130","130"], ["140","140"], ["150","150"], ["160","160"], ["160","160"], ["170","170"], ["180","180"]]), "NAME")
        .appendField("graus");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['garra_fechar_pos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://i.ibb.co/LDTkZLZ/fechar.gif", 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("fechar a garra")
        .appendField(new Blockly.FieldDropdown([["60","60"], ["85","85"], ["100","100"], ["120","120"], ["130","130"], ["145","145"]]), "NAME")
        .appendField("graus");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['garra_abrir_pos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://i.ibb.co/Cs1Yr57/abrir.gif", 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("abrir a garra")
        .appendField(new Blockly.FieldDropdown([["35","35"],["30","30"], ["25","25"], ["20","20"]]), "NAME")
        .appendField("graus");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/*Generator Stubs:*/

Blockly.JavaScript['girar_esquerda'] = function(block) {
  var dropdown_esquerda = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">valorBaseInicial</font> <font color="#434f54">=</font> &nbsp;<font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorBaseInicial</font><font color="#434f54">,</font> <font color="#000000">valorBaseFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorBaseFinal</font> <font color="#434f54">=</font> <font color="#000000">'+dropdown_esquerda+'</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">atual</font> <font color="#434f54">=</font> <font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorBaseInicial</font><font color="#434f54">,</font> <font color="#000000">valorBaseFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">moverServomotor</font><font color="#000000">(</font><font color="#000000">valorBaseInicial</font><font color="#434f54">,</font> <font color="#000000">atual</font><font color="#434f54">,</font> <font color="#000000">base</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
    return code;
};

Blockly.JavaScript['girar_direita'] = function(block) {
  var dropdown_direita = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
   var code = '<pre>&nbsp;<font color="#000000">valorBaseInicial</font> <font color="#434f54">=</font> &nbsp;<font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorBaseInicial</font><font color="#434f54">,</font> <font color="#000000">valorBaseFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorBaseFinal</font> <font color="#434f54">=</font> <font color="#000000">'+dropdown_direita+'</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">atual</font> <font color="#434f54">=</font> <font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorBaseInicial</font><font color="#434f54">,</font> <font color="#000000">valorBaseFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">moverServomotor</font><font color="#000000">(</font><font color="#000000">valorBaseInicial</font><font color="#434f54">,</font> <font color="#000000">atual</font><font color="#434f54">,</font> <font color="#000000">base</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['import_controls'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre><font color="#5e6d03">#include</font> <font color="#434f54">&lt;</font><b><font color="#d35400">Servo</font></b><font color="#434f54">.</font><font color="#000000">h</font><font color="#434f54">&gt;</font><br><b><font color="#d35400">Servo</font></b> <font color="#000000">base</font><font color="#434f54">,</font> <font color="#000000">angulo</font><font color="#434f54">,</font> <font color="#000000">altura</font><font color="#434f54">,</font> <font color="#000000">garra</font> <font color="#000000">;</font><br><font color="#00979c">int</font> <font color="#000000">pos</font><font color="#434f54">,</font> <font color="#000000">atual</font><font color="#000000">;</font><br><font color="#00979c">int</font> <font color="#000000">valorGarraInicial</font><font color="#434f54">,</font> <font color="#000000">valorAlturaInicial</font><font color="#434f54">,</font> <font color="#000000">valorAnguloInicial</font><font color="#434f54">,</font> <font color="#000000">valorBaseInicial</font><font color="#000000">;</font><br><font color="#00979c">int</font> <font color="#000000">valorGarraFinal</font><font color="#434f54">,</font> <font color="#000000">valorAlturaFinal</font><font color="#434f54">,</font> <font color="#000000">valorAnguloFinal</font><font color="#434f54">,</font> <font color="#000000">valorBaseFinal</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['definir_portas'] = function(block) {
  var text_base_attach = block.getFieldValue('base_attach');
  var text_angulo_attach = block.getFieldValue('angulo_attach');
  var text_altura_attach = block.getFieldValue('altura_attach');
  var text_garra_attach = block.getFieldValue('garra_attach');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre><br><font color="#00979c">void</font> <font color="#5e6d03">setup</font><font color="#000000">(</font><font color="#000000">)</font><br><font color="#000000">{</font><br>&nbsp;<b><font color="#d35400">Serial</font></b><font color="#434f54">.</font><font color="#d35400">begin</font><font color="#000000">(</font><font color="#000000">9600</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">base</font><font color="#434f54">.</font><font color="#d35400">attach</font><font color="#000000">(</font><font color="#000000">'+text_base_attach +'</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">angulo</font><font color="#434f54">.</font><font color="#d35400">attach</font><font color="#000000">(</font><font color="#000000">'+text_angulo_attach +'</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">altura</font><font color="#434f54">.</font><font color="#d35400">attach</font><font color="#000000">(</font><font color="#000000">'+text_altura_attach +'</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">garra</font><font color="#434f54">.</font><font color="#d35400">attach</font><font color="#000000">(</font><font color="#000000">'+text_garra_attach +'</font><font color="#000000">)</font><font color="#000000">;</font><br><font color="#000000">}</font></pre>';
  return code;
};

Blockly.JavaScript['init_arm'] = function(block) {
  var text_base_pos_init = block.getFieldValue('base_pos_init');
  var text_angulo_pos_init = block.getFieldValue('angulo_pos_init');
  var text_altura_pos_init = block.getFieldValue('altura_pos_init');
  var text_garra_pos_init = block.getFieldValue('garra_pos_init');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">inicializarBraco</font><font color="#000000">(</font><font color="#000000">'+text_base_pos_init+'</font><font color="#434f54">,</font> <font color="#000000">'+text_angulo_pos_init+'</font><font color="#434f54">,</font> <font color="#000000">'+text_altura_pos_init+'</font><font color="#434f54">,</font> <font color="#000000">'+text_garra_pos_init+'</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['altura_pos'] = function(block) {
  var dropdown_altura = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">valorAlturaInicial</font> <font color="#434f54">=</font> &nbsp;<font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorAlturaInicial</font><font color="#434f54">,</font> <font color="#000000">valorAlturaFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorAlturaFinal</font> <font color="#434f54">=</font> <font color="#000000">'+dropdown_altura+'</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">atual</font> <font color="#434f54">=</font> <font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorAlturaInicial</font><font color="#434f54">,</font> <font color="#000000">valorAlturaFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">moverServomotor</font><font color="#000000">(</font><font color="#000000">valorAlturaInicial</font><font color="#434f54">,</font> <font color="#000000">atual</font><font color="#434f54">,</font> <font color="#000000">altura</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['angulo_pos'] = function(block) {
  var dropdown_angulo = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">valorAnguloInicial</font> <font color="#434f54">=</font> &nbsp;<font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorAnguloInicial</font><font color="#434f54">,</font> <font color="#000000">valorAnguloFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorAnguloFinal</font> <font color="#434f54">=</font> <font color="#000000">'+dropdown_angulo+'</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">atual</font> <font color="#434f54">=</font> <font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorAnguloInicial</font><font color="#434f54">,</font> <font color="#000000">valorAnguloFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">moverServomotor</font><font color="#000000">(</font><font color="#000000">valorAnguloInicial</font><font color="#434f54">,</font> <font color="#000000">atual</font><font color="#434f54">,</font> <font color="#000000">angulo</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['garra_fechar_pos'] = function(block) {
  var dropdown_fechar = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">valorGarraInicial</font> <font color="#434f54">=</font> &nbsp;<font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorGarraInicial</font><font color="#434f54">,</font> <font color="#000000">valorGarraFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorGarraFinal</font> <font color="#434f54">=</font> <font color="#000000">'+dropdown_fechar+'</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">atual</font> <font color="#434f54">=</font> <font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorGarraInicial</font><font color="#434f54">,</font> <font color="#000000">valorGarraFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">moverServomotor</font><font color="#000000">(</font><font color="#000000">valorGarraInicial</font><font color="#434f54">,</font> <font color="#000000">atual</font><font color="#434f54">,</font> <font color="#000000">garra</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
  return code;
};

Blockly.JavaScript['garra_abrir_pos'] = function(block) {
  var dropdown_abrir = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre>&nbsp;<font color="#000000">valorGarraInicial</font> <font color="#434f54">=</font> &nbsp;<font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorGarraInicial</font><font color="#434f54">,</font> <font color="#000000">valorGarraFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorGarraFinal</font> <font color="#434f54">=</font> <font color="#000000">'+dropdown_abrir+'</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">atual</font> <font color="#434f54">=</font> <font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#000000">valorGarraInicial</font><font color="#434f54">,</font> <font color="#000000">valorGarraFinal</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">moverServomotor</font><font color="#000000">(</font><font color="#000000">valorGarraInicial</font><font color="#434f54">,</font> <font color="#000000">atual</font><font color="#434f54">,</font> <font color="#000000">garra</font><font color="#000000">)</font><font color="#000000">;</font></pre>';
  return code;
};


Blockly.Blocks['metodo_loop'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Movimentos do braço robótico:");
    this.setPreviousStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['metodo_loop'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '<br>void loop(){<br>\n'+statements_name+'<br>}';
  var code = '<pre><br><font color="#00979c">void</font> <font color="#5e6d03">loop</font><font color="#000000">(</font><font color="#000000">)</font><br><font color="#000000">{</font>&nbsp;'+statements_name+'<br><font color="#000000">}</font></pre>';
    return code;
};

Blockly.Blocks['import_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://i.ibb.co/LZFZQCt/engrenagem.gif", 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldImage("https://i.ibb.co/mbvYhNQ/servo.png", 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Ativar motores de controle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['import_functions'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '<pre><font color="#00979c">int</font> <font color="#000000">igualarPosInitFinal</font><font color="#000000">(</font><font color="#00979c">int</font> <font color="#000000">PosInit</font><font color="#434f54">,</font> <font color="#00979c">int</font> <font color="#000000">PosFinal</font><font color="#000000">)</font> <font color="#000000">{</font><br>&nbsp;<font color="#000000">PosInit</font> &nbsp;<font color="#434f54">=</font> <font color="#000000">PosFinal</font><font color="#000000">;</font><br>&nbsp;<font color="#5e6d03">return</font> <font color="#000000">PosInit</font><font color="#000000">;</font><br><font color="#000000">}</font><br><font color="#00979c">int</font> <font color="#000000">moverServomotor</font><font color="#000000">(</font><font color="#00979c">int</font> <font color="#000000">a</font><font color="#434f54">,</font> <font color="#00979c">int</font> <font color="#000000">b</font><font color="#434f54">,</font> <b><font color="#d35400">Servo</font></b> <font color="#000000">motor</font><font color="#000000">)</font> <font color="#000000">{</font><br>&nbsp;<font color="#00979c">int</font> <font color="#000000">pos</font><font color="#000000">;</font><br>&nbsp;<font color="#5e6d03">if</font> <font color="#000000">(</font><font color="#000000">a</font> <font color="#434f54">&lt;</font> <font color="#000000">b</font><font color="#000000">)</font> <font color="#000000">{</font><br>&nbsp;&nbsp;&nbsp;<font color="#5e6d03">for</font> <font color="#000000">(</font><font color="#000000">pos</font> <font color="#434f54">=</font> <font color="#000000">a</font><font color="#000000">;</font> <font color="#000000">pos</font> <font color="#434f54">&lt;=</font> <font color="#000000">b</font><font color="#000000">;</font> <font color="#000000">pos</font> <font color="#434f54">+=</font> <font color="#000000">1</font><font color="#000000">)</font><br>&nbsp;&nbsp;&nbsp;<font color="#000000">{</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000000">motor</font><font color="#434f54">.</font><font color="#d35400">write</font><font color="#000000">(</font><font color="#000000">pos</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#d35400">delay</font><font color="#000000">(</font><font color="#000000">15</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;&nbsp;&nbsp;<font color="#000000">}</font><br>&nbsp;<font color="#000000">}</font><br>&nbsp;<font color="#5e6d03">if</font> <font color="#000000">(</font><font color="#000000">a</font> <font color="#434f54">&gt;=</font> <font color="#000000">b</font><font color="#000000">)</font> <font color="#000000">{</font><br>&nbsp;&nbsp;&nbsp;<font color="#5e6d03">for</font> <font color="#000000">(</font><font color="#000000">pos</font> <font color="#434f54">=</font> <font color="#000000">a</font><font color="#000000">;</font> <font color="#000000">pos</font> <font color="#434f54">&gt;=</font> <font color="#000000">b</font><font color="#000000">;</font> <font color="#000000">pos</font> <font color="#434f54">-=</font> <font color="#000000">1</font><font color="#000000">)</font><br>&nbsp;&nbsp;&nbsp;<font color="#000000">{</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000000">motor</font><font color="#434f54">.</font><font color="#d35400">write</font><font color="#000000">(</font><font color="#000000">pos</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#d35400">delay</font><font color="#000000">(</font><font color="#000000">15</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;&nbsp;&nbsp;<font color="#000000">}</font><br>&nbsp;<font color="#000000">}</font><br><font color="#000000">}</font><br><font color="#00979c">int</font> <font color="#000000">inicializarBraco</font><font color="#000000">(</font><font color="#00979c">int</font> <font color="#000000">bas</font><font color="#434f54">,</font> <font color="#00979c">int</font> <font color="#000000">ang</font><font color="#434f54">,</font> <font color="#00979c">int</font> <font color="#000000">alt</font><font color="#434f54">,</font> <font color="#00979c">int</font> <font color="#000000">gar</font><font color="#000000">)</font> <font color="#000000">{</font><br>&nbsp;<font color="#000000">valorBaseInicial</font> <font color="#434f54">=</font> <font color="#000000">bas</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorAnguloInicial</font> <font color="#434f54">=</font> <font color="#000000">ang</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorAlturaInicial</font> <font color="#434f54">=</font> <font color="#000000">alt</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorGarraInicial</font> <font color="#434f54">=</font> <font color="#000000">gar</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorBaseFinal</font> <font color="#434f54">=</font> <font color="#000000">valorBaseInicial</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorAnguloFinal</font> <font color="#434f54">=</font> <font color="#000000">valorAnguloInicial</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorAlturaFinal</font> <font color="#434f54">=</font> <font color="#000000">valorAlturaInicial</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">valorGarraFinal</font> <font color="#434f54">=</font> <font color="#000000">valorGarraInicial</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">base</font><font color="#434f54">.</font><font color="#d35400">write</font><font color="#000000">(</font><font color="#000000">valorBaseInicial</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">angulo</font><font color="#434f54">.</font><font color="#d35400">write</font><font color="#000000">(</font><font color="#000000">valorAnguloInicial</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">altura</font><font color="#434f54">.</font><font color="#d35400">write</font><font color="#000000">(</font><font color="#000000">valorAlturaInicial</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#000000">garra</font><font color="#434f54">.</font><font color="#d35400">write</font><font color="#000000">(</font><font color="#000000">valorGarraInicial</font><font color="#000000">)</font><font color="#000000">;</font><br>&nbsp;<font color="#d35400">delay</font><font color="#000000">(</font><font color="#000000">300</font><font color="#000000">)</font><font color="#000000">;</font><br><font color="#000000">}</font></pre>';
  return code;
};


