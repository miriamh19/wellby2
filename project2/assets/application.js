// Put your application javascript here

$(document).ready(function(){
    let
        onQuantityButtonClick= function(event) {

            let
                $button=$(this),
                $form= $button.closest('form'),
                $quantity= $form.find('.js-q-field'),
                quantityValue= parseInt($quantity.val()),
                max= $quantity.attr('max') ? parseInt($quantity.attr('max')) : null;
            
            if($button.hasClass('plus') && (max === null || quantityValue+1 <= max)) {
                // do something with plus
                $quantity.val(quantityValue + 1).change();
            }
            else if($button.hasClass('minus')){
                // do something with minus
                $quantity.val(quantityValue - 1).change();
            }
        };
    
    onQuantityFieldChange=function(event){
            let
                $field = $(this),
                $form = $field.closest('form'),
                $quantityText = $form.find('.js-q-text'),
                shouldDisableMinus = parseInt(this.value) === 1 ,
                shouldDisablePlus= parseInt(this.value) === parseInt($field.attr('max')),
                $minusButton = $form.find('.js-q-button.minus'),
                $plusButton = $form.find('.js-q-button.plus');
        
            $quantityText.text(this.value);
        
            if (shouldDisableMinus) {
                $minusButton.prop('disabled',true);
            }
            else if ($minusButton.prop('disabled') === true) {
                $minusButton.prop('disabled', false);
            }
        
            if (shouldDisablePlus) {
                $plusButton.prop('disabled',true);
            }
            else if ($plusButton.prop('disabled') === true) {
                $plusButton.prop('disabled', false);
            }
        }
    onVariantRadioChange = function(event){
        let    
           $radio = $(this),
           $form = $radio.closest('form'),
           max= $radio.attr('data-inventory-quantity'),
           $quantity= $form.find('js-q-field');
           $addtocartbutton = $form.find('#add-to-cart-button');
   
           if ($addtocartbutton.prop('disabled') === true) {
               $addtocartbutton.prop('disabled', false);
           }
   
           $quantity.attr('max',max);
   
           if (parseInt($quantity.val()) > max){
               $quantity.val(max).change();
           }
    };

$(document).on('click','.js-q-button', onQuantityButtonClick);
$(document).on('change', '.js-q-field', onQuantityFieldChange);
$(document).on('change', '.js-variant-radio', onVariantRadioChange);
});