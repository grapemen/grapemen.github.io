var perVoices = ['Vittoria', 'Jean-Pierre',  'Isabelle', , 'Miguel',  'Marta', 'Dog', 'Duncan', 'Matthias', 'Katrin', 'Whispery'];

var personalHtml = '<label>Voice:<select id="voice_select"><option value="divider" class="center">----(US English)----</option><option selected="selected" value="Allison">Allison</option><option value="Amy">Amy</option><option value="Belle">Belle</option><option value="Callie">Callie</option><option value="Charlie">Charlie</option><option value="Dallas">Dallas</option><option value="Damien">Damien</option><option value="David">David</option><option value="Diane">Diane</option><option value="Duchess">Duchess</option><option value="Duncan">Duncan</option><option value="Emily">Emily</option><option value="Linda">Linda</option><option value="Robin">Robin</option><option value="Shouty">Shouty</option><option value="Walter">Walter</option><option value="William">William</option><option value="Whispery">Whispery</option><option value="divider" class="center">----(UK English)----</option><option value="Lawrence">Lawrence</option><option value="Millie">Millie</option><option value="divider" class="center">----(Italian)----</option><option value="Vittoria">Vittoria</option><option value="divider" class="center">----(German)----</option><option value="Katrin">Katrin</option><option value="Matthias">Matthias</option><option value="divider" class="center">--(Canadian French)--</option><option value="Isabelle">Isabelle</option><option value="Jean-Pierre">Jean-Pierre</option><option value="divider" class="center">--(Americas Spanish)--</option><option value="Alejandra">Alejandra</option><option value="Miguel">Miguel</option></select></label>';
var telephonyHtml = '<label>Voice:<select id="voice_select"><option value="divider" class="center">----(US English)----</option><option selected="selected" value="Allison-8kHz">Allison-8kHz</option><option value="Callie-8kHz">Callie-8kHz</option><option value="David-8kHz">David-8kHz</option><option value="Diane-8kHz">Diane-8kHz</option><option value="William-8kHz">William-8kHz</option><option value="divider" class="center">----(UK English)----</option><option value="Lawrence-8kHz">Lawrence-8kHz</option><option value="Millie-8kHz">Millie-8kHz</option><option value="divider" class="center">----(Italian)----</option><option value="Vittoria-8kHz">Vittoria-8kHz</option><option value="divider" class="center">----(German)----</option><option value="Katrin-8kHz">Katrin-8kHz</option><option value="Matthias-8kHz">Matthias-8kHz</option><option value="divider" class="center">--(Canadian French)--</option><option value="Isabelle-8kHz">Isabelle-8kHz</option><option value="Jean-Pierre-8kHz">Jean-Pierre-8kHz</option><option value="divider" class="center">--(Americas Spanish)--</option><option value="Alejandra-8kHz">Alejandra-8kHz</option><option value="Miguel-8kHz">Miguel-8kHz</option></select></label>';
var defaultText = {"Belle":"Well hi there. They call me Belle, and it is a pleasure to speak for you.","Dallas":"Howdy, my name is Dallas. In the office, or on the prairie, I'm at home just about anywhere.","Charlie":"Hi, my name is Charlie, and I'm always happy to help. Unless you're moving.","Vittoria":"Mi chiamo Vittoria. Posso leggere tutto ciÃ² che vuoi.", "Jean-Pierre":"Je suis Jean-Pierre. Cepstral sait rapidement et facilement construire des voix de qualitÃ©.", "Lawrence":"Hello, my name is Lawrence. Some people think I sound more cultured and sophisticated than other TTS voices.", "Callie":"Hello, I'm Callie. When I heard there was a job opening available at Cepstral I just couldn't keep quiet.", "Linda":"Hello, my name is Linda. My voice never gets tired once I start talking.", "Isabelle":"Bonjour, je m'appelle Isabelle. Je suis du Quebec. Je peux aider vos clients francophones.", "Amy":"Hi, I'm Amy and I enjoy discussing politics over tea.", "David":"I'm David. I enjoy reading aloud. It's kind of my specialty.", "Emily":"I'm Emily. I'm a sophisticated woman who's ready to speak at a moment's notice.", "Diane":"I'm Cepstral Diane. My voice, like all Cepstral voices, can be customized in a variety of ways.", "Robin":"Hi, I'm Robin, the youngest member of the Cepstral family.", "Damien":"I'm Damien, Cepstral's voice with a darker personality. I'm actually a really nice guy though.", "William":"Greetings, I'm William. I enjoy reading books and talking about current events.", "Walter":"Hi, I'm Walter, and I am an expert story teller and screen reader.", "Millie":"Hello there, my name is Millie, and I would be delighted to read for you.", "Miguel":"Hola, me llamo Miguel. Mi voz es perfecta para reproducir cualquier texto en espaÃ±ol.", "Shouty":"Why just say it, when shouting it is much more enjoyable?", "Alejandra":"Buenos dÃ­as. Mi nombre es Cepstral Alejandra. Me gustarÃ­a mucho ofrecerle mi voz.", "Dog":"Who knew that dogs could do text-to-speech?", "Duncan":"Let me introduce myself. I am Duncan, and I would be happy to read to you the news.", "Matthias":"Guten Tag, mein Name ist Matthias. Ich bin ein Kollege von Katrin.", "Duchess":"I'm Duchess, one of the characters offered by Cepstral. I feel at home just about anywhere.", "Katrin":"Hallo, ich bin Cepstrals Katrin-Stimme. Ich spreche alle deutschen Texte.", "Whispery":"I'm Cepstral Whispery. People always think I'm up to something, but I'm just trying to be polite.", "Allison":"Hello, I am Allison. I am Cepstral's premier voice", "Allison-8kHz":"My name is Allison, and my voice is excellent for use over the phone.", "Callie-8kHz":"My name is Callie, and my voice is excellent for use over the phone.", "David-8kHz":"My name is David, and my voice is excellent for use over the phone.", "Diane-8kHz":"My name is Diane, and my voice is excellent for use over the phone.", "William-8kHz":"I'm a special version of William that enjoys talking on the phone.", "Lawrence-8kHz":"My name is Lawrence, and my voice is excellent for use over the phone.", "Millie-8kHz":"My name is Millie, and my voice is excellent for use over the phone.", "Vittoria-8kHz":"Il mio nome Ã¨ Vittoria, e la mia voce Ã¨ eccellente per l'uso al telefono.", "Katrin-8kHz":"Mein Name ist Katrin, und meine Stimme ist fÃ¼r den Einsatz Ã¼ber das Telefon hervorragend.", "Matthias-8kHz":"Mein Name ist Matthias, und meine Stimme ist fÃ¼r den Einsatz Ã¼ber das Telefon hervorragend geeignet.", "Isabelle-8kHz":"Mon nom est Isabel, et ma voix est excellente pour une utilisation sur le tÃ©lÃ©phone.", "Jean-Pierre-8kHz":"Je suis Jean-Pierre. Cepstral sait rapidement et facilement construire des voix de qualitÃ©", "Alejandra-8kHz":"Mi nombre es Allejandra, y mi voz es excelente para su uso a travÃ©s del telÃ©fono.", "Miguel-8kHz":"Mi nombre es Miguel, y mi voz es excelente para su uso a travÃ©s del telÃ©fono."};

