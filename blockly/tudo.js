


  Blockly.Blocks['girar_direita'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("gire o braço ")
          .appendField(new Blockly.FieldDropdown([["91","91"], ["110","110"], ["120","120"], ["130","130"], ["140","140"], ["150","150"], ["160","160"], ["170","170"], ["180","180"]]), "direita")
          .appendField("graus")
          .appendField(new Blockly.FieldImage("https://image.flaticon.com/icons/png/512/44/44905.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['girar_direita'] = function(block) {
    var dropdown_direita = block.getFieldValue('direita');
    // TODO: Assemble JavaScript into code variable.
    var code = 'braco_pos_inicial = bracoPos(braco_pos_inicial, braco_pos_final); <br> p = bracoPos(braco_pos_inicial, '+dropdown_direita+'); <br> moverBraco(BracoPosInicial,p);<br><br>\n';
    return code;
  };


  Blockly.Blocks['fechar_garra'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("fechar a garra")
          .appendField(new Blockly.FieldDropdown([["60","60"], ["85","85"], ["100","100"], ["120","120"], ["130","130"], ["145","145"]]), "fechar")
          .appendField("graus")
          .appendField(new Blockly.FieldImage("https://img.icons8.com/all/500/clenched-fist.png", 25, 25, { alt: "*", flipRtl: "FALSE" }));
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['fechar_garra'] = function(block) {
    var dropdown_fechar = block.getFieldValue('fechar');
    // TODO: Assemble JavaScript into code variable.
    var code = 'garra_pos_inicial = garraPos(garra_pos_inicial, garra_pos_final); <br> p = garraPos(garra_pos_inicial, '+dropdown_fechar+'); <br> moverGarra(garraPosInicial,p);<br><br>\n';
    return code;
  };
 
  Blockly.Blocks['abrir_garra'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("abrir a garra")
          .appendField(new Blockly.FieldDropdown([["30","30"], ["25","25"], ["20","20"]]), "abrir")
          .appendField("graus")
          .appendField(new Blockly.FieldImage("https://download.seaicons.com/icons/icons8/ios7/512/Hands-Whole-Hand-icon.png", 25, 25, { alt: "*", flipRtl: "FALSE" }));
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['abrir_garra'] = function(block) {
    var dropdown_abrir = block.getFieldValue('abrir');
    // TODO: Assemble JavaScript into code variable.
    var code = 'garra_pos_inicial = garraPos(garra_pos_inicial, garra_pos_final); <br> p = garraPos(garra_pos_inicial, '+dropdown_abrir+'); <br> moverGarra(garraPosInicial,p);<br><br>\n';
    return code;
  };

  Blockly.Blocks['mover_altura'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Mover altura do braço para a posição")
          .appendField(new Blockly.FieldDropdown([["20","20"], ["30","30"], ["40","40"], ["50","50"], ["60","60"], ["70","70"], ["80","80"], ["90","90"], ["100","100"], ["110","110"], ["120","120"], ["130","130"], ["140","140"], ["150","150"], ["160","160"], ["170","170"], ["180","180"]]), "altura")
          .appendField("graus")
          .appendField(new Blockly.FieldImage("https://image.flaticon.com/icons/png/512/54/54668.png", 25, 25, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldImage("https://image.flaticon.com/icons/svg/17/17969.svg", 25, 25, { alt: "*", flipRtl: "FALSE" }));
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['mover_altura'] = function(block) {
    var dropdown_altura = block.getFieldValue('altura');
    // TODO: Assemble JavaScript into code variable.
    var code = 'moverAltura(alturaPosAtual,'+dropdown_altura+');<br><br>\n';
    return code;
  };

  Blockly.Blocks['mover_angulo'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Mover ângulo do braço para a posição")
          .appendField(new Blockly.FieldDropdown([["20","20"], ["30","30"], ["40","40"], ["50","50"], ["60","60"], ["70","70"], ["80","80"], ["90","90"], ["100","100"], ["110","110"], ["120","120"], ["130","130"], ["140","140"], ["150","150"], ["160","160"], ["170","170"], ["180","180"]]), "angulo")
          .appendField("graus")
          .appendField(new Blockly.FieldImage("https://image.flaticon.com/icons/png/512/120/120833.png", 25, 25, { alt: "*", flipRtl: "FALSE" }))
          .appendField(new Blockly.FieldImage("https://image.flaticon.com/icons/svg/17/17969.svg", 25, 25, { alt: "*", flipRtl: "FALSE" }));
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['mover_angulo'] = function(block) {
    var dropdown_angulo = block.getFieldValue('angulo');
    // TODO: Assemble JavaScript into code variable.
    var code = 'moverAngulo(anguloPosAtual,'+dropdown_angulo+');<br><br>\n';
    return code;
  };








Blockly.Blocks['block_posicao_padrao'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Posição Padrão");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['block_posicao_padrao'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>base.write(90);\n <br>altura.write(90);\n<br>angulo.write(90);\n <br>garra.write(35);\n';
    return code;
  };
/*-**/

Blockly.Blocks['block_reset_padrao'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Reset");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.JavaScript['block_reset_padrao'] = function(block) {
      // TODO: Assemble JavaScript into code variable.
      var code = '<br>base.write(90);\n <br>altura.write(90);\n<br>angulo.write(90);\n <br>garra.write(35);\n';
      return code;
    };
  
  
  /****/
  Blockly.Blocks['block_subir_altura'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Suba para a posição")
            .appendField(new Blockly.FieldDropdown([["90","alt_90"], ["100","alt_100"], ["110","alt_110"], , ["120","alt_120"]]), "posicao_altura");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
     this.setTooltip("");
     this.setHelpUrl("");
      }
    };
    Blockly.JavaScript['block_subir_altura'] = function(block) {
      var dropdown_posicao_altura = block.getFieldValue('posicao_altura');
      // TODO: Assemble JavaScript into code variable.
      var code = '...;\n';
      return code;
    };





/******************************************************************** */
Blockly.Blocks['servo'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField(new Blockly.FieldTextInput("Servo"), "servo");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['servo'] = function(block) {
    var text_servo = block.getFieldValue('servo');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '#include &lt;Servo.h>\n\n';
    return code;
};

Blockly.Blocks['esperesegundos'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField(new Blockly.FieldLabelSerializable("Espere por"), "espere")
          .appendField(new Blockly.FieldTextInput("1"), "NAME")
          .appendField(new Blockly.FieldLabelSerializable("milesimos"), "milesimos");
      this.setPreviousStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['esperesegundos'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'delay('+text_name+');';
    return code;
  };





















Blockly.Blocks['middle'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("middle")
            .appendField(new Blockly.FieldTextInput("port"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['middle'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'middle.attach('+text_name+');';
    return code;
};

Blockly.Blocks['right'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("right")
            .appendField(new Blockly.FieldTextInput("port"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['right'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>right.attach('+text_name+');';
    return code;
};

Blockly.Blocks['left'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("left")
            .appendField(new Blockly.FieldTextInput("port"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['left'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>left.attach('+text_name+');';
    return code;
};

Blockly.Blocks['right_mov'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("right")
            .appendField(new Blockly.FieldTextInput("graus"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['right_mov'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'right.write('+text_name+');<br>\n';
    return code;
};

Blockly.Blocks['left_mov'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("left")
            .appendField(new Blockly.FieldTextInput("graus"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

    Blockly.JavaScript['left_mov'] = function(block) {
        var text_name = block.getFieldValue('NAME');
        // TODO: Assemble JavaScript into code variable.
        var code = 'left.write('+text_name+');<br>\n';
        return code;
    };

Blockly.Blocks['middle_mov'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("middle")
            .appendField(new Blockly.FieldTextInput("graus"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['middle_mov'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'middle.write('+text_name+');<br>\n';
    return code;
};

Blockly.Blocks['claw_mov'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("claw")
            .appendField(new Blockly.FieldTextInput("graus"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['claw_mov'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'claw.write('+text_name+');<br>\n';;
    return code;
};


    Blockly.Blocks['claw'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("claw")
                .appendField(new Blockly.FieldTextInput("port"), "NAME");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(120);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

Blockly.JavaScript['claw'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>claw.attach('+text_name+');';
    return code;
};

Blockly.Blocks['servo_tipo'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("Servo");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['servo_tipo'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>Servo \n'+statements_name+';';
    return code;
};

Blockly.Blocks['var_claw'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("claw");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['var_claw'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'claw,\n';
    return code;
};

Blockly.Blocks['var_middle'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("middle");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['var_middle'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'middle\n';
    return code;
};

Blockly.Blocks['var_left'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("left");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['var_left'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' left, \n';
    return code;
};

Blockly.Blocks['var_right'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("right");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['var_right'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' right, \n';
    return code;
};



Blockly.Blocks['metodo_setup'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("setup");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['metodo_setup'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>void setup(){<br>\n'+statements_name+'<br>}';
    return code;
};

Blockly.Blocks['serial_begin'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(new Blockly.FieldTextInput("serial"), "NAME");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['serial_begin'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['var'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['var'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['delay'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("delay")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['serial'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("serial")
            .appendField(new Blockly.FieldTextInput("9600"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['serial'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<pre>r="#00979c">int</font> <font color="#000000">ang</font><font color="#434f54">,</font> <font color="#00979c">int</font> <font color="#000000">alt</font><font color="#434f54">,</font> <font color="#00979c">int</font> <font color="#000000">gar</font><font color="#000000">)</font><font color="#000000">{</font>&nbsp;<font color="#000000">valorBaseInicial</font> <font color="#434f54">=</font> <font color="#000000">bas</font><font color="#000000">;</font></pre>';
	return code;
};

Blockly.JavaScript['delay'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'delay('+text_name+');<br>\n';
    return code;
};