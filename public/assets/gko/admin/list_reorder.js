var list_reorder={initialised:!1,init:function(){list_reorder.sortable_list.nestedSortable({disableNesting:"no-nest",forcePlaceholderSize:!0,handle:"span.handle",helper:"clone",items:"li",maxLevels:3,opacity:.6,placeholder:"placeholder",revert:250,tabSize:25,tolerance:"pointer",toleranceElement:"> div"}),list_reorder.sortable_list.sortable({update:function(a,b){item_id=b.item.attr("id"),typeof item_id=="undefined"?$("#item").html("Have no id"):$("#item").html(item_id),parent_id=b.item.parent().attr("id"),$("#parent").html(parent_id),prev_id=b.item.prev().attr("id"),typeof prev_id=="undefined"?$("#prev").html("It is first!"):$("#prev").html(prev_id),next_id=b.item.next().attr("id"),typeof next_id=="undefined"?$("#next").html("It is last!"):$("#next").html(next_id),jQuery.ajax({type:"POST",url:list_reorder.url,data:{node_id:item_id,parent_id:parent_id,prev_id:prev_id,next_id:next_id,authenticity_token:"#{form_authenticity_token}"},dataType:"script",beforeSend:function(a){attachLoading("body")},error:function(a,b,c){alert(c)},complete:function(a,b){removeLoading("body")}})}}),$("#reorder_action").bind("click",function(a){list_reorder.enable_reordering(a)}),$("#reorder-done-button").bind("click",function(a){list_reorder.disable_reordering(a),a.preventDefault()}),list_reorder.disable_reordering()},enable_reordering:function(a){a&&a.preventDefault(),$("a.nestedset-button").show(),list_reorder.sortable_list.find(".controls a").not(".nestedset-button").hide(),list_reorder.sortable_list.nestedSortable("enable").addClass("reordering"),$("#reorder_action, #reorder-action-hint, span.status").toggle()},disable_reordering:function(a){a&&(a.preventDefault(),list_reorder.sortable_list.nestedSortable("disable").removeClass("reordering"),$("#reorder_action, #reorder-action-hint, span.status").toggle()),$("a.nestedset-button").hide(),list_reorder.sortable_list.find(".controls a").not(".nestedset-button").show()}};