$(document).ready(function(){
	
	$('input[type="radio"][name="voice_type"]').change(function(){
		var type = $('input[type="radio"][name="voice_type"]:checked').val();
		var html = type == 'personal' ? personalHtml : telephonyHtml;
		$('div#voice_select').html(html);
		$("select#voice_select").change(function(){
			
			voiceChanged($(this));
		});
		voiceChanged($("select#voice_select"));
	});
	
	$("textarea#demo_text").click(function(){
		
		var currentText = $("textarea#demo_text").val();
	
		for(key in defaultText)
		{
			if(defaultText[key] == currentText)
			{
				$("textarea#demo_text").val("");
				break;
			}
		}
	});
	
	$('textarea#demo_text').bind('input propertychange', function() {
		
		var textArea = $(this);
		var len = textArea.val().length;

		if(len > 120)
		{
			textArea.val(textArea.val().substring(0, 120));
		}
	});
	
	$("select#voice_select").change(function(){
		
		voiceChanged($(this));
	});
	
	$("button#demo_submit").click(function(){
		$("button#demo_submit").attr("disabled", "disabled");

		var url = "http://speech.seediffusion.cc:7774/synthesize";
		
		$("button#demo_submit").html('<img src="https://www.cepstral.com/media/images/ajax_loader.gif" />');
		
		var params = {"voice":$("select#voice_select option:selected").html(), "text":$("textarea#demo_text").val(), "createTime":(new Date()).getTime(), "rate":$("select#rate option:selected").val(), "pitch":$("select#pitch option:selected").val(), "sfx":$("select#effect option:selected").val()};
		
		$.get(url, params, function(data){
			
			var array = $.parseJSON(data);
			
			if(array['error'] != null)
			{
				if(array['error'] == "session_expired")
				{
					location.reload();
				}
				else
				{
					$("body").append('<div id="error_dialog" style="display:none; font-size:.9em;">' + array['error_message'] + '</div>');
					$("div#error_dialog").dialog({modal:true, width:400, height:"auto", title:"Synthesis Limit Reached"});
				}
			}
			else
			{
				if(Modernizr.audio)
				{
					var mobilePlay = "";
                    if(array['isMobile'] != null && array['isMobile'] == true)
					{
						mobilePlay = "controls=\"controls\"";
					}
					var html = "<audio id=\"demo_audio\"  controls=\"controls\" onloadeddata=\"/*Hack for Safari on Mountain Lion*/setTimeout(audioDone, 1000);\"><source src=\""+array['mp3_loc']+"\" type=\"audio/mpeg\" /></audio>";
				
					$("div#demo_output").html(html);
                    document.getElementById('demo_audio').play();
                }
                else
				{
					createSound(array['mp3_loc']);
				}
			}
			
			
		});
	});
	
	$("button#demo_submit").removeAttr("disabled");
	$('input[type="radio"][name="voice_type"][value="personal"]').click();
});

function createSound(mp3Loc)
{
	soundManager.setup({
	  url: 'https://www.cepstral.com/media/sound_manager/swf/',
	//  debugMode: false,
	  onready: function() {
		var mySound = soundManager.createSound({
		  id: 'demoAudio',
		  url: mp3Loc,
		  onfinish: function(){audioDone();}
		});
		mySound.play();
	  },
	  ontimeout: function() {
		alert("Error playing audio. Please contact Cepstral support");
		// Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
	  }
	});
}

function voiceChanged(voice)
{
	var value = voice.val();
		
	if(value == "divider")
	{
		$("textarea#demo_text").val("You must select a voice!");
		$("button#demo_submit").attr("disabled", "disabled");
	}
	else
	{
		$("textarea#demo_text").val(defaultText[value]);
		$("button#demo_submit").removeAttr("disabled");
	}
}

function audioDone()
{
	$.post('', function(data){});
	$("button#demo_submit").removeAttr("disabled");
	$("button#demo_submit").html("Say it");
	$("#demoAudio").remove();
	soundManager.unload('demoAudio');
	soundManager.destroySound('demoAudio');
}